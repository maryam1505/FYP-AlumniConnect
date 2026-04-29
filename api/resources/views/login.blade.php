@extends('layouts.blank')
@section('title', 'Login to Admin Panel')

@section('content')
<main class="auth-minimal-wrapper">
        <div class="auth-minimal-inner">
            <div class="minimal-card-wrapper">
                <div class="card mb-4 mt-5 mx-4 mx-sm-0 position-relative">
                    <div class="wd-50 bg-white p-2 rounded-4 shadow-lg position-absolute translate-middle top-0 start-50">
                        <img src={{ asset("admin/images/logo-abbr.png") }} alt="Alumni Connect -- Connection that stays forever" class="img-fluid">
                    </div>
                    <div class="card-body p-sm-5">
                        <h2 class="fs-20 fw-bolder mb-4">Login</h2>
                        <h4 class="fs-13 fw-bold mb-2">Login to Alumni Connect Admin Panel</h4>
                        <p class="fs-12 fw-medium text-muted">Access your admin dashboard to manage and oversee all system operations.</p>
                        <form action={{ route('login.verify') }} method="post" class="w-100 mt-4 pt-2">
                            @csrf
                            <div class="mb-4">
                                <input type="email" name="email" class="form-control" placeholder="Email or Username" required>
                            </div>
                            <div class="mb-3">
                                <input type="password" name="password" class="form-control" placeholder="Password" required>
                            </div>
                            <div class="mt-5">
                                <button type="submit" class="btn btn-lg btn-primary w-100">Login</button>
                            </div>
                        </form>
                            @if($errors->any())
                                <div class="bg-soft-danger px-2 py-2 w-100 text-center text-danger mt-3 "> 
                                    <span>{{ $errors->first() }}</span>
                                </div>
                            @endif
                        
                        <div class="mt-3 text-muted text-center">
                            <span class="fs-9"> © University of Education </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
@endsection
