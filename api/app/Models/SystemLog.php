<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class SystemLog extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'system_logs';
    protected $primaryKey = '_id';    
    public $incrementing = false;     
    protected $keyType = 'string';
    protected $fillable = ['user_id', 'action', 'description', 'ip_address'];
    public function user() { return $this->belongsTo(User::class, 'user_id'); }
}
