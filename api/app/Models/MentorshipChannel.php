<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class MentorshipChannel extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'mentorship_channels';
    protected $primaryKey = '_id';
    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = [
        'mentor_id', 'title', 'description', 'category',
        'status', 'max_members', 'resources', 'members',
    ];
    protected $casts = [
        'resources' => 'array',
        'members'   => 'array',
    ];
    public function mentor() {
        return $this->belongsTo(User::class, 'mentor_id', '_id');
    }

    public function members() {
        return $this->hasMany(MentorshipChannelMember::class, 'mentorship_channel_id', '_id');
    }
    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($channel) {
            MentorshipChannelMember::where('mentorship_channel_id', $channel->_id)->delete();
        });
    }
}
