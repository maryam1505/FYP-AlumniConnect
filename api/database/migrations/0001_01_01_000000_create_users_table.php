<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique();
            $table->string('password');
            $table->string('roll_number')->unique();
            $table->enum('role', ['student', 'alumni', 'admin'])->default('student');
            $table->boolean('is_verified')->default(false);
            $table->enum('status', ['active', 'inactive', 'banned'])->default('active');
            $table->timestamp('last_login')->nullable();
            $table->rememberToken();
            $table->timestamps();

            // Indexes
            $table->index('role');
            $table->index('status');
        });

        // ── Student Info ─────────────────────────────────────────────
        Schema::create('student_infos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->unsignedTinyInteger('current_semester')->nullable();
            $table->string('program')->nullable();
            $table->string('batch')->nullable();
            $table->string('shift')->nullable();
            $table->string('campus')->nullable();
            $table->string('department')->nullable();
            $table->unsignedSmallInteger('enrollment_year')->nullable();
            $table->string('resume')->nullable(); // file path or URL
            $table->timestamps();

            $table->index('batch');
            $table->index('program');
            $table->index('shift');
            $table->index('department');
            $table->index('campus');
            $table->index('enrollment_year');
        });

        // ── Alumni Info ───────────────────────────────────────────────
        Schema::create('alumni_infos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->unsignedSmallInteger('graduation_year')->nullable();
            $table->string('current_job_title')->nullable();
            $table->string('current_company')->nullable();
            $table->unsignedTinyInteger('experience_years')->nullable();
            $table->boolean('mentorship_available')->default(false);
            $table->string('industry')->nullable();
            $table->json('skills')->nullable();        // array of strings
            $table->json('achievements')->nullable();  // array of strings
            $table->timestamps();

            $table->index('mentorship_available');
            $table->index('graduation_year');
        });

        // ── Admin Info ────────────────────────────────────────────────
        Schema::create('admin_infos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->json('permissions')->nullable(); // array of strings
            $table->timestamp('last_action')->nullable();
            $table->timestamps();
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
        Schema::dropIfExists('admin_infos');
        Schema::dropIfExists('alumni_infos');
        Schema::dropIfExists('student_infos');
    }
};
