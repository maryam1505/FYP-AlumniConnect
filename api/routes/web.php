<?php

use App\Http\Controllers\AcademicController;
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;


Route::get('/', [AdminController::class, 'loginView'])->name('login');
Route::prefix('auth')->group(function () {
    Route::post('/login/verify', [AdminController::class, 'login'])->name('login.verify');
    
});


Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/dashboard', [AdminController::class, 'index'])->name("home");
    Route::post('logout', [AdminController::class, 'logout'])->name('logout');

    Route::get('/students', [AdminController::class, 'studentUser'])->name("students");
    Route::view('/users-view', 'pages.users-view')->name("users.view");
    Route::get('/student-create',[AdminController::class, 'createStudent'])->name("student.create");
    Route::post('/student-store',[AcademicController::class, 'storeStudent'])->name("student.store");
});



Route::view('/error', '404-error');

Route::view('/alumni-create', 'pages.alumni-create')->name("alumni.create");
Route::view('/alumni-view', 'pages.alumni-view')->name("alumni.view");
Route::view('/alumni', 'pages.alumni')->name("alumni");



Route::view('/channels', 'pages.channels')->name("channels");
Route::view('/channels-create', 'pages.channels-create')->name("channels.create");
Route::view('/channels-view', 'pages.channels-view')->name("channels.view");

Route::view('/jobs', 'pages.jobs')->name("jobs");
Route::view('/jobs-create', 'pages.jobs-create')->name("jobs.create");
Route::view('/jobs-view', 'pages.jobs-view')->name("jobs.view");
Route::view('/jobs-edit', 'pages.jobs-edit')->name("jobs.edit");