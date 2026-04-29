<?php

namespace App\Http\Controllers;

use App\Models\Batch;
use App\Models\Campus;
use App\Models\Department;
use App\Models\Program;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    /* _____ Admin Auth ________________________________________ */

    public function loginView() {
        return view('login');
    }
    public function login(Request $request) {
        $validator = Validator::make($request->all(), [
            'email'    => 'required|email',
            'password' => 'required|min:6',
        ]);

        if ($validator->fails()) {
            return back()->withErrors(['error' => "Invalid Credentials, Try Again!"]);
        }

        $credentials = $request->only('email', 'password');
        // dd($credentials);

        if (Auth::attempt($credentials)) {

            if (Auth::user()->role !== 'admin') {
                Auth::logout();
                return back()->withErrors(['email' => 'Admin only']);
            }

            $request->session()->regenerate();

            return redirect()->route('home')->with('success', 'Login Successful');
        }
        
        

        return back()->withErrors(['email'=> 'Invalid Credentials']);
    }

    public function logout(Request $request) {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/login');
    }

    /* _____ Admin Dashboard Controllers ________________________________________ */

    public function index() {
        $total_users = User::where('role', '!=', 'admin')->count();
        $user = Auth::user();
        $profile = optional($user->profile);

        $avatar = match(true) {
            $profile->profile_picture => $profile->profile_picture,
            $profile->gender === 'male' => asset('admin/images/avatar/male-profile-avatar-placeholder.png'),
            $profile->gender === 'female' => asset('admin/images/avatar/female-avatar-placeholder.jpg'),
            default => asset('admin/images/avatar/profile-avatar-placeholder.jpg'),
        };

        
        return view('pages.dashboard', compact('avatar', 'total_users'));
    }

    public function studentUser() {
        $users = User::where('role' , 'student')->orderBy('created_at', 'desc')->get();
        $users->transform(function ($user) {
            $profile = optional($user->profile);

            $user->avatar = match(true) {
                !empty($profile->profile_picture) => $profile->profile_picture,
                $profile->gender === 'male' => asset('admin/images/avatar/male-profile-avatar-placeholder.png'),
                $profile->gender === 'female' => asset('admin/images/avatar/female-avatar-placeholder.jpg'),
                default => asset('admin/images/avatar/profile-avatar-placeholder.jpg'),
            };

            return $user;
        });

        $user = Auth::user();
        $profile = optional($user->profile);

        $avatar = match(true) {
            $profile->profile_picture => $profile->profile_picture,
            $profile->gender === 'male' => asset('admin/images/avatar/male-profile-avatar-placeholder.png'),
            $profile->gender === 'female' => asset('admin/images/avatar/female-avatar-placeholder.jpg'),
            default => asset('admin/images/avatar/profile-avatar-placeholder.jpg'),
        };
        
        return view('pages.users', compact('users', 'avatar'));
    }

    public function createStudent() {
        $user = Auth::user();
        $profile = optional($user->profile);

        $avatar = match(true) {
            $profile->profile_picture => $profile->profile_picture,
            $profile->gender === 'male' => asset('admin/images/avatar/male-profile-avatar-placeholder.png'),
            $profile->gender === 'female' => asset('admin/images/avatar/female-avatar-placeholder.jpg'),
            default => asset('admin/images/avatar/profile-avatar-placeholder.jpg'),
        };

        $departments = Department::all();
        $programs    = Program::all();
        $batches     = Batch::orderBy('year', 'desc')->get();
        $campuses    = Campus::all();

        return view('pages.users-create', compact('avatar', 'departments', 'programs', 'batches', 'campuses'));
    }

}
