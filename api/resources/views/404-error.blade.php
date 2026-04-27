@extends('layouts.blank')
@section('title', '404 Error')

@section('content')

<main class="auth-cover-wrapper">
    <div class="auth-cover-content-inner">
        <div class="auth-cover-content-wrapper">
            <div class="auth-img ">
                <img src={{ "admin/images/auth/auth-cover-404.svg" }} alt="" class="img-fluid">
            </div>
        </div>
    </div>
    <div class="auth-cover-sidebar-inner">
        <div class="auth-cover-card-wrapper">
            <div class="auth-cover-card p-sm-5">
                <div class="wd-50 mb-5">
                    <img src={{ "admin/images/logo-abbr.png" }} alt="Alumni Connect Short Logo" class="img-fluid">
                </div>
                <h4 class="fw-bold mb-2">Page not found</h4>
                <p class="fs-12 fw-medium text-muted">Sorry, the page you are looking for can't be found. Please check the URL or try to a different page on our site.</p>
                <h2 class="fw-bolder mb-4" style="font-size: 120px;">4<span class="text-danger">0</span>4</h2>
                <div class="mt-5">
                    <a href={{route('home')}} class="btn btn-light-brand w-100">Back Home</a>
                </div>
            </div>
        </div>
    </div>
</main>
    
@endsection