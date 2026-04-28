<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject {

    use HasFactory, Notifiable;

    protected $connection = 'mongodb';
    protected $collection = 'users';
    protected $primaryKey = '_id';    
    public $incrementing = false;     
    protected $keyType = 'string';

    protected $fillable = [
        'email', 'password', 'roll_number',
        'role', 'is_verified', 'status',
        'last_login', 'registration_date', 'expected_graduation',
        'student_info', 'alumni_info', 'admin_info',
        'reset_otp','reset_otp_expires_at'
    ];

    protected $hidden = ['password'];

    protected $casts = [
        'is_verified'       => 'boolean',
        'last_login'        => 'datetime',
        'registration_date' => 'datetime',
        'expected_graduation' => 'datetime',
        'student_info'      => 'array',
        'alumni_info'       => 'array',
        'admin_info'        => 'array',
    ];

   /* ── JWT Interface ───────────────────────────────────────────────── */

    public function getJWTIdentifier(): mixed
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims(): array
    {
        return [
            'role'  => $this->role,
            'email' => $this->email,
        ];
    }

    /* ── Relationships ───────────────────────────────────────────────── */

    public function profile()
    {
        return $this->hasOne(Profile::class, 'user_id', '_id');
    }

    public function feedPosts()
    {
        return $this->hasMany(FeedPost::class, 'user_id', '_id');
    }

    public function sentMessages()
    {
        return $this->hasMany(Message::class, 'sender_id', '_id');
    }

    public function receivedMessages()
    {
        return $this->hasMany(Message::class, 'receiver_id', '_id');
    }

    public function notifications()
    {
        return $this->hasMany(Notification::class, 'user_id', '_id');
    }

    public function jobPostings()
    {
        return $this->hasMany(JobPosting::class, 'alumni_id', '_id');
    }

    public function jobApplications()
    {
        return $this->hasMany(JobApplication::class, 'applicant_id', '_id');
    }

    public function mentorshipChannels()
    {
        return $this->hasMany(MentorshipChannel::class, 'mentor_id', '_id');
    }

     /* ── Role Helpers ────────────────────────────────────────────────── */

    public function isAdmin(): bool   { return $this->role === 'admin'; }
    public function isAlumni(): bool  { return $this->role === 'alumni'; }
    public function isStudent(): bool { return $this->role === 'student'; }
    public function isActive(): bool  { return $this->status === 'active'; }
    
    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($user) {
            Profile::where('user_id', $user->_id)->delete();
        });
    }
}
