<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Campus extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'campuses';

    protected $primaryKey = '_id';    
    public $incrementing = false;     
    protected $keyType = 'string';
    
    protected $fillable = ['name'];
}
