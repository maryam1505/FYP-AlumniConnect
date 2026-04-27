
<div class="header-right ms-auto">
    <div class="d-flex align-items-center">
        
        <div class="nxl-h-item d-none d-sm-flex me-2">
            <h6 class="text-dark mb-0">Welcome, @if(auth()->user()->profile->full_name) {{ auth()->user()->profile->full_name }} @else Mr. Admin @endif</h6>
        </div>
        
        
        {{-- User Profile --}}
        <div class="dropdown nxl-h-item">
            <a href="javascript:void(0);" data-bs-toggle="dropdown" role="button" data-bs-auto-close="outside">
                
                <img src="{{ $avatar }}" alt="Admin Profile Image" class="img-fluid user-avtar me-0" />
            </a>
            <div class="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-user-dropdown">
                <div class="dropdown-header">
                    <div class="d-flex align-items-center">
                        <img src={{$avatar}} alt="Admin Profile Image" class="img-fluid user-avtar" />
                        <div>
                            <h6 class="text-dark mb-0">{{auth()->user()->profile->full_name ? auth()->user()->profile->full_name : "Mr. Admin" }}</h6>
                            <span class="fs-12 fw-medium text-muted">{{auth()->user()->email }}</span>
                        </div>
                    </div>
                </div>
                <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="dropdown">
                        <span class="hstack">
                            <i class="wd-10 ht-10 border-2 border-gray-1 bg-success rounded-circle me-2"></i>
                            <span>Active</span>
                        </span>
                        <i class="feather-chevron-right ms-auto me-0"></i>
                    </a>
                    <div class="dropdown-menu">
                        <a href="javascript:void(0);" class="dropdown-item">
                            <span class="hstack">
                                <i class="wd-10 ht-10 border-2 border-gray-1 bg-warning rounded-circle me-2"></i>
                                <span>Always</span>
                            </span>
                        </a>
                        <a href="javascript:void(0);" class="dropdown-item">
                            <span class="hstack">
                                <i class="wd-10 ht-10 border-2 border-gray-1 bg-success rounded-circle me-2"></i>
                                <span>Active</span>
                            </span>
                        </a>
                        <a href="javascript:void(0);" class="dropdown-item">
                            <span class="hstack">
                                <i class="wd-10 ht-10 border-2 border-gray-1 bg-danger rounded-circle me-2"></i>
                                <span>Busy</span>
                            </span>
                        </a>
                        <a href="javascript:void(0);" class="dropdown-item">
                            <span class="hstack">
                                <i class="wd-10 ht-10 border-2 border-gray-1 bg-info rounded-circle me-2"></i>
                                <span>Inactive</span>
                            </span>
                        </a>
                        <a href="javascript:void(0);" class="dropdown-item">
                            <span class="hstack">
                                <i class="wd-10 ht-10 border-2 border-gray-1 bg-dark rounded-circle me-2"></i>
                                <span>Disabled</span>
                            </span>
                        </a>
                    </div>
                </div>
                
                <div class="dropdown-divider"></div>
                <a href="javascript:void(0);" class="dropdown-item">
                    <i class="feather-user"></i>
                    <span>Profile Details</span>
                </a>
                
                <a href="javascript:void(0);" class="dropdown-item">
                    <i class="feather-bell"></i>
                    <span>Notifications</span>
                </a>
                <a href="javascript:void(0);" class="dropdown-item">
                    <i class="feather-settings"></i>
                    <span>Account Settings</span>
                </a>
                <div class="dropdown-divider"></div>
                <form method="POST" action="{{ route('logout') }}">
                    @csrf
                    <button type="submit" class="dropdown-item">
                        <i class="feather-log-out"></i>
                        <span>Logout</span>
                    </button>
                </form>
                {{-- <a href="{{route('logout')}}" class="dropdown-item">
                    <i class="feather-log-out"></i>
                    <span>Logout</span>
                </a> --}}
            </div>
        </div>
    </div>
</div>
