<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::prefix('auth')->group(function(){
    Route::post('/register',        [AuthController::class, 'register']);
    Route::post('/login',           [AuthController::class, 'login']);
    Route::post('/send-otp',         [AuthController::class, 'sendOTP']);
    Route::post('/verify-otp',         [AuthController::class, 'verifyOTP']);
    Route::post('/reset-password',   [AuthController::class, 'resetPassword']);

});


Route::middleware(['auth:jwt'])->group(function () {

    // ── Auth ─────────────────────────────────────────────────────────
    Route::prefix('auth')->group(function () {
        Route::post('logout',          [AuthController::class, 'logout']);
        Route::post('refresh',         [AuthController::class, 'refresh']);
        Route::get('me',               [AuthController::class, 'me']);
        Route::put('change-password',  [AuthController::class, 'changePassword']);
    });

    // ── Admin ─────────────────────────────────────────────────────────
    Route::middleware('role:admin')->prefix('admin')->group(function () {
        Route::get('dashboard',                    [AdminController::class, 'dashboard']);
        Route::get('users',                        [AdminController::class, 'users']);
        Route::put('users/{id}/status',            [AdminController::class, 'updateUserStatus']);
        Route::put('users/{id}/verify',            [AdminController::class, 'verifyUser']);
        Route::delete('users/{id}',                [AdminController::class, 'deleteUser']);
        Route::get('logs',                         [AdminController::class, 'logs']);
        Route::put('events/{id}/status',           [AdminController::class, 'updateEventStatus']);
        Route::put('jobs/{id}/status',             [AdminController::class, 'updateJobStatus']);
    });
});
