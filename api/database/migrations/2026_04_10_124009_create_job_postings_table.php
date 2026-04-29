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
        Schema::create('job_postings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('alumni_id')->constrained('users')->cascadeOnDelete();
            $table->string('title');
            $table->text('description')->nullable();
            $table->enum('job_type', ['full-time', 'part-time', 'internship', 'contract', 'remote'])->nullable();
            $table->string('organization');
            $table->string('location')->nullable();
            $table->text('required_skills')->nullable();
            $table->text('eligibility')->nullable();
            $table->date('application_deadline')->nullable();
            $table->string('application_method')->nullable();
            $table->enum('status', ['active', 'closed', 'draft'])->default('draft');
            $table->timestamp('posted_date')->useCurrent();
            $table->timestamps();

            $table->index('alumni_id');
            $table->index('status');
            $table->index('posted_date');
        });

        // ── Job Applications ──────────────────────────────────────────
        Schema::create('job_applications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('job_posting_id')->constrained('job_postings')->cascadeOnDelete();
            $table->foreignId('applicant_id')->constrained('users')->cascadeOnDelete();
            $table->enum('applicant_type', ['student', 'alumni'])->default('student');
            $table->string('resume')->nullable();         // file path or URL
            $table->text('cover_letter')->nullable();
            $table->timestamp('application_date')->useCurrent();
            $table->enum('status', ['pending', 'reviewed', 'shortlisted', 'rejected', 'hired'])->default('pending');
            $table->timestamps();

            $table->unique(['job_posting_id', 'applicant_id']); // one application per job per user
            $table->index('applicant_id');
            $table->index('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_postings');
        Schema::dropIfExists('job_applications');
    }
};
