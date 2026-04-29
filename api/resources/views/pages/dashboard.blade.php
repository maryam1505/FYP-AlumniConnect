@extends('layouts.app')
@section('title', 'Dashboard')
@section('page-title', 'Dashboard')
@section('section-title', 'Admin Dashboard')

@section('content')
    <div class="main-content">
    <div class="row">
        {{-- Status Cards---- Start --}}
        <!-- Total Users -->
        <div class="col-xxl-3 col-md-3">
            <div class="card stretch stretch-full shadow-sm border-0 rounded-4">
                <div class="card-body d-flex justify-content-between align-items-center">

                    <!-- Left Content -->
                    <div class="d-flex align-items-center gap-3">
                        <div class="avatar-text avatar-lg border-0 bg-primary text-white rounded-circle">
                            <i class="feather-users"></i>
                        </div>
                        <div>
                            <div class="fs-4 fw-bold text-primary mb-0">
                                <span class="counter">{{ $total_users }}</span>
                            </div>
                            <div class="fs-13 text-muted">Total Users</div>
                        </div>
                    </div>

                    <!-- Right Trend -->
                    <div class="text-end">
                        <div class="fs-12 fw-semibold text-primary">
                            <i class="feather-arrow-up"></i> +3
                        </div>
                        <div class="fs-11 text-muted">Today</div>
                    </div>

                </div>
            </div>
        </div>

        <!-- Active Job Posts -->
        <div class="col-xxl-3 col-md-3">
            <div class="card stretch stretch-full shadow-sm border-0 rounded-4">
                <div class="card-body d-flex justify-content-between align-items-center">

                    <div class="d-flex align-items-center gap-3">
                        <div class="avatar-text avatar-lg border-0 bg-warning text-white rounded-circle">
                            <i class="feather-briefcase"></i>
                        </div>
                        <div>
                            <div class="fs-4 fw-bold text-warning mb-0">
                                <span class="counter">124</span>
                            </div>
                            <div class="fs-13 text-muted">Active Job Posts</div>
                        </div>
                    </div>

                    <div class="text-end">
                        <div class="fs-12 fw-semibold text-danger">
                            <i class="feather-arrow-down"></i> -5
                        </div>
                        <div class="fs-11 text-muted">Today</div>
                    </div>

                </div>
            </div>
        </div>

        <!-- Pending Requests -->
        <div class="col-xxl-3 col-md-3">
            <div class="card stretch stretch-full shadow-sm border-0 rounded-4">
                <div class="card-body d-flex justify-content-between align-items-center">

                    <div class="d-flex align-items-center gap-3">
                        <div class="avatar-text avatar-lg border-0 bg-danger text-white rounded-circle">
                            <i class="feather-bell"></i>
                        </div>
                        <div>
                            <div class="fs-4 fw-bold text-danger mb-0">
                                <span class="counter">32</span>
                            </div>
                            <div class="fs-13 text-muted">Pending Requests</div>
                        </div>
                    </div>

                    <div class="text-end">
                        <div class="fs-12 fw-semibold text-success">
                            <i class="feather-arrow-up"></i> +7
                        </div>
                        <div class="fs-11 text-muted">Today</div>
                    </div>

                </div>
            </div>
        </div>
        <!-- Upcoming Events -->
        <div class="col-xxl-3 col-md-3">
            <div class="card stretch stretch-full shadow-sm border-0 rounded-4">
                <div class="card-body d-flex justify-content-between align-items-center">

                    <div class="d-flex align-items-center gap-3">
                        <div class="avatar-text avatar-lg bg-info border-0 text-white rounded-circle">
                            <i class="feather-calendar"></i>
                        </div>
                        <div>
                            <div class="fs-4 fw-bold text-info mb-0">
                                <span class="counter">14</span>
                            </div>
                            <div class="fs-13 text-muted">Upcoming Events</div>
                        </div>
                    </div>

                    <div class="text-end">
                        <div class="fs-12 fw-semibold text-muted">
                            No change
                        </div>
                        <div class="fs-11 text-muted">This Week</div>
                    </div>

                </div>
            </div>
        </div>
        {{-- END ------------------------------- Status Cards---------------------------------------- End --}}

        <!-- Platform Activity Overview -->
        <div class="col-xxl-8">
            <div class="card stretch stretch-full">
                <div class="card-header">
                    <h5 class="card-title">Platform Activity Overview</h5>
                    <div class="card-header-action">
                        <div class="card-header-btn">
                            <div data-bs-toggle="tooltip" title="Delete">
                                <a href="javascript:void(0);" class="avatar-text avatar-xs bg-danger" data-bs-toggle="remove"> </a>
                            </div>
                            <div data-bs-toggle="tooltip" title="Refresh">
                                <a href="javascript:void(0);" class="avatar-text avatar-xs bg-warning" data-bs-toggle="refresh"> </a>
                            </div>
                            <div data-bs-toggle="tooltip" title="Maximize/Minimize">
                                <a href="javascript:void(0);" class="avatar-text avatar-xs bg-success" data-bs-toggle="expand"> </a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="avatar-text avatar-sm" data-bs-toggle="dropdown" data-bs-offset="30, 40">
                                <div data-bs-toggle="tooltip" title="Options">
                                    <i class="feather-more-vertical"></i>
                                </div>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                                <a href="javascript:void(0);" class="dropdown-item"><i class="feather-at-sign"></i>New</a>
                                <a href="javascript:void(0);" class="dropdown-item"><i class="feather-calendar"></i>Event</a>
                                <a href="javascript:void(0);" class="dropdown-item"><i class="feather-bell"></i>Snoozed</a>
                                <a href="javascript:void(0);" class="dropdown-item"><i class="feather-trash-2"></i>Deleted</a>
                                <div class="dropdown-divider"></div>
                                <a href="javascript:void(0);" class="dropdown-item"><i class="feather-settings"></i>Settings</a>
                                <a href="javascript:void(0);" class="dropdown-item"><i class="feather-life-buoy"></i>Tips & Tricks</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body custom-card-action p-0">
                    <div id="platform-activity-chart"></div>
                </div>
                <div class="card-footer">
                    <div class="row g-4">
                        <!-- User Registrations -->
                        <div class="col-lg-4">
                            <div class="p-3 border border-dashed rounded">
                                <div class="fs-12 text-muted mb-1">User Registrations</div>
                                <h6 class="fw-bold text-dark mb-1">+280</h6>
                                <div class="progress ht-3">
                                    <div class="progress-bar bg-blue" style="width: 75%"></div>
                                </div>
                            </div>
                        </div>
                        <!-- Job Postings -->
                        <div class="col-lg-4">
                            <div class="p-3 border border-dashed rounded">
                                <div class="fs-12 text-muted mb-1">Job Postings</div>
                                <h6 class="fw-bold text-dark mb-1">+86</h6>
                                <div class="progress ht-3">
                                    <div class="progress-bar bg-warning" style="width: 60%"></div>
                                </div>
                            </div>
                        </div>
                        <!-- Applications -->
                        <div class="col-lg-4">
                            <div class="p-3 border rounded-3">
                                <div class="fs-12 text-muted mb-1">Applications Submitted</div>
                                <h6 class="fw-bold text-dark mb-1">+150</h6>
                                <div class="progress ht-3">
                                    <div class="progress-bar bg-success" style="width: 70%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END ------------ Platform Activity Overview ---------------------- end -->

        <!-- Total Job Applications start -->
        <div class="col-xxl-4">
            <div class="card stretch stretch-full overflow-hidden">
                <div class="bg-white text-white">
                    <div class="p-4">
                        <span class="badge bg-primary float-end">+12%</span>
                        <div class="text-start">
                            <h4 class="text-dark mb-1">1,245</h4>
                            <p class="text-muted m-0">Total Job Applications</p>
                        </div>
                    </div>
                    <div id="job-user-growth-chart"></div>
                </div>
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="hstack gap-3">
                            <div class="avatar-text avatar-lg border-0 bg-soft-primary text-primary rounded-circle">
                                <i class="feather-users"></i>
                            </div>
                            <div>
                                <a href="javascript:void(0);" class="d-block">New Users</a>
                                <span class="fs-12 text-muted">Today</span>
                            </div>
                        </div>
                        <div>
                            <div class="fw-bold text-dark text-end">+45</div>
                            <div class="fs-12 text-end">Active</div>
                        </div>
                    </div>
                    <hr class="border-dashed my-3" />
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="hstack gap-3">
                            <div class="avatar-text border-0 avatar-lg bg-soft-warning text-warning rounded-circle">
                                <i class="feather-briefcase"></i>
                            </div>
                            <div>
                                <a href="javascript:void(0);" class="d-block">Jobs Posted</a>
                                <span class="fs-12 text-muted">This Week</span>
                            </div>
                        </div>
                        <div>
                            <div class="fw-bold text-dark text-end">+23</div>
                            <div class="fs-12 text-end">New Listing</div>
                        </div>
                    </div>
                    <hr class="border-dashed my-3" />
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="hstack gap-3">
                            <div class="avatar-text avatar-lg border-0 bg-soft-success text-success rounded-circle">
                                <i class="feather-file-text"></i>
                            </div>
                            <div>
                                <a href="javascript:void(0);" class="d-block">Applications</a>
                                <span class="fs-12 text-muted">This Week</span>
                            </div>
                        </div>
                        <div>
                            <div class="fw-bold text-dark text-end">+150</div>
                            <div class="fs-12 text-end">Submitted</div>
                        </div>
                    </div>
                </div>
                <a href="javascript:void(0);" class="card-footer fs-11 fw-bold text-uppercase text-center py-4">Full Details</a>
            </div>
        </div>
        <!-- END ------------------------- Total Job Applications ----------------------- end -->

        <!--! BEGIN: [Upcoming Events] !-->
        <div class="col-xxl-4">
            <div class="card stretch stretch-full">
                <div class="card-header">
                    <h5 class="card-title">Upcoming Events</h5>
                    <div class="card-header-action">
                        <div class="card-header-btn">
                            <div data-bs-toggle="tooltip" title="Delete">
                                <a href="javascript:void(0);" class="avatar-text avatar-xs bg-danger" data-bs-toggle="remove"> </a>
                            </div>
                            <div data-bs-toggle="tooltip" title="Refresh">
                                <a href="javascript:void(0);" class="avatar-text avatar-xs bg-warning" data-bs-toggle="refresh"> </a>
                            </div>
                            <div data-bs-toggle="tooltip" title="Maximize/Minimize">
                                <a href="javascript:void(0);" class="avatar-text avatar-xs bg-success" data-bs-toggle="expand"> </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="card-body">
                    <!--! BEGIN: [Events] !-->
                    <!-- Event 1 -->
                    <div class="p-3 border border-dashed rounded-3 mb-3">
                        <div class="d-flex justify-content-between align-items-center">

                            <div class="d-flex align-items-center gap-3">
                                <div class="wd-50 ht-50 bg-soft-primary text-primary lh-1 d-flex align-items-center justify-content-center flex-column rounded-2 schedule-date">
                                    <span class="fs-18 fw-bold mb-1 d-block">12</span>
                                    <span class="fs-10 fw-semibold text-uppercase d-block">Oct</span>
                                </div>

                                <div class="text-dark">
                                    <div class="fw-bold mb-2 text-truncate-1-line">Alumni Networking Meetup</div>
                                    <div class="fs-11 fw-normal text-muted text-truncate-1-line">10:00 AM - 12:00 PM</div>
                                    <div class="fs-11 text-primary">Lahore Campus</div>
                                </div>
                            </div>

                            <span class="badge bg-soft-primary text-primary">Open</span>

                        </div>
                    </div>
                    <!-- Event 2 -->
                    <div class="p-3 border border-dashed rounded-3 mb-3">
                        <div class="d-flex justify-content-between align-items-center">

                            <div class="d-flex align-items-center gap-3">
                                <div class="wd-50 ht-50 bg-soft-warning text-warning lh-1 d-flex align-items-center justify-content-center flex-column rounded-2 schedule-date">
                                    <span class="fs-18 fw-bold mb-1 d-block">18</span>
                                    <span class="fs-10 fw-semibold text-uppercase d-block">Oct</span>
                                </div>

                                <div class="text-dark">
                                    <div class="fw-bold mb-2 text-truncate-1-line">Career Guidance Webinar</div>
                                    <div class="fs-11 fw-normal text-muted text-truncate-1-line">3:00 PM - 5:00 PM</div>
                                    <div class="fs-11 text-primary">Online (Zoom)</div>
                                </div>
                            </div>

                            <span class="badge bg-soft-warning text-warning">Upcoming</span>

                        </div>
                    </div>
                    <!-- Event 3 -->
                    <div class="p-3 border border-dashed rounded-3 mb-3">
                        <div class="d-flex justify-content-between align-items-center">

                            <div class="d-flex align-items-center gap-3">
                                <div class="wd-50 ht-50 bg-soft-success text-success lh-1 d-flex align-items-center justify-content-center flex-column rounded-2 schedule-date">
                                    <span class="fs-18 fw-bold mb-1 d-block">20</span>
                                    <span class="fs-10 fw-semibold text-uppercase d-block">Oct</span>
                                </div>

                                <div class="text-dark">
                                    <div class="fw-bold mb-2 text-truncate-1-line">Mentorship Session</div>
                                    <div class="fs-11 fw-normal text-truncate-1-line text-muted">11:00 AM - 1:00 PM</div>
                                    <div class="fs-11 text-primary">Lahore Campus</div>
                                </div>
                            </div>

                            <span class="badge bg-soft-success text-success">Active</span>

                        </div>
                    </div>
                    <!-- Event 4 -->
                    <div class="p-3 border border-dashed rounded-3">
                        <div class="d-flex justify-content-between align-items-center">

                            <div class="d-flex align-items-center gap-3">
                                <div class="wd-50 ht-50 bg-soft-danger text-danger lh-1 d-flex align-items-center justify-content-center flex-column rounded-2 schedule-date">
                                    <span class="fs-18 fw-bold mb-1 d-block">10</span>
                                    <span class="fs-10 fw-semibold text-uppercase d-block">Oct</span>
                                </div>

                                <div class="text-dark">
                                    <div class="fw-bold mb-2 text-truncate-1-line">Annual Alumni Meetup</div>
                                    <div class="fs-11 text-truncate-1-line fw-normal text-muted">5:00 PM - 9:00 PM</div>
                                    <div class="fs-11 text-primary">Islamabad Campus</div>
                                </div>
                            </div>

                            <span class="badge bg-soft-danger text-danger">Closing Soon</span>

                        </div>
                    </div>

                </div>
            
                <a href="javascript:void(0);" class="card-footer fs-11 fw-bold text-uppercase text-center py-4">View All Events</a>
            </div>
        </div>
        <!--! END: [Upcoming Events] !-->
        <!--! BEGIN: [Recent Activities] !-->
        <div class="col-xxl-4">
            <div class="card stretch stretch-full">
                <div class="card-header">
                    <h5 class="card-title">Recent Activities</h5>
                    <div class="card-header-action">
                        <div class="card-header-btn">
                            <div data-bs-toggle="tooltip" title="Delete">
                                <a href="javascript:void(0);" class="avatar-text avatar-xs bg-danger" data-bs-toggle="remove"> </a>
                            </div>
                            <div data-bs-toggle="tooltip" title="Refresh">
                                <a href="javascript:void(0);" class="avatar-text avatar-xs bg-warning" data-bs-toggle="refresh"> </a>
                            </div>
                            <div data-bs-toggle="tooltip" title="Maximize/Minimize">
                                <a href="javascript:void(0);" class="avatar-text avatar-xs bg-success" data-bs-toggle="expand"> </a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="avatar-text avatar-sm" data-bs-toggle="dropdown" data-bs-offset="25, 25">
                                <div data-bs-toggle="tooltip" title="Options">
                                    <i class="feather-more-vertical"></i>
                                </div>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                                <a href="javascript:void(0);" class="dropdown-item"><i class="feather-user"></i>Users</a>
                                <a href="javascript:void(0);" class="dropdown-item"><i class="feather-briefcase"></i>Jobs</a>
                                <a href="javascript:void(0);" class="dropdown-item"><i class="feather-calendar"></i>Events</a>
                                <div class="dropdown-divider"></div>
                                <a href="javascript:void(0);" class="dropdown-item"><i class="feather-settings"></i>Settings</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body custom-card-action">
                    <div class="mb-3">
                        <!-- Activity 1 -->
                        <div class="d-flex align-items-start gap-3 mb-4">
                            <div class="avatar-text bg-primary text-white border-0 rounded-circle">
                                <i class="feather-user-plus"></i>
                            </div>
                            <div>
                                <div class="fw-semibold text-dark">New Alumni Registered</div>
                                <div class="fs-12 text-muted">Ali Raza joined the platform</div>
                                <div class="fs-11 text-muted">5 mins ago</div>
                            </div>
                        </div>
                        <hr class="border-dashed my-3" />
                        <!-- Activity 2 -->
                        <div class="d-flex align-items-start gap-3 mb-4">
                            <div class="avatar-text bg-success text-white border-0 rounded-circle">
                                <i class="feather-briefcase"></i>
                            </div>
                            <div>
                                <div class="fw-semibold text-dark">New Job Posted</div>
                                <div class="fs-12 text-muted">Frontend Developer position added</div>
                                <div class="fs-11 text-muted">15 mins ago</div>
                            </div>
                        </div>
                        <hr class="border-dashed my-3" />
                        <!-- Activity 3 -->
                        <div class="d-flex align-items-start gap-3 mb-4">
                            <div class="avatar-text bg-warning text-white border-0 rounded-circle">
                                <i class="feather-calendar"></i>
                            </div>
                            <div>
                                <div class="fw-semibold text-dark">Event Created</div>
                                <div class="fs-12 text-muted">Alumni Meetup scheduled</div>
                                <div class="fs-11 text-muted">1 hour ago</div>
                            </div>
                        </div>
                        <hr class="border-dashed my-3" />
                        <!-- Activity 4 -->
                        <div class="d-flex align-items-start gap-3 mb-4">
                            <div class="avatar-text bg-info text-white border-0 rounded-circle">
                                <i class="feather-users"></i>
                            </div>
                            <div>
                                <div class="fw-semibold text-dark">Mentorship Session Booked</div>
                                <div class="fs-12 text-muted">Sara Ahmed booked a session</div>
                                <div class="fs-11 text-muted">2 hours ago</div>
                            </div>
                        </div>
                        <hr class="border-dashed my-3" />
                        <!-- Activity 5 -->
                        <div class="d-flex align-items-start gap-3">
                            <div class="avatar-text bg-danger text-white border-0 rounded-circle">
                                <i class="feather-x-circle"></i>
                            </div>
                            <div>
                                <div class="fw-semibold text-dark">Mentorship Request Rejected</div>
                                <div class="fs-12 text-muted">Request declined by mentor</div>
                                <div class="fs-11 text-muted">3 hours ago</div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="javascript:void(0);" class="card-footer fs-11 fw-bold text-uppercase text-center">View All Activities</a>
            </div>
        </div>
        <!--! END: [Recent Activities] !-->
        <!--! BEGIN: [Recent Jobs !-->
        <div class="col-xxl-4">
            <div class="card stretch stretch-full">
                <div class="card-header">
                    <h5 class="card-title">Recent Jobs</h5>
                    <div class="card-header-action">
                        <div class="card-header-btn">
                            <div data-bs-toggle="tooltip" title="Delete">
                                <a href="javascript:void(0);" class="avatar-text avatar-xs bg-danger" data-bs-toggle="remove"> </a>
                            </div>
                            <div data-bs-toggle="tooltip" title="Refresh">
                                <a href="javascript:void(0);" class="avatar-text avatar-xs bg-warning" data-bs-toggle="refresh"> </a>
                            </div>
                            <div data-bs-toggle="tooltip" title="Maximize/Minimize">
                                <a href="javascript:void(0);" class="avatar-text avatar-xs bg-success" data-bs-toggle="expand"> </a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="avatar-text avatar-sm" data-bs-toggle="dropdown" data-bs-offset="25, 25">
                                <div data-bs-toggle="tooltip" title="Options">
                                    <i class="feather-more-vertical"></i>
                                </div>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                                <a href="javascript:void(0);" class="dropdown-item"><i class="feather-briefcase"></i>All jobs</a>
                                <a href="javascript:void(0);" class="dropdown-item"><i class="feather-users"></i>Applications</a>
                                <a href="javascript:void(0);" class="dropdown-item"><i class="feather-check-circle"></i>Approved</a>
                                <div class="dropdown-divider"></div>
                                <a href="javascript:void(0);" class="dropdown-item"><i class="feather-settings"></i>Settings</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body custom-card-action">
                    <div class="hstack justify-content-between border border-dashed rounded-3 p-3 mb-3">
                        <div class="hstack gap-3">
                            <div class="avatar-text bg-primary border-0 text-white rounded-circle">
                                <i class="feather-code"></i>
                            </div>
                            <div>
                                <a href="javascript:void(0);">Frontend Developer</a>
                                <div class="fs-11 text-muted">Tech Solutions Ltd.</div>
                            </div>
                        </div>
                        <span class="badge bg-soft-success text-success">25 Applied</span>
                    </div>
                    <div class="hstack justify-content-between border border-dashed rounded-3 p-3 mb-3">
                        <div class="hstack gap-3">
                            <div class="avatar-text bg-info border-0 text-white rounded-circle">
                                <i class="feather-server"></i>
                            </div>
                            <div>
                                <a href="javascript:void(0);">Backend Developer</a>
                                <div class="fs-11 text-muted">InnovateX</div>
                            </div>
                        </div>
                        <span class="badge bg-soft-warning text-warning">12 Applied</span>
                    </div>
                    <div class="hstack justify-content-between border border-dashed rounded-3 p-3 mb-3">
                        <div class="hstack gap-3">
                            <div class="avatar-text bg-success border-0 text-white rounded-circle">
                                <i class="feather-pen-tool"></i>
                            </div>
                            <div>
                                <a href="javascript:void(0);">UI/UX Designer</a>
                                <div class="fs-11 text-muted">Creative Studio</div>
                            </div>
                        </div>
                        <span class="badge bg-soft-primary text-primary">30 Applied</span>
                    </div>
                    <div class="hstack justify-content-between border border-dashed rounded-3 p-3 mb-2">
                        <div class="hstack gap-3">
                            <div class="avatar-text bg-danger text-white rounded-circle">
                                <i class="feather-bar-chart-2"></i>
                            </div>
                            <div>
                                <a href="javascript:void(0);">Digital Marketer</a>
                                <div class="fs-11 text-muted">GrowthHub</div>
                            </div>
                        </div>
                        <span class="badge bg-soft-danger text-danger">Closed</span>
                    </div>
                </div>
                <a href="javascript:void(0);" class="card-footer fs-11 fw-bold text-uppercase text-center">View All Jobs</a>
            </div>
        </div>
        <!--! END: [Recent Jobs !-->
        
        <!-- [Mentorship Overview] start -->
        <div class="col-xxl-4">
            <div class="card stretch stretch-full">
                <div class="card-header">
                    <h5 class="card-title">Mentorship Overview</h5>
                    <div class="card-header-action">
                        <div class="card-header-btn">
                            <div data-bs-toggle="tooltip" title="Delete">
                                <a href="javascript:void(0);" class="avatar-text avatar-xs bg-danger" data-bs-toggle="remove"> </a>
                            </div>
                            <div data-bs-toggle="tooltip" title="Refresh">
                                <a href="javascript:void(0);" class="avatar-text avatar-xs bg-warning" data-bs-toggle="refresh"> </a>
                            </div>
                            <div data-bs-toggle="tooltip" title="Maximize/Minimize">
                                <a href="javascript:void(0);" class="avatar-text avatar-xs bg-success" data-bs-toggle="expand"> </a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="avatar-text avatar-sm" data-bs-toggle="dropdown" data-bs-offset="25, 25">
                                <div data-bs-toggle="tooltip" title="Options">
                                    <i class="feather-more-vertical"></i>
                                </div>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                                <a href="javascript:void(0);" class="dropdown-item"><i class="feather-user-plus"></i>New Requests</a>
                                <a href="javascript:void(0);" class="dropdown-item"><i class="feather-check-circle"></i>Approved</a>
                                <a href="javascript:void(0);" class="dropdown-item"><i class="feather-clock"></i>Pending</a>
                                <div class="dropdown-divider"></div>
                                <a href="javascript:void(0);" class="dropdown-item"><i class="feather-settings"></i>Settings</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body custom-card-action">
                    <div id="mentorship-overview-donut"></div>
                    <div class="row g-2">
                        <div class="col-6">
                            <a href="javascript:void(0);" class="p-2 hstack gap-2 rounded border border-dashed border-gray-5">
                                <span class="wd-7 ht-7 rounded-circle d-inline-block bg-primary"></span>
                                <span>Requests<span class="fs-10 text-muted ms-1">(120)</span></span>
                            </a>
                        </div>
                        <div class="col-6">
                            <a href="javascript:void(0);" class="p-2 hstack gap-2 rounded border border-dashed border-gray-5">
                                <span class="wd-7 ht-7 rounded-circle d-inline-block bg-warning"></span>
                                <span>Pending<span class="fs-10 text-muted ms-1">(45)</span></span>
                            </a>
                        </div>
                        <div class="col-6">
                            <a href="javascript:void(0);" class="p-2 hstack gap-2 rounded border border-dashed border-gray-5">
                                <span class="wd-7 ht-7 rounded-circle d-inline-block bg-info"></span>
                                <span>Scheduled<span class="fs-10 text-muted ms-1">(30)</span></span>
                            </a>
                        </div>
                        <div class="col-6">
                            <a href="javascript:void(0);" class="p-2 hstack gap-2 rounded border border-dashed border-gray-5">
                                <span class="wd-7 ht-7 rounded-circle d-inline-block bg-success"></span>
                                <span>Completed<span class="fs-10 text-muted ms-1">(60)</span></span>
                            </a>
                        </div>
                        <div class="col-6">
                            <a href="javascript:void(0);" class="p-2 hstack gap-2 rounded border border-dashed border-gray-5">
                                <span class="wd-7 ht-7 rounded-circle d-inline-block bg-danger"></span>
                                <span>Rejected<span class="fs-10 text-muted ms-1">(15)</span></span>
                            </a>
                        </div>
                        <div class="col-6">
                            <a href="javascript:void(0);" class="p-2 hstack gap-2 rounded border border-dashed border-gray-5">
                                <span class="wd-7 ht-7 rounded-circle d-inline-block bg-dark"></span>
                                <span>Cancelled<span class="fs-10 text-muted ms-1">(10)</span></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- [Mentorship Overview] end -->

        <!-- [Latest Mentorship] start -->
        <div class="col-xxl-8">
            <div class="card stretch stretch-full">
                <div class="card-header">
                    <h5 class="card-title">Latest Mentorships</h5>
                    <div class="card-header-action">
                        <div class="card-header-btn">
                            <div data-bs-toggle="tooltip" title="Delete">
                                <a href="javascript:void(0);" class="avatar-text avatar-xs bg-danger" data-bs-toggle="remove"> </a>
                            </div>
                            <div data-bs-toggle="tooltip" title="Refresh">
                                <a href="javascript:void(0);" class="avatar-text avatar-xs bg-warning" data-bs-toggle="refresh"> </a>
                            </div>
                            <div data-bs-toggle="tooltip" title="Maximize/Minimize">
                                <a href="javascript:void(0);" class="avatar-text avatar-xs bg-success" data-bs-toggle="expand"> </a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="avatar-text avatar-sm" data-bs-toggle="dropdown" data-bs-offset="25, 25">
                                <div data-bs-toggle="tooltip" title="Options">
                                    <i class="feather-more-vertical"></i>
                                </div>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                                <a href="javascript:void(0);" class="dropdown-item"><i class="feather-user"></i>New Request</a>
                                <a href="javascript:void(0);" class="dropdown-item"><i class="feather-calendar"></i>Sessions</a>
                                <a href="javascript:void(0);" class="dropdown-item"><i class="feather-check-circle"></i>Approved</a>
                                <div class="dropdown-divider"></div>
                                <a href="javascript:void(0);" class="dropdown-item"><i class="feather-settings"></i>Settings</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body custom-card-action p-0">
                    <div class="table-responsive">
                        <table class="table table-hover mb-0">
                            <thead>
                                <tr class="border-b">
                                    <th scope="row">Participant</th>
                                    <th>Mentorship Type</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th class="text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center gap-3">
                                            <div class="avatar-image">
                                                <img src={{asset("admin/images/avatar/2.png")}} alt="" class="img-fluid" />
                                            </div>
                                            <a href="javascript:void(0);">
                                                <span class="d-block">Ayesha Khan</span>
                                                <span class="fs-12 d-block fw-normal text-muted">Student</span>
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-gray-200 text-dark">Career Guidance</span>
                                    </td>
                                    <td class="fs-12">12 Oct 2025</td>
                                    <td>
                                        <span class="badge bg-soft-success text-success">Approved</span>
                                    </td>
                                    <td class="text-end">
                                        <a href="javascript:void(0);"><i class="feather-more-vertical"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center gap-3">
                                            <div class="avatar-image">
                                                <img src={{asset("admin/images/avatar/3.png")}} alt="" class="img-fluid" />
                                            </div>
                                            <a href="javascript:void(0);">
                                                <span class="d-block">Ali Raza</span>
                                                <span class="fs-12 d-block fw-normal text-muted">Alumni Mentor</span>
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-gray-200 text-dark">Technical Mentorship</span>
                                    </td>
                                    <td class="fs-12">15 Dec 2025</td>
                                    <td>
                                        <span class="badge bg-soft-warning text-warning">Pending</span>
                                    </td>
                                    <td class="text-end">
                                        <a href="javascript:void(0);"><i class="feather-more-vertical"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center gap-3">
                                            <div class="avatar-image">
                                                <img src={{asset("admin/images/avatar/4.png")}} alt="" class="img-fluid" />
                                            </div>
                                            <a href="javascript:void(0);">
                                                <span class="d-block">Sarah Ahmed</span>
                                                <span class="fs-12 d-block fw-normal text-muted">Student</span>
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-gray-200 text-dark">Resume Review</span>
                                    </td>
                                    <td>03 April 2026</td>
                                    <td>
                                        <span class="badge bg-soft-success text-success">Scheduled</span>
                                    </td>
                                    <td class="text-end">
                                        <a href="javascript:void(0);"><i class="feather-more-vertical"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center gap-3">
                                            <div class="avatar-image">
                                                <img src={{asset("admin/images/avatar/5.png")}} alt="" class="img-fluid" />
                                            </div>
                                            <a href="javascript:void(0);">
                                                <span class="d-block">Usman Tariq</span>
                                                <span class="fs-12 d-block fw-normal text-muted">Alumni Mentor</span>
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-gray-200 text-dark">Interview Prep</span>
                                    </td>
                                    <td>20 Oct 2025</td>
                                    <td>
                                        <span class="badge bg-soft-danger text-danger">Rejected</span>
                                    </td>
                                    <td class="text-end">
                                        <a href="javascript:void(0);"><i class="feather-more-vertical"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center gap-3">
                                            <div class="avatar-image">
                                                <img src={{asset("admin/images/avatar/6.png")}} alt="" class="img-fluid" />
                                            </div>
                                            <a href="javascript:void(0);">
                                                <span class="d-block">Fatima Noor</span>
                                                <span class="fs-12 d-block fw-normal text-muted">Student</span>
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-gray-200 text-dark">Startup mentoring</span>
                                    </td>
                                    <td>22 Oct 2025</td>
                                    <td>
                                        <span class="badge bg-soft-success text-success">Completed</span>
                                    </td>
                                    <td class="text-end">
                                        <a href="javascript:void(0);"><i class="feather-more-vertical"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card-footer">
                    <ul class="list-unstyled d-flex align-items-center gap-2 mb-0 pagination-common-style">
                        <li>
                            <a href="javascript:void(0);"><i class="bi bi-arrow-left"></i></a>
                        </li>
                        <li><a href="javascript:void(0);" class="active">1</a></li>
                        <li><a href="javascript:void(0);">2</a></li>
                        <li>
                            <a href="javascript:void(0);"><i class="bi bi-dot"></i></a>
                        </li>
                        <li><a href="javascript:void(0);">8</a></li>
                        <li><a href="javascript:void(0);">9</a></li>
                        <li>
                            <a href="javascript:void(0);"><i class="bi bi-arrow-right"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- [Latest Mentorship] end -->
        
    </div>
</div>
@endsection