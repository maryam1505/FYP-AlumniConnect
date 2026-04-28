<?php

namespace App\Http\Controllers;

use App\Models\MentorshipChannel;
use App\Models\MentorshipChannelMember;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;


class MentorshipChannelController extends Controller
{
    private function authorizeChannel(MentorshipChannel $channel) {
        $user = Auth::user();

        if ($channel->mentor_id !== (string)$user->_id && !$user->isAdmin()) {
            abort(response()->json(['message' => 'Forbidden'], 403));
        }
    }
    public function index(Request $request) {
        
        $channels = MentorshipChannel::with('mentor.profile')
            ->when($request->status,   fn($q) => $q->where('status', $request->status))
            ->when($request->category, fn($q) => $q->where('category', $request->category))
            ->paginate(15);
        if($channels->count() === 0) {
            return response()->json(['message' => "No Channels Available"], 404);
        }
        return response()->json(['data' => $channels], 200);
    }

    public function store(Request $request) {

        $validator = Validator::make($request->all(), [
            'title'         => 'required|string|max:255',
            'description'   => 'nullable|string',
            'category'      => 'nullable|string|max:100',
            'max_members'   => 'nullable|integer|min:1',
            'resources'     => 'nullable|array',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'errors'  => $validator->errors()
            ], 422);
        }

        $mentor = Auth::user();

        if (!$mentor) {
            return response()->json(['message' => 'Unauthenticated'], 401);
        }

        if ($mentor->role !== 'alumni') {
            return response()->json([
                'message' => 'Only alumni can create mentorship channels'
            ], 403);
        }

        try {
            $exists = MentorshipChannel::where('mentor_id', $mentor->_id)
                ->where('title', $request->title)
                ->first();

            if ($exists) {
                return response()->json([
                    'message' => 'Channel already exists with this title'
                ], 409);
            }
            $channel = MentorshipChannel::create([
                'mentor_id'   => $mentor->_id,
                'title'       => $request->title,
                'description' => $request->description,
                'category'    => $request->category,
                'status'      => 'active',
                'max_members' => $request->max_members,
                'resources'   => is_string($request->resources)
                                    ? json_decode($request->resources, true)
                                    : ($request->resources ?? []),
            ]);

            $channelId = (string) $channel->_id;
            $member = MentorshipChannelMember::create([
                'mentorship_channel_id' => $channelId,
                'user_id' => (string)$mentor->_id,
                'role' => 'moderator',
                'status' => 'active',
                'joined_date' => now(),
            ]);

            $mentor->update([
                'alumni_info.mentorship_available' => true
            ]);

            return response()->json([
                'message' => 'Mentorship channel created successfully',
                'data'    => $channel
            ], 201);
            
        } catch(\Exception $e) {
            return response()->json([
                'message' => 'Failed to create mentorship channel',
                'error'   => $e->getMessage()
            ], 500);
        }
    }

    public function join($id) {
        $channel = MentorshipChannel::findOrFail($id);
        $user    = Auth::user();

        if (!$user) {
            return response()->json(['message' => 'Unauthenticated'], 401);
        }

        if(!$channel) {
            return response()->json(['message' => 'Channel Not Found'], 404);
        }

        if ($channel->status === 'closed') {
            return response()->json(['message' => 'Channel is closed'], 400);
        }

        // 2. Count active members from DB
        $activeCount = MentorshipChannelMember::where('mentorship_channel_id', $channel->_id)
            ->where('status', 'active')
            ->count();

        if ($channel->max_members && $activeCount >= $channel->max_members) {
            $channel->update(['status' => 'full']);
            return response()->json(['message' => 'Channel is full'], 400);
        }

        $existing = MentorshipChannelMember::where('mentorship_channel_id', $channel->_id)
        ->where('user_id', $user->_id)
        ->first();

        if ($existing) {
            if ($existing->status === 'removed') {
                return response()->json([
                    'message' => 'You are not allowed to rejoin this channel'
                ], 403);
            }

            if ($existing->status !== 'active') {
                $existing->update(['status' => 'active']);
            }

            return response()->json([
                'message' => 'Already a member (rejoined if needed)'
            ]);
        }
        // 4. Create new member
        MentorshipChannelMember::create([
            'mentorship_channel_id' => $channel->_id,
            'user_id'               => $user->_id,
            'role'                  => 'member',
            'status'                => 'active',
            'joined_date'           => now(),
        ]);

        return response()->json([
            'message' => 'Joined channel successfully'
        ]);
    }

    public function destroy($id)
    {
        $channel = MentorshipChannel::findOrFail($id);

        $this->authorizeChannel($channel);

        $channel->delete();

        return response()->json(['message' => 'Channel deleted']);
    }

    public function update(Request $request, $id)
    {
        $channel = MentorshipChannel::findOrFail($id);

        $this->authorizeChannel($channel);

        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'category' => 'sometimes|string',
            'max_members' => 'sometimes|integer|min:1',
            'resources' => 'sometimes|array',
            'status' => 'sometimes|in:active,upcoming,ended,deleted'
        ]);

        $channel->update($validated);

        return response()->json([
            'message' => 'Channel updated',
            'data' => $channel->refresh()
        ]);
    }

    public function members($id) {
        $channel_active_member = MentorshipChannelMember::where('mentorship_channel_id', $id)
            ->where('status', 'active')
            ->with('user.profile')
            ->get();
        

        if($channel_active_member->isEmpty()) {
            return response()->json([
                'message' => "No Members joined yet"
            ], 404);
        }

        return response()->json([
            'data' => $channel_active_member,
            'total' => $channel_active_member->count()
        ]);
    }
}
