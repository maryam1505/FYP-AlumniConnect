<nav class="nxl-navigation">
        <div class="navbar-wrapper">
            <div class="m-header">
                <a href={{ route("home") }} class="b-brand">
                    <!-- ========   change your logo hear   ============ -->
                    <img src={{ asset("admin/images/logo-full.png") }} alt="" class="logo logo-lg img-fluid p-4" />
                    <img src={{ asset("admin/images/logo-abbr.png") }} alt="" class="logo logo-sm" />
                </a>
            </div>
            <div class="navbar-content">
                <ul class="nxl-navbar">
                    <li class="nxl-item nxl-caption">
                        <label>Navigation</label>
                    </li>
                    {{-- Dashboards --}}
                    <li class="nxl-item">
                        <a href={{ route('home') }} class="nxl-link">
                            <span class="nxl-micon"><i class="feather-grid"></i></span>
                            <span class="nxl-mtext">Dashboard</span></span>
                        </a>
                    </li>
                    {{-- Users --}}
                    <li class="nxl-item nxl-hasmenu">
                        <a href="javascript:void(0);" class="nxl-link">
                            <span class="nxl-micon"><i class="feather-users"></i></span>
                            <span class="nxl-mtext">Users</span><span class="nxl-arrow"><i class="feather-chevron-right"></i></span>
                        </a>
                        <ul class="nxl-submenu">
                            <li class="nxl-item"><a class="nxl-link" href={{route('students')}}>Students</a></li>
                            <li class="nxl-item"><a class="nxl-link" href={{route('alumni')}}>Alumni</a></li>
                        </ul>
                    </li>
                    
                    {{-- Jobs --}}
                    <li class="nxl-item nxl-hasmenu">
                        <a href="{{route('jobs')}}" class="nxl-link">
                            <span class="nxl-micon"><i class="feather-briefcase"></i></span>
                            <span class="nxl-mtext">Jobs</span>
                        </a>
                    </li>
                    
                    {{-- Mentorship --}}
                    <li class="nxl-item nxl-hasmenu">
                        <a href="{{route('channels')}}" class="nxl-link">
                            <span class="nxl-micon"><i class="feather-layers"></i></span>
                            <span class="nxl-mtext">Mentorship</span>
                        </a>
                    </li>

                    {{-- Events --}}
                    <li class="nxl-item nxl-hasmenu">
                        <a href="{{route('channels')}}" class="nxl-link">
                            <span class="nxl-micon"><i class="feather-calendar"></i></span>
                            <span class="nxl-mtext">Events</span>
                        </a>
                    </li>

                    {{-- Requests & Approvals --}}
                    <li class="nxl-item nxl-hasmenu">
                        <a href="javascript:void(0);" class="nxl-link">
                            <span class="nxl-micon"><i class="feather-inbox"></i></span>
                            <span class="nxl-mtext">Requests & Approvals</span>
                        </a>
                    </li>

                    
                    
                </ul>
                
            </div>
        </div>
    </nav>