<?php

namespace App\Http\Controllers;

use App\Models\MentorshipChannel;
use App\Models\MentorshipChannelMember;
use App\Models\MentorshipSession;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class MentorshipSessionController extends Controller
{
    public function store(Request $request, $channelId) {
        $user = Auth::user();

        if (!$user) {
            return response()->json(['message' => 'Unauthenticated'], 401);
        }

        $channel = MentorshipChannel::findOrFail($channelId);

        if ((string)$channel->mentor_id !== (string)$user->_id) {
            return response()->json([
                'message' => 'Only mentor can create sessions'
            ], 403);
        }

        $validator = Validator::make($request->all(), [
            'title'       => 'required|string|max:255',
            'start_time'  => 'required|date',
            'end_time'    => 'nullable|date|after:start_time',
            'meet_link'   => 'required|url',
            'description' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 422);
        }

        $session = MentorshipSession::create([
            'mentorship_channel_id' => (string)$channel->_id,
            'title'       => $request->title,
            'start_time'  => $request->start_time,
            'end_time'    => $request->end_time,
            'meet_link'   => $request->meet_link,
            'description' => $request->description,
        ]);

        return response()->json([
            'message' => 'Session created successfully',
            'data'    => $session
        ], 201);
    }

    public function index($channelId)
    {
        $sessions = MentorshipSession::where('mentorship_channel_id', $channelId)
            ->orderBy('start_time', 'asc')
            ->get();

        $sessions = $sessions->map(function ($session) {

            $now = now();

            if ($now->lt($session->start_time)) {
                $status = 'upcoming';
            } elseif ($session->end_time && $now->between($session->start_time, $session->end_time)) {
                $status = 'ongoing';
            } else {
                $status = 'completed';
            }

            $session->status = $status;

            return $session;
        });

        return response()->json([
            'data' => $sessions
        ]);
    }

    public function join($sessionId)
    {
        $user = Auth::user();

        if (!$user) {
            return response()->json(['message' => 'Unauthenticated'], 401);
        }

        $session = MentorshipSession::findOrFail($sessionId);

        // Check if user is a member of channel
        $isMember = MentorshipChannelMember::where('mentorship_channel_id', $session->mentorship_channel_id)
            ->where('user_id', $user->_id)
            ->where('status', 'active')
            ->exists();

        if (!$isMember) {
            return response()->json([
                'message' => 'You must join the channel first'
            ], 403);
        }

        $now = now();
        
        if ($now->lt($session->start_time)) {
            return response()->json([
                'message' => 'Session has not started yet'
            ], 400);
        }

        if ($session->end_time && $now->gt($session->end_time)) {
            return response()->json([
                'message' => 'Session has ended'
            ], 400);
        }

        return response()->json([
            'message' => 'Join session',
            'meet_link' => $session->meet_link
        ]);
    }
}
