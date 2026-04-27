<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!$request->user()->role == 'admin') {
            return redirect('/login')->withErrors([
                'auth' => 'You are not authorized to access admin dashboard.'
            ]);
        }

        return $next($request);
    }
}
