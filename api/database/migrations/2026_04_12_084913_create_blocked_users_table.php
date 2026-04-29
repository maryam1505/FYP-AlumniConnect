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
        Schema::create('blocked_users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('blocker_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('blocked_id')->constrained('users')->cascadeOnDelete();
            $table->timestamps(); // created_at = block_date

            $table->unique(['blocker_id', 'blocked_id'], 'unique_block_pair');
            $table->index('blocker_id');
        });

        // ── System Logs ────────────────────────────────────────────────
        // Note: MongoDB had a 1-year TTL index on this collection.
        // In MySQL/PostgreSQL you handle pruning via a scheduled artisan command:
        //   php artisan model:prune  (with a Prunable trait on the model)
        //   or a scheduled job that deletes rows older than 1 year.
        Schema::create('system_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->string('action');
            $table->text('description')->nullable();
            $table->string('ip_address', 45)->nullable(); // supports IPv6
            $table->timestamps(); // created_at = timestamp

            $table->index('user_id');
            $table->index('created_at');
            $table->index('action');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blocked_users');
        Schema::dropIfExists('system_logs');
    }
};
