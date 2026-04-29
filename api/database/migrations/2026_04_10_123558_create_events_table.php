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
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->foreignId('created_by')->constrained('users')->cascadeOnDelete();
            $table->string('title');
            $table->text('description')->nullable();
            $table->enum('event_type', ['seminar', 'workshop', 'reunion', 'career_fair', 'competition', 'other'])->nullable();
            $table->dateTime('event_date');
            $table->string('venue')->nullable();
            $table->string('campus')->nullable();
            $table->dateTime('registration_deadline')->nullable();
            $table->unsignedInteger('max_participants')->nullable();
            $table->string('poster_url')->nullable();
            $table->enum('status', ['draft', 'upcoming', 'ongoing', 'completed', 'cancelled'])->default('draft');
            $table->timestamps();

            $table->index('event_date');
            $table->index('status');
            $table->index('created_by');
        });

        // ── Event Registrations ───────────────────────────────────────
        Schema::create('event_registrations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('event_id')->constrained('events')->cascadeOnDelete();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->timestamp('registration_date')->useCurrent();
            $table->enum('status', ['registered', 'attended', 'absent', 'cancelled'])->default('registered');
            $table->string('roll_number')->nullable();
            $table->string('name')->nullable();
            $table->string('batch')->nullable();
            $table->string('program')->nullable();
            $table->timestamps();

            $table->unique(['event_id', 'user_id']); // one registration per user per event
            $table->index('user_id');
        });

        // ── Event Committee ────────────────────────────────────────────
        Schema::create('event_committee', function (Blueprint $table) {
            $table->id();
            $table->foreignId('event_id')->constrained('events')->cascadeOnDelete();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->string('role')->nullable();
            $table->date('assigned_date')->nullable();
            $table->timestamps();

            $table->unique(['event_id', 'user_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
        Schema::dropIfExists('event_committee');
        Schema::dropIfExists('event_registrations');
    }
};
