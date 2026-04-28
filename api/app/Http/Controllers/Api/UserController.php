<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Batch;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function show()
    {
        $user = Auth::user();
        $userId = $user->_id;
        $batch = $user->student_info['batch'] ?? null;
        if (!$batch) {
            return response()->json([
                'message' => 'User batch not found'
            ], 400);
        }
        $users = User::where('_id', '!=', $userId)
        ->where('student_info.batch', $batch)->with('profile')
        ->get();

        if ($users->isEmpty()) {
            return response()->json([
                'message' => 'OOPs! You have no batchmates registered Yet!'
            ], 400);
        }
        return response()->json([
                'data' => $users
            ], 200);
    }

    public function update(Request $request, $id)  {
        
    }
}
