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
        Schema::create('feed_posts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->text('content');
            $table->enum('post_type', ['text', 'image', 'video', 'link', 'job_share', 'event_share'])->default('text');
            $table->string('media_url')->nullable();
            $table->enum('visibility', ['public', 'connections', 'private'])->default('public');
            $table->unsignedInteger('likes_count')->default(0);    // denormalized counter
            $table->unsignedInteger('comments_count')->default(0); // denormalized counter
            $table->unsignedInteger('shares_count')->default(0); // denormalized counter
            $table->timestamps();

            $table->index('user_id');
            $table->index('created_at'); // maps to postedDate
            $table->index('visibility');
        });

        // ── Post Likes ─────────────────────────────────────────────────
        Schema::create('post_likes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('feed_post_id')->constrained('feed_posts')->cascadeOnDelete();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->timestamps();

            $table->unique(['feed_post_id', 'user_id']); // one like per user per post
            $table->index('user_id');
        });
        
         // ── Post Shares ─────────────────────────────────────────────────
        Schema::create('post_shares', function (Blueprint $table) {
            $table->id();
            $table->foreignId('feed_post_id')->constrained('feed_posts')->cascadeOnDelete();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            // Optional: add message when sharing (like caption)
            $table->text('share_text')->nullable();

            // Optional: track platform (internal, WhatsApp, etc.)
            $table->string('platform')->nullable();
            $table->timestamps();

            $table->index('feed_post_id');
            $table->index('user_id');
        });

         // ── Post Comments ──────────────────────────────────────────────
        Schema::create('post_comments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('feed_post_id')->constrained('feed_posts')->cascadeOnDelete();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->text('content');
            // Self-referencing for threaded/nested replies
            $table->foreignId('parent_comment_id')
                  ->nullable()
                  ->constrained('post_comments')
                  ->nullOnDelete();
            $table->timestamps();

            $table->index('feed_post_id');
            $table->index('user_id');
            $table->index('parent_comment_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('feed_posts');
        Schema::dropIfExists('post_comments');
        Schema::dropIfExists('post_likes');
        Schema::dropIfExists('post_shares');
    }
};
