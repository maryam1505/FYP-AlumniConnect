<!DOCTYPE html>
<html lang="zxx">

<head>
    @include('particals.meta')
    <!--! The above 6 meta tags *must* come first in the head; any other head content must come *after* these tags !-->
    <!--! BEGIN: Apps Title-->
    <title>@yield('title') - Admin Panel</title>
    <!--! END:  Apps Title-->
    @include('particals.vendors')
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
    @yield('style')

</head>

<body>
    <!-- Toast Container -->
<div class="toast-container position-fixed bottom-0 end-0 p-3" style="z-index: 9999">
    @if(session('success'))
    <div id="successToast" class="toast align-items-center text-bg-success border-0" role="alert" data-bs-autohide="true" data-bs-delay="4000">
        <div class="d-flex">
            <div class="toast-body">
                <i class="bi bi-check-circle me-2"></i>
                {{ session('success') }}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    </div>
    @endif

    @if(session('error'))
    <div id="errorToast" class="toast align-items-center text-bg-danger border-0" role="alert" data-bs-autohide="true" data-bs-delay="4000">
        <div class="d-flex">
            <div class="toast-body">
                <i class="bi bi-x-circle me-2"></i>
                {{ session('error') }}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    </div>
    @endif

    @if(session('warning'))
    <div id="warningToast" class="toast align-items-center text-bg-warning border-0" role="alert" data-bs-autohide="true" data-bs-delay="4000">
        <div class="d-flex">
            <div class="toast-body">
                <i class="bi bi-exclamation-triangle me-2"></i>
                {{ session('warning') }}
            </div>
            <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    </div>
    @endif
</div>
    <!--! ================================================================ !-->
    <!--! [Start] Navigation Manu !-->
    <!--! ================================================================ !-->
    @include('components.navigation-menu')
    <!--! ================================================================ !-->
    <!--! [End]  Navigation Manu !-->
    <!--! ================================================================ !-->


    <!--! ================================================================ !-->
    <!--! [Start] Header !-->
    <!--! ================================================================ !-->
    @include('components.header')
    <!--! ================================================================ !-->
    <!--! [End] Header !-->
    <!--! ================================================================ !-->


    <!--! ================================================================ !-->
    <!--! [Start] Main Content !-->
    <!--! ================================================================ !-->
    <main class="nxl-container">
        <div class="nxl-content">
            <!-- [ page-header ] start -->
            @include('particals.page-header')
            <!-- [ page-header ] end -->
            <!-- [ Main Content ] start -->
            @yield('content')
            <!-- [ Main Content ] end -->
        </div>
        @include('components.footer')
    </main>
    <!--! ================================================================ !-->
    <!--! [End] Main Content !-->
    <!--! ================================================================ !-->



<script>
    document.addEventListener('DOMContentLoaded', function () {
        // Auto-show all toasts on page load
        const toastEls = document.querySelectorAll('.toast');
        toastEls.forEach(function (toastEl) {
            const toast = new bootstrap.Toast(toastEl);
            toast.show();
        });
    });
</script>
</body>
@include('particals.vendors-js')
@yield('script')
</html>