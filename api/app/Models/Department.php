<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Department extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'departments';
    protected $primaryKey = '_id';    
    public $incrementing = false;     
    protected $keyType = 'string';

    protected $fillable = ['name'];
    public function programs()
    {
        return $this->hasMany(Program::class, 'department_id', '_id');
    }
}
