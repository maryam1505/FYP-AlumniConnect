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
        Schema::create('notifications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->enum('type', [
                'connection_request',
                'connection_accepted',
                'mentorship_request',
                'mentorship_accepted',
                'job_application',
                'event_reminder',
                'comment',
                'like',
                'message',
                'system',
            ]);
            $table->string('title');
            $table->text('message');
            $table->boolean('is_read')->default(false);
            // Polymorphic reference: the ID of the related entity (connection, post, job, etc.)
            $table->unsignedBigInteger('related_id')->nullable();
            $table->string('related_type')->nullable(); // e.g. App\Models\Connection
            $table->timestamps(); // created_at = notified_at

            $table->index('user_id');
            $table->index('created_at');
            $table->index(['user_id', 'is_read'], 'idx_notif_unread');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notifications');
    }
};
