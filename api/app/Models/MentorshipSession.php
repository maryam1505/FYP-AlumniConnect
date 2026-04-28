<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class MentorshipSession extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'mentorship_sessions';

    protected $fillable = [
        'mentorship_channel_id',
        'title',
        'start_time',
        'end_time',
        'meet_link',
        'description',
    ];
}
