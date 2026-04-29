<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        // optional: only admins can access
        // if ($request->user()->role !== 'admin') {
        //     return response()->json([
        //         'message' => 'Unauthorized'
        //     ], 403);
        // }

        $users = User::select(
            '_id',
            'email',
            'firstName',
            'lastName',
            'role',
            'isActive',
            'createdAt'
        )->paginate(10);

        return response()->json($users);
    }

    public function update(Request $request, $id)  {
        
    }
}
