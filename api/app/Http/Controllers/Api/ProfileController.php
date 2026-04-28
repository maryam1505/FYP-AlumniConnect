<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Attribute\IsSignatureValid;

class ProfileController extends Controller
{
    public function show() {
        $user = Auth::user();
        $userId = $user->id;
        $profile = Profile::where('user_id', $userId)->first();
        

        return response()->json([
            'user' => $user,
            'profile' => $profile
        ]);
    }

    public function showUser($id) {
    
        $user = User::find($id);
        if (!$user) {
            return response()->json([
                'status' => false,
                'message' => 'User not found'
            ], 404);
        }

        $profile = Profile::where('user_id', $id)->first();

        return response()->json([
            'status'  => true,
            'user'    => $user,
            'profile' => $profile
        ]);
    }

    public function update(Request $request) {
        $user = Auth::user();

        $validator = Validator::make($request->all(), [
            'full_name'     => 'string|max:100',
            'phone'         => 'nullable|string|max:20',
            'gender'        => 'in:male,female,other,prefer_not_to_say',
            'date_of_birth' => 'nullable|date',
            'bio'           => 'nullable|string|max:1000',

            // Social links
            'social_links.linkedin'  => 'nullable|url',
            'social_links.github'    => 'nullable|url',
            'social_links.portfolio' => 'nullable|url',

            // Address
            'address.street'      => 'nullable|string',
            'address.city'        => 'nullable|string',
            'address.state'       => 'nullable|string',
            'address.country'     => 'nullable|string',
            'address.postal_code' => 'nullable|string',

            // Student-specific (embedded in users.student_info)
            'current_semester' => 'nullable|integer|min:1|max:8',
            'program'          => 'nullable|string',
            'batch'            => 'nullable|string',
            'shift'            => 'nullable|string',
            'campus'           => 'nullable|string',
            'department'       => 'nullable|string',

            // Alumni-specific (embedded in users.alumni_info)
            'graduation_year'      => 'nullable|integer',
            'current_job_title'    => 'nullable|string',
            'current_company'      => 'nullable|string',
            'current_role'         => 'nullable|string',
            'job_start_year'       => 'nullable|integer',
            'job_end_year'         => 'nullable|integer',
            'experience_years'     => 'nullable|integer',
            'mentorship_available' => 'nullable|boolean',
            'industry'             => 'nullable|string',
            'skills'               => 'nullable|array',
            'skills.*'             => 'string',
            'achievements'         => 'nullable|array',
            'achievements.*'       => 'string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Update profiles collection
        Profile::updateOrCreate(
            ['user_id' => (string) $user->_id],
            array_filter([
                'full_name'     => $request->full_name,
                'phone'         => $request->phone,
                'gender'        => $request->gender,
                'date_of_birth' => $request->date_of_birth,
                'bio'           => $request->bio,
                'social_links'  => $request->social_links,
                'address'       => $request->address,
            ], fn($v) => ! is_null($v))
        );

        // Update embedded subdocument in users collection
        if ($user->isStudent()) {
            $studentInfo = array_filter([
                'current_semester' => $request->current_semester,
                'program'          => $request->program,
                'batch'            => $request->batch,
                'shift'            => $request->shift,
                'campus'           => $request->campus,
                'department'       => $request->department,
            ], fn($v) => ! is_null($v));

            if (!empty($studentInfo)) {
                $existing = $user->student_info ?? [];
                $merged = array_merge($existing, $studentInfo);
                $user->update(['student_info' => $merged]);
            }
        }

        if ($user->isAlumni()) {
            $alumniInfo = array_filter([
                'graduation_year'      => $request->graduation_year,
                'current_job_title'    => $request->current_job_title,
                'current_company'      => $request->current_company,
                'experience_years'     => $request->experience_years,
                'current_role'         => $request->current_role,
                'job_start_year'       => $request->job_start_year,
                'job_end_year'         => $request->job_end_year,
                'mentorship_available' => $request->mentorship_available,
                'industry'             => $request->industry,
                'skills'               => $request->skills,
                'achievements'         => $request->achievements,
            ], fn($v) => ! is_null($v));

            if (!empty($alumniInfo)) {
                $merged = array_merge((array) $user->alumni_info, $alumniInfo);
                $user->update(['alumni_info' => $merged]);
            }
        }

        return response()->json([
            'message' => 'Profile updated successfully',
            'data'    => $user->fresh()->load('profile'),
        ]);
    }

    public function uploadPicture(Request $request) {
        $request->validate([
            'picture' => 'required|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        $user = Auth::user();
        $path = $request->file('picture')->store("profile-pictures/{$user->_id}", 'public');
        $url  = Storage::url($path);

        Profile::where('user_id', (string) $user->_id)
            ->update(['profile_picture' => $url]);

        return response()->json([
            'message'         => 'Profile picture updated',
            'profile_picture' => $url,
        ]);
    }
}
