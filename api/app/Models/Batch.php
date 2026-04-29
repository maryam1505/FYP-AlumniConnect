<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Batch extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'batches';
    protected $primaryKey = '_id';    
    public $incrementing = false;     
    protected $keyType = 'string';

    protected $fillable = ['year', 'sessions'];
}
