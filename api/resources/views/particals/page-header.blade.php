<div class="page-header">
    <div class="page-header-left d-flex align-items-center">
        <div class="page-header-title">
            <h5 class="m-b-10">@yield('page-title')</h5>
        </div>
        <ul class="breadcrumb">
            <li class="breadcrumb-item"><a href={{ route("home") }}>Home</a></li>
            <li class="breadcrumb-item">@yield('section-title')</li>
        </ul>
    </div>
    @yield('page-header-right')
</div>