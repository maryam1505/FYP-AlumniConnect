<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\SendOtpMail;
use App\Models\Profile;
use App\Models\SystemLog;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password as PasswordRule;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;


class AuthController extends Controller
{
    /* ── Helper: build token response ───────────────────────────────── */
    private function tokenResponse(string $token, User $user, int $status = 200): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            'access_token' => $token,
            'token_type'   => 'bearer',
            'expires_in'   => config('jwt.ttl') * 60,
            'user'         => $user->load('profile'),
        ], $status);
    }
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'email'       => 'required|email|unique:mongodb.users,email',
            'password'    => ['required', 'confirmed', PasswordRule::min(8)],
            'role'        => 'required|in:student,alumni,admin',
            'full_name'   => 'required|string|max:100',
            'roll_number' => 'nullable|string',
            'gender'      => 'nullable|in:male,female,other,prefer_not_to_say',

             /* Student fields */
            'program'               => 'nullable|string',
            'batch'                 => 'nullable|string',
            'shift'                 => 'nullable|string',
            'campus'                => 'nullable|string',
            'department'            => 'nullable|string',
            'enrollment_year'       => 'nullable|integer',
            'expected_graduation'   => 'nullable|integer',
            'current_semester'      => 'nullable|integer',

            /* Alumni fields */
            'graduation_year'      => 'nullable|integer',
            'current_job_title'    => 'nullable|string',
            'current_company'      => 'nullable|string',
            'industry'             => 'nullable|string',
            'experience_years'     => 'nullable|integer',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $studentInfo = null;
        $alumniInfo  = null;

        if ($request->role === 'student') {
            $studentInfo = [
                'current_semester' => $request->current_semester,
                'program'          => $request->program,
                'batch'            => $request->batch,
                'shift'            => $request->shift,
                'campus'           => $request->campus,
                'department'       => $request->department,
                'enrollment_year'  => $request->enrollment_year,
                'expected_graduation'=> $request->expected_graduation,
                'resume'           => null,
            ];
        }

        if ($request->role === 'alumni') {
            $alumniInfo = [
                'graduation_year'      => $request->graduation_year,
                'current_job_title'    => $request->current_job_title,
                'current_company'      => $request->current_company,
                'experience_years'     => $request->experience_years,
                'mentorship_available' => false,
                'industry'             => $request->industry,
                'skills'               => [],
                'achievements'         => [],
            ];
        }

        $user = User::create([
            'email'             => $request->email,
            'password'          => Hash::make($request->password),
            'roll_number'       => $request->roll_number,
            'role'              => $request->role,
            'is_verified'       => false,
            'status'            => 'active',
            'registration_date' => now(),
            'student_info'      => $studentInfo,
            'alumni_info'       => $alumniInfo,
        ]);

        // Create profile document
        Profile::create([
            'user_id'   => (string) $user->_id,
            'full_name' => $request->full_name,
            'gender'    => $request->gender,
        ]);

        $token = JWTAuth::fromUser($user);

        return $this->tokenResponse($token, $user, 201);
    }

    public function login(Request $request) {
        $validator = Validator::make($request->all(), [
            'email'    => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $credentials = $request->only('email', 'password');

        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['message' => 'Invalid email or password'], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['message' => 'Could not create token'], 500);
        }

        $user = JWTAuth::user();

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        if ($user->status === 'banned') {
            return response()->json(['message' => 'Your account has been banned'], 403);
        }

        $user->update(['last_login' => now()]);

        SystemLog::create([
            'user_id'     => (string) $user->_id,
            'action'      => 'login',
            'description' => 'User logged in',
            'ip_address'  => $request->ip(),
        ]);

        return $this->tokenResponse($token, $user->fresh()->load('profile'));
    }


    public function sendOTP(Request $request) {
        $validator = Validator::make($request->all(), [
            'email'    => 'required|email'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        // Generate 4-digit OTP
        $otp = rand(1000, 9999);

        $user->reset_otp = Hash::make($otp);
        $user->reset_otp_expires_at = now()->addMinutes(10);
        $user->save();

        // Send via email (or SMS)
        try {
            Mail::to($user->email)->send(new SendOtpMail($otp));
            
            return response()->json([
                'message' => 'OTP sent to your email',
            ], 201);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
    
    }

    public function verifyOTP(Request $request) {
        $validator = Validator::make($request->all(), [
            'email'    => 'required|email',
            'otp'   => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        if (!Hash::check($request->otp, $user->reset_otp)) {
            return response()->json(['message' => 'Invalid OTP'], 400);
        }

        if (now()->gt($user->reset_otp_expires_at)) {
            return response()->json(['message' => 'OTP expired'], 400);
        }

        return response()->json(['message' => 'OTP verified']);
    }

    public function resetPassword(Request $request) {

        $validator = Validator::make($request->all(), [
            'email'    => 'required|email',
            'password' => 'required|min:6'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json(['message' => 'User not Found'], 404);
        }

        try{
            $user->password = Hash::make($request->password);
            $user->reset_otp = null;
            $user->reset_otp_expires_at = null;
            $user->save();

            return response()->json(['message' => 'Password reset successfully']);

        } catch(Exception $e) {
            return response()->json(['error' => $e->getMessage()]);
        }

    }
    
    public function logout() {
        
    }

    public function changePassword() {
        
    }
}
