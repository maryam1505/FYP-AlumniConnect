<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Program extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'programs';
    protected $primaryKey = '_id';    
    public $incrementing = false;     
    protected $keyType = 'string';

    protected $fillable = ['name', 'department_id'];
    public function department() {
        return $this->belongsTo(Department::class, 'department_id', '_id');
    }
}
