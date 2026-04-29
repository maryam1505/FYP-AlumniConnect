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
        Schema::create('connections', function (Blueprint $table) {
            $table->id();
            $table->foreignId('requester_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('receiver_id')->constrained('users')->cascadeOnDelete();
            $table->enum('status', ['pending', 'accepted', 'rejected', 'unfriended'])->default('pending');
            $table->timestamp('request_date')->useCurrent();
            $table->timestamp('response_date')->nullable();
            $table->timestamps();

            // Each pair can only have one connection record
            $table->unique(['requester_id', 'receiver_id'], 'unique_connection_pair');
            $table->index('requester_id');
            $table->index('receiver_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('connections');
    }
};
