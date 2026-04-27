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
        Schema::create('mentorship_channels', function (Blueprint $table) {
            $table->id();
            $table->foreignId('mentor_id')->constrained('users')->cascadeOnDelete();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('category')->nullable();
            $table->enum('status', ['active', 'closed', 'full'])->default('active');
            $table->unsignedInteger('max_members')->nullable();
            $table->json('resources')->nullable();
            $table->timestamps();

            $table->index('mentor_id');
            $table->index('status');
        });

        // ── Mentorship Channel Members ────────────────────────────────
        Schema::create('mentorship_channel_members', function (Blueprint $table) {
            $table->id();
            $table->foreignId('mentorship_channel_id')->constrained('mentorship_channels')->cascadeOnDelete();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->enum('role', ['member', 'moderator'])->default('member');
            $table->timestamp('joined_date')->useCurrent();
            $table->enum('status', ['active', 'removed', 'left'])->default('active');
            $table->timestamps();

            $table->unique(['mentorship_channel_id', 'user_id']);
            $table->index('user_id');
        });

         // ── Mentorship Requests ────────────────────────────────────────
        Schema::create('mentorship_requests', function (Blueprint $table) {
            $table->id();
            $table->foreignId('student_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('alumni_id')->constrained('users')->cascadeOnDelete();
            $table->enum('status', ['pending', 'accepted', 'rejected', 'cancelled'])->default('pending');
            $table->text('message')->nullable();
            $table->string('area_of_interest')->nullable();
            $table->timestamp('request_date')->useCurrent();
            $table->timestamp('response_date')->nullable();
            $table->timestamps();

            $table->index('student_id');
            $table->index('alumni_id');
            $table->index('status');
            $table->index(['student_id', 'alumni_id']); // pair lookup
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mentorship_requests');
        Schema::dropIfExists('mentorship_channel_members');
        Schema::dropIfExists('mentorship_channels');
    }
};
