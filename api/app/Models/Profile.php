<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Profile extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'profiles';
    protected $primaryKey = '_id';    
    public $incrementing = false;     
    protected $keyType = 'string';
    

    protected $fillable = [
        'user_id', 'full_name', 'phone', 'gender', 'date_of_birth',
        'profile_picture', 'bio', 'social_links', 'address', 'cnic',
    ];
    protected $casts = [
        'date_of_birth' => 'date',
        'social_links'  => 'array',
        'address'       => 'array',
        'user_id' => 'string'
    ];

    public function user() { 
        return $this->belongsTo(User::class, 'user_id', '_id'); 
    }
}
