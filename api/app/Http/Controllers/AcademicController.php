<?php

namespace App\Http\Controllers;

use App\Mail\StudentWelcomeMail;
use App\Models\Batch;
use App\Models\Campus;
use App\Models\Department;
use App\Models\Profile;
use App\Models\Program;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class AcademicController extends Controller
{
    public function storeStudent(Request $request) {
       // Validation
        $validator = Validator::make($request->all(), [
            'full_name'   => 'required|string|max:255',
            'email'       => 'required|email|unique:users,email',
            'username'    => 'required|string|max:255|unique:users,username',
            'gender'      => 'required|string',
            'phone'       => 'required',
            'cnic'        => 'required|unique:profiles,cnic',
            'address'     => 'required|string',
            'dob'         => 'required|date',

            'department_id'  => 'required',
            'program_id'     => 'required',
            'campus_id'      => 'required',
            'shift'       => 'required',
            'batch_id'       => 'required',
            'session'     => 'required',
            'semester'    => 'required',
            'roll_number' => 'required|unique:users,roll_number',

            'password'    => 'required|min:8|confirmed',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }
        
        $batch = Batch::find($request->batch_id);
        $program = Program::find($request->program_id);
        $department = Department::find($request->department_id);
        $campus = Campus::find($request->campus_id);


        if (!$batch) {
            return back()->withErrors(['batch_id' => 'Invalid batch selected']);
        }

        try {
            $password = $request->password;
            // Create User 
            $user = User::create([
                'email'    => $request->email,
                'username' => $request->username,
                'password' => Hash::make($request->password),
                'role'     => 'student',
                'status'   => 'active',
                'is_verified' => false,
                'roll_number'      => $request->roll_number,
                'registration_date' => now(),

                // Student Academic info
                'student_info' => [
                    'current_semester' => (int)$request->semester,
                    'program'          => $program->name,
                    'batch'            => $batch->year,
                    'shift'            => $request->shift,
                    'campus'           => $campus->name,
                    'department'       => $department->name,
                    'enrollment_year'  => (int)$batch->year,
                    'expected_graduation' => (int)$batch->year + 4,
                    'resume'           => null,
                    'email_sent'       => false
                ],
            ]);
                
            //  Profile
            $user = User::where('roll_number', $request->roll_number)->first();

            if (!$user) {
                return back()->withInput()->with('error', 'User creation failed.');
            }

            $userId = (string) $user->getKey();

            // Now create profile with valid user_id
            $profile = Profile::create([
                'user_id'       => $userId,
                'full_name'     => $request->full_name,
                'gender'        => $request->gender,
                'phone'         => $request->phone,
                'cnic'          => $request->cnic,
                'address'       => $request->address,
                'date_of_birth' => $request->dob,
            ]);

            // Verify profile was actually created with correct user_id
            $verifyProfile = Profile::where('user_id', $userId)->first();

            if (!$verifyProfile) {
                // Delete the user since profile failed
                $user->delete();
                return back()->withInput()->with('error', 'Failed to create student profile.');
            }


            // Try sending email
            $emailSent = false;
            try {
                Mail::to($user->email)->send(new StudentWelcomeMail($request->email, $password, $request->full_name));
                $emailSent = true;
            } catch (Exception $mailException) {
                Log::warning('Welcome email failed: ' . $mailException->getMessage());
            }

            $user->update(['student_info.email_sent' => $emailSent]);

            return redirect()->route('students')->with('success', 'Student created successfully');

        } catch (Exception $e) {

            dd($e->getMessage());
            return back()->withInput()->with('error', 
                'Failed to create student: ' . $e->getMessage()
            );
        }
    }
}
