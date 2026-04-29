<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class MentorshipChannelMember extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'mentorship_channel_members';
    protected $primaryKey = '_id';
    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = [
        'mentorship_channel_id',
        'user_id',
        'role',
        'status',
        'joined_date'
    ];

    public function user() {
        return $this->belongsTo(User::class, 'user_id', '_id');
    }
}
