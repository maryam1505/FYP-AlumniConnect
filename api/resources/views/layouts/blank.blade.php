<!DOCTYPE html>
<html lang="zxx">

<head>
   @include('particals.meta')
   <!--! The above 6 meta tags *must* come first in the head; any other head content must come *after* these tags !-->
   <!--! BEGIN: Apps Title-->
   <title>@yield('title') - Alumni Connect</title>
   <!--! END:  Apps Title-->
   @vite(['resources/sass/app.scss', 'resources/js/app.js'])
   @include('particals.vendors')
</head>

<body>
   <!-- [ Main Content ] start -->
   @yield('content')
   <!-- [ Main Content ] end -->
  
</body>

</html>
