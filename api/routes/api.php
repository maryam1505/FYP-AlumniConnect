<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\MentorshipChannelController;
use App\Http\Controllers\MentorshipSessionController;
use Illuminate\Support\Facades\Route;


Route::prefix('auth')->group(function(){
    Route::post('/register',        [AuthController::class, 'register']);
    Route::post('/login',           [AuthController::class, 'login']);
    Route::post('/send-otp',         [AuthController::class, 'sendOTP']);
    Route::post('/verify-otp',         [AuthController::class, 'verifyOTP']);
    Route::post('/reset-password',   [AuthController::class, 'resetPassword']);

});


Route::middleware(['auth:api'])->group(function () {

    /* ── Auth ───────────────────────────────────────────────────────── */
    Route::prefix('auth')->group(function () {
        Route::post('logout',          [AuthController::class, 'logout']);
        Route::put('change-password',  [AuthController::class, 'changePassword']);
    });

    /* ── Profile ─────────────────────────────────────────────────────── */
    Route::get('profile',              [ProfileController::class, 'show']);
    Route::put('profile',              [ProfileController::class, 'update']);
    Route::post('profile/picture',     [ProfileController::class, 'uploadPicture']);
    Route::get('users/{id}/profile',   [ProfileController::class, 'showUser']);

    /* ── Users ───────────────────────────────────────────────────────── */
    Route::get('batch/users',          [UserController::class, 'show']);

    /* ── Mentorship Channel ──────────────────────────────────────────── */
    Route::post('mentorship-channel',  [MentorshipChannelController::class, 'store']);
    Route::get('mentorship/channels',  [MentorshipChannelController::class, 'index']);
    Route::post('mentorship/channels/{id}/join',   [MentorshipChannelController::class, 'join']);
    Route::get('mentorship/channels/{id}/members', [MentorshipChannelController::class, 'members']);
    Route::put('mentorship/channel/{id}/update', [MentorshipChannelController::class, 'update']);
    Route::delete('mentorship/channel/{id}/destroy', [MentorshipChannelController::class, 'destroy']);

    Route::post('channels/{id}/sessions', [MentorshipSessionController::class, 'store']);
    Route::get('channels/{id}/sessions', [MentorshipSessionController::class, 'index']);
    Route::post('channels/sessions/{id}/join', [MentorshipSessionController::class, 'join']);
    
});
