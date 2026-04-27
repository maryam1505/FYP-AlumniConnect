@extends('layouts.app')
@section('title', 'Mentorship Channels')
@section('page-title', 'Mentorship Channels')
@section('section-title', 'Channels')

@section('page-header-right')
<div class="page-header-right ms-auto">
    <div class="page-header-right-items">
        <div class="d-flex d-md-none">
            <a href="javascript:void(0)" class="page-header-right-close-toggle">
                <i class="feather-arrow-left me-2"></i>
                <span>Back</span>
            </a>
        </div>
        <div class="d-flex align-items-center gap-2 page-header-right-items-wrapper">
            <a href="javascript:void(0);" class="btn btn-icon btn-light-brand" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                <i class="feather-bar-chart"></i>
            </a>
            <div class="dropdown">
                <a class="btn btn-icon btn-light-brand" data-bs-toggle="dropdown" data-bs-offset="0, 10" data-bs-auto-close="outside">
                    <i class="feather-filter"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                    <a href="javascript:void(0);" class="dropdown-item">
                        <span class="wd-7 ht-7 bg-primary rounded-circle d-inline-block me-3"></span>
                        <span>Alls</span>
                    </a>
                    <a href="javascript:void(0);" class="dropdown-item">
                        <span class="wd-7 ht-7 bg-indigo rounded-circle d-inline-block me-3"></span>
                        <span>On Hold</span>
                    </a>
                    <a href="javascript:void(0);" class="dropdown-item">
                        <span class="wd-7 ht-7 bg-warning rounded-circle d-inline-block me-3"></span>
                        <span>Pending</span>
                    </a>
                    <a href="javascript:void(0);" class="dropdown-item">
                        <span class="wd-7 ht-7 bg-success rounded-circle d-inline-block me-3"></span>
                        <span>Finished</span>
                    </a>
                    <a href="javascript:void(0);" class="dropdown-item">
                        <span class="wd-7 ht-7 bg-danger rounded-circle d-inline-block me-3"></span>
                        <span>Declined</span>
                    </a>
                    <a href="javascript:void(0);" class="dropdown-item">
                        <span class="wd-7 ht-7 bg-teal rounded-circle d-inline-block me-3"></span>
                        <span>In Progress</span>
                    </a>
                    <a href="javascript:void(0);" class="dropdown-item">
                        <span class="wd-7 ht-7 bg-success rounded-circle d-inline-block me-3"></span>
                        <span>Not Started</span>
                    </a>
                    <a href="javascript:void(0);" class="dropdown-item">
                        <span class="wd-7 ht-7 bg-warning rounded-circle d-inline-block me-3"></span>
                        <span>My Projects</span>
                    </a>
                </div>
            </div>
            <div class="dropdown">
                <a class="btn btn-icon btn-light-brand" data-bs-toggle="dropdown" data-bs-offset="0, 10" data-bs-auto-close="outside">
                    <i class="feather-paperclip"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                    <a href="javascript:void(0);" class="dropdown-item">
                        <i class="bi bi-filetype-pdf me-3"></i>
                        <span>PDF</span>
                    </a>
                    <a href="javascript:void(0);" class="dropdown-item">
                        <i class="bi bi-filetype-csv me-3"></i>
                        <span>CSV</span>
                    </a>
                    <a href="javascript:void(0);" class="dropdown-item">
                        <i class="bi bi-filetype-xml me-3"></i>
                        <span>XML</span>
                    </a>
                    <a href="javascript:void(0);" class="dropdown-item">
                        <i class="bi bi-filetype-txt me-3"></i>
                        <span>Text</span>
                    </a>
                    <a href="javascript:void(0);" class="dropdown-item">
                        <i class="bi bi-filetype-exe me-3"></i>
                        <span>Excel</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a href="javascript:void(0);" class="dropdown-item">
                        <i class="bi bi-printer me-3"></i>
                        <span>Print</span>
                    </a>
                </div>
            </div>
            <a href="projects-create.html" class="btn btn-primary">
                <i class="feather-plus me-2"></i>
                <span>Create Channel</span>
            </a>
        </div>
    </div>
    <div class="d-md-none d-flex align-items-center">
        <a href="javascript:void(0)" class="page-header-right-open-toggle">
            <i class="feather-align-right fs-20"></i>
        </a>
    </div>
</div>
@endsection

@section('content')
<div id="collapseOne" class="accordion-collapse collapse page-header-collapse">
    <div class="accordion-body pb-2">
        <div class="row">
            <div class="col-xxl-3 col-md-6">
                <div class="card stretch stretch-full">
                    <div class="card-body">
                        <a href="javascript:void(0);" class="fw-bold d-block">
                            <span class="d-block">Not Started</span>
                            <span class="fs-24 fw-bolder d-block">04</span>
                        </a>
                        <div class="pt-4">
                            <div class="d-flex align-items-center justify-content-between">
                                <a href="javascript:void(0);" class="fs-12 fw-medium text-muted">
                                    <span>Invoices Awaiting</span>
                                    <i class="feather-link-2 fs-10 ms-1"></i>
                                </a>
                                <div>
                                    <span class="fs-12 text-muted">$5,569</span>
                                    <span class="fs-11 text-muted">(56%)</span>
                                </div>
                            </div>
                            <div class="progress mt-2 ht-3">
                                <div class="progress-bar bg-primary" role="progressbar" style="width: 56%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xxl-3 col-md-6">
                <div class="card stretch stretch-full">
                    <div class="card-body">
                        <a href="javascript:void(0);" class="fw-bold d-block">
                            <span class="d-block">In Progress</span>
                            <span class="fs-24 fw-bolder d-block">06</span>
                        </a>
                        <div class="pt-4">
                            <div class="d-flex align-items-center justify-content-between">
                                <a href="javascript:void(0);" class="fs-12 fw-medium text-muted">
                                    <span>Projects In Progress</span>
                                    <i class="feather-link-2 fs-10 ms-1"></i>
                                </a>
                                <div>
                                    <span class="fs-12 text-muted">16 Completed</span>
                                    <span class="fs-11 text-muted">(78%)</span>
                                </div>
                            </div>
                            <div class="progress mt-2 ht-3">
                                <div class="progress-bar bg-success" role="progressbar" style="width: 78%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xxl-3 col-md-6">
                <div class="card stretch stretch-full">
                    <div class="card-body">
                        <a href="javascript:void(0);" class="fw-bold d-block">
                            <span class="d-block">Cancelled</span>
                            <span class="fs-24 fw-bolder d-block">02</span>
                        </a>
                        <div class="pt-4">
                            <div class="d-flex align-items-center justify-content-between">
                                <a href="javascript:void(0);" class="fs-12 fw-medium text-muted">
                                    <span>Converted Leads</span>
                                    <i class="feather-link-2 fs-10 ms-1"></i>
                                </a>
                                <div>
                                    <span class="fs-12 text-muted">52 Completed</span>
                                    <span class="fs-11 text-muted">(63%)</span>
                                </div>
                            </div>
                            <div class="progress mt-2 ht-3">
                                <div class="progress-bar bg-warning" role="progressbar" style="width: 63%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xxl-3 col-md-6">
                <div class="card stretch stretch-full">
                    <div class="card-body">
                        <a href="javascript:void(0);" class="fw-bold d-block">
                            <span class="d-block">Finished</span>
                            <span class="fs-24 fw-bolder d-block">25</span>
                        </a>
                        <div class="pt-4">
                            <div class="d-flex align-items-center justify-content-between">
                                <a href="javascript:void(0);" class="fs-12 fw-medium text-muted">
                                    <span>Conversion Rate</span>
                                    <i class="feather-link-2 fs-10 ms-1"></i>
                                </a>
                                <div>
                                    <span class="fs-12 text-muted">$2,254</span>
                                    <span class="fs-11 text-muted">(46%)</span>
                                </div>
                            </div>
                            <div class="progress mt-2 ht-3">
                                <div class="progress-bar bg-danger" role="progressbar" style="width: 46%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- [ page-header ] end -->
<!-- [ Main Content ] start -->
<div class="main-content">
    <div class="row">
        <div class="col-lg-12">
            <div class="card stretch stretch-full">
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table table-hover" id="projectList">
                            <thead>
                                <tr>
                                    <th class="wd-30">
                                        <div class="btn-group mb-1">
                                            <div class="custom-control custom-checkbox ms-1">
                                                <input type="checkbox" class="custom-control-input" id="checkAllProject">
                                                <label class="custom-control-label" for="checkAllProject"></label>
                                            </div>
                                        </div>
                                    </th>
                                    <th>Project Name</th>
                                    <th>Customer</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Assigned</th>
                                    <th>Status</th>
                                    <th class="text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="single-item">
                                    <td>
                                        <div class="item-checkbox ms-1">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input checkbox" id="checkBox_1">
                                                <label class="custom-control-label" for="checkBox_1"></label>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="project-name-td">
                                        <div class="hstack gap-4">
                                            <div class="avatar-image border-0">
                                                <img src="assets/images/brand/app-store.png" alt="" class="img-fluid">
                                            </div>
                                            <div>
                                                <a href="projects-view.html" class="text-truncate-1-line">Spark: This name could work well for a project related to innovation, creativity, or inspiration.</a>
                                                <p class="fs-12 text-muted mt-2 text-truncate-1-line project-list-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                                <div class="project-list-action fs-12 d-flex align-items-center gap-3 mt-2">
                                                    <a href="javascript:void(0);">Start</a>
                                                    <span class="vr text-muted"></span>
                                                    <a href="javascript:void(0);">Edit</a>
                                                    <span class="vr text-muted"></span>
                                                    <a href="javascript:void(0);" class="text-danger">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a href="projects-view.html" class="hstack gap-3">
                                            <div class="avatar-image avatar-md">
                                                <img src="assets/images/avatar/1.png" alt="" class="img-fluid">
                                            </div>
                                            <div>
                                                <span class="text-truncate-1-line">Alexandra Della</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>2023-04-05</td>
                                    <td>2023-04-10</td>
                                    <td>
                                        <select class="form-select form-control" data-select2-selector="user">
                                            <option value="alex@outlook.com" data-user="1">alex@outlook.com</option>
                                            <option value="john.deo@outlook.com" data-user="2">john.deo@outlook.com</option>
                                            <option value="green.cutte@outlook.com" data-user="3">green.cutte@outlook.com</option>
                                            <option value="nancy.elliot@outlook.com" data-user="4">nancy.elliot@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="5">mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="6">erna.serpa@outlook.com</option>
                                            <option value="green.cutte@outlook.com" data-user="7">green.cutte@outlook.com</option>
                                            <option value="nancy.elliot@outlook.com" data-user="8">nancy.elliot@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="9" selected>mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="10">erna.serpa@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="11">mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="12">erna.serpa@outlook.com</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="form-control" data-select2-selector="status">
                                            <option value="primary" data-bg="bg-primary" selected>In Projress</option>
                                            <option value="warning" data-bg="bg-warning">Not Started</option>
                                            <option value="success" data-bg="bg-success">On Hold</option>
                                            <option value="danger" data-bg="bg-danger">Declined</option>
                                            <option value="teal" data-bg="bg-teal">Finished</option>
                                        </select>
                                    </td>
                                    <td>
                                        <div class="hstack gap-2 justify-content-end">
                                            <a href="projects-view.html" class="avatar-text avatar-md">
                                                <i class="feather feather-eye"></i>
                                            </a>
                                            <div class="dropdown">
                                                <a href="javascript:void(0)" class="avatar-text avatar-md" data-bs-toggle="dropdown" data-bs-offset="0,21">
                                                    <i class="feather feather-more-horizontal"></i>
                                                </a>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-edit-3 me-3"></i>
                                                            <span>Edit</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item printBTN" href="javascript:void(0)">
                                                            <i class="feather feather-printer me-3"></i>
                                                            <span>Print</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-clock me-3"></i>
                                                            <span>Remind</span>
                                                        </a>
                                                    </li>
                                                    <li class="dropdown-divider"></li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-archive me-3"></i>
                                                            <span>Archive</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-alert-octagon me-3"></i>
                                                            <span>Report Spam</span>
                                                        </a>
                                                    </li>
                                                    <li class="dropdown-divider"></li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-trash-2 me-3"></i>
                                                            <span>Delete</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="single-item">
                                    <td>
                                        <div class="item-checkbox ms-1">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input checkbox" id="checkBox_2">
                                                <label class="custom-control-label" for="checkBox_2"></label>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="project-name-td">
                                        <div class="hstack gap-4">
                                            <div class="avatar-image border-0">
                                                <img src="assets/images/brand/dropbox.png" alt="" class="img-fluid">
                                            </div>
                                            <div>
                                                <a href="projects-view.html" class="text-truncate-1-line">Nexus: This name could work well for a project related to connectivity, bringing different people or ideas together, or solving complex problems.</a>
                                                <p class="fs-12 text-muted mt-2 text-truncate-1-line project-list-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                                <div class="project-list-action fs-12 d-flex align-items-center gap-3 mt-2">
                                                    <a href="javascript:void(0);">Start</a>
                                                    <span class="vr text-muted"></span>
                                                    <a href="javascript:void(0);">Edit</a>
                                                    <span class="vr text-muted"></span>
                                                    <a href="javascript:void(0);" class="text-danger">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a href="projects-view.html" class="hstack gap-3">
                                            <div class="avatar-image avatar-md bg-warning text-white">N</div>
                                            <div>
                                                <span class="text-truncate-1-line">Nancy Elliot</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>2023-04-02</td>
                                    <td>2023-04-06</td>
                                    <td>
                                        <select class="form-select form-control" data-select2-selector="user">
                                            <option value="alex@outlook.com" data-user="1">alex@outlook.com</option>
                                            <option value="john.deo@outlook.com" data-user="2">john.deo@outlook.com</option>
                                            <option value="green.cutte@outlook.com" data-user="3">green.cutte@outlook.com</option>
                                            <option value="nancy.elliot@outlook.com" data-user="4">nancy.elliot@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="5">mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="6">erna.serpa@outlook.com</option>
                                            <option value="green.cutte@outlook.com" data-user="7">green.cutte@outlook.com</option>
                                            <option value="nancy.elliot@outlook.com" data-user="8" selected>nancy.elliot@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="9">mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="10">erna.serpa@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="11">mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="12">erna.serpa@outlook.com</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="form-control" data-select2-selector="status">
                                            <option value="primary" data-bg="bg-primary">In Projress</option>
                                            <option value="warning" data-bg="bg-warning" selected>Not Started</option>
                                            <option value="success" data-bg="bg-success">On Hold</option>
                                            <option value="danger" data-bg="bg-danger">Declined</option>
                                            <option value="teal" data-bg="bg-teal">Finished</option>
                                        </select>
                                    </td>
                                    <td>
                                        <div class="hstack gap-2 justify-content-end">
                                            <a href="projects-view.html" class="avatar-text avatar-md">
                                                <i class="feather feather-eye"></i>
                                            </a>
                                            <div class="dropdown">
                                                <a href="javascript:void(0)" class="avatar-text avatar-md" data-bs-toggle="dropdown" data-bs-offset="0,21">
                                                    <i class="feather feather-more-horizontal"></i>
                                                </a>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-edit-3 me-3"></i>
                                                            <span>Edit</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item printBTN" href="javascript:void(0)">
                                                            <i class="feather feather-printer me-3"></i>
                                                            <span>Print</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-clock me-3"></i>
                                                            <span>Remind</span>
                                                        </a>
                                                    </li>
                                                    <li class="dropdown-divider"></li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-archive me-3"></i>
                                                            <span>Archive</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-alert-octagon me-3"></i>
                                                            <span>Report Spam</span>
                                                        </a>
                                                    </li>
                                                    <li class="dropdown-divider"></li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-trash-2 me-3"></i>
                                                            <span>Delete</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="single-item">
                                    <td>
                                        <div class="item-checkbox ms-1">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input checkbox" id="checkBox_3">
                                                <label class="custom-control-label" for="checkBox_3"></label>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="project-name-td">
                                        <div class="hstack gap-4">
                                            <div class="avatar-image border-0">
                                                <img src="assets/images/brand/facebook.png" alt="" class="img-fluid">
                                            </div>
                                            <div>
                                                <a href="projects-view.html" class="text-truncate-1-line">Velocity: This name could work well for a project related to speed, efficiency, or productivity.</a>
                                                <p class="fs-12 text-muted mt-2 text-truncate-1-line project-list-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                                <div class="project-list-action fs-12 d-flex align-items-center gap-3 mt-2">
                                                    <a href="javascript:void(0);">Start</a>
                                                    <span class="vr text-muted"></span>
                                                    <a href="javascript:void(0);">Edit</a>
                                                    <span class="vr text-muted"></span>
                                                    <a href="javascript:void(0);" class="text-danger">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a href="projects-view.html" class="hstack gap-3">
                                            <div class="avatar-image avatar-md">
                                                <img src="assets/images/avatar/2.png" alt="" class="img-fluid">
                                            </div>
                                            <div>
                                                <span class="text-truncate-1-line">Green Cute</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>2023-04-12</td>
                                    <td>2023-04-15</td>
                                    <td>
                                        <select class="form-select form-control" data-select2-selector="user">
                                            <option value="alex@outlook.com" data-user="1">alex@outlook.com</option>
                                            <option value="john.deo@outlook.com" data-user="2">john.deo@outlook.com</option>
                                            <option value="green.cutte@outlook.com" data-user="3">green.cutte@outlook.com</option>
                                            <option value="nancy.elliot@outlook.com" data-user="4">nancy.elliot@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="5">mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="6">erna.serpa@outlook.com</option>
                                            <option value="green.cutte@outlook.com" data-user="7" selected>green.cutte@outlook.com</option>
                                            <option value="nancy.elliot@outlook.com" data-user="8">nancy.elliot@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="9">mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="10">erna.serpa@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="11">mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="12">erna.serpa@outlook.com</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="form-control" data-select2-selector="status">
                                            <option value="primary" data-bg="bg-primary">In Projress</option>
                                            <option value="warning" data-bg="bg-warning">Not Started</option>
                                            <option value="success" data-bg="bg-success" selected>On Hold</option>
                                            <option value="danger" data-bg="bg-danger">Declined</option>
                                            <option value="teal" data-bg="bg-teal">Finished</option>
                                        </select>
                                    </td>
                                    <td>
                                        <div class="hstack gap-2 justify-content-end">
                                            <a href="projects-view.html" class="avatar-text avatar-md">
                                                <i class="feather feather-eye"></i>
                                            </a>
                                            <div class="dropdown">
                                                <a href="javascript:void(0)" class="avatar-text avatar-md" data-bs-toggle="dropdown" data-bs-offset="0,21">
                                                    <i class="feather feather-more-horizontal"></i>
                                                </a>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-edit-3 me-3"></i>
                                                            <span>Edit</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item printBTN" href="javascript:void(0)">
                                                            <i class="feather feather-printer me-3"></i>
                                                            <span>Print</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-clock me-3"></i>
                                                            <span>Remind</span>
                                                        </a>
                                                    </li>
                                                    <li class="dropdown-divider"></li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-archive me-3"></i>
                                                            <span>Archive</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-alert-octagon me-3"></i>
                                                            <span>Report Spam</span>
                                                        </a>
                                                    </li>
                                                    <li class="dropdown-divider"></li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-trash-2 me-3"></i>
                                                            <span>Delete</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="single-item">
                                    <td>
                                        <div class="item-checkbox ms-1">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input checkbox" id="checkBox_4">
                                                <label class="custom-control-label" for="checkBox_4"></label>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="project-name-td">
                                        <div class="hstack gap-4">
                                            <div class="avatar-image border-0">
                                                <img src="assets/images/brand/figma.png" alt="" class="img-fluid">
                                            </div>
                                            <div>
                                                <a href="projects-view.html" class="text-truncate-1-line">Catalyst: This name could work well for a project related to driving change or transformation.</a>
                                                <p class="fs-12 text-muted mt-2 text-truncate-1-line project-list-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                                <div class="project-list-action fs-12 d-flex align-items-center gap-3 mt-2">
                                                    <a href="javascript:void(0);">Start</a>
                                                    <span class="vr text-muted"></span>
                                                    <a href="javascript:void(0);">Edit</a>
                                                    <span class="vr text-muted"></span>
                                                    <a href="javascript:void(0);" class="text-danger">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a href="projects-view.html" class="hstack gap-3">
                                            <div class="avatar-image avatar-md bg-teal text-white">H</div>
                                            <div>
                                                <span class="text-truncate-1-line">Henry Leach</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>2023-04-20</td>
                                    <td>2023-04-25</td>
                                    <td>
                                        <select class="form-select form-control" data-select2-selector="user">
                                            <option value="alex@outlook.com" data-user="1">alex@outlook.com</option>
                                            <option value="john.deo@outlook.com" data-user="2">john.deo@outlook.com</option>
                                            <option value="green.cutte@outlook.com" data-user="3">green.cutte@outlook.com</option>
                                            <option value="nancy.elliot@outlook.com" data-user="4">nancy.elliot@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="5">mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="6" selected>erna.serpa@outlook.com</option>
                                            <option value="green.cutte@outlook.com" data-user="7">green.cutte@outlook.com</option>
                                            <option value="nancy.elliot@outlook.com" data-user="8">nancy.elliot@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="9">mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="10">erna.serpa@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="11">mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="12">erna.serpa@outlook.com</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="form-control" data-select2-selector="status">
                                            <option value="primary" data-bg="bg-primary">In Projress</option>
                                            <option value="warning" data-bg="bg-warning">Not Started</option>
                                            <option value="success" data-bg="bg-success">On Hold</option>
                                            <option value="danger" data-bg="bg-danger" selected>Declined</option>
                                            <option value="teal" data-bg="bg-teal">Finished</option>
                                        </select>
                                    </td>
                                    <td>
                                        <div class="hstack gap-2 justify-content-end">
                                            <a href="projects-view.html" class="avatar-text avatar-md">
                                                <i class="feather feather-eye"></i>
                                            </a>
                                            <div class="dropdown">
                                                <a href="javascript:void(0)" class="avatar-text avatar-md" data-bs-toggle="dropdown" data-bs-offset="0,21">
                                                    <i class="feather feather-more-horizontal"></i>
                                                </a>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-edit-3 me-3"></i>
                                                            <span>Edit</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item printBTN" href="javascript:void(0)">
                                                            <i class="feather feather-printer me-3"></i>
                                                            <span>Print</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-clock me-3"></i>
                                                            <span>Remind</span>
                                                        </a>
                                                    </li>
                                                    <li class="dropdown-divider"></li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-archive me-3"></i>
                                                            <span>Archive</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-alert-octagon me-3"></i>
                                                            <span>Report Spam</span>
                                                        </a>
                                                    </li>
                                                    <li class="dropdown-divider"></li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-trash-2 me-3"></i>
                                                            <span>Delete</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="single-item">
                                    <td>
                                        <div class="item-checkbox ms-1">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input checkbox" id="checkBox_5">
                                                <label class="custom-control-label" for="checkBox_5"></label>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="project-name-td">
                                        <div class="hstack gap-4">
                                            <div class="avatar-image border-0">
                                                <img src="assets/images/brand/github.png" alt="" class="img-fluid">
                                            </div>
                                            <div>
                                                <a href="projects-view.html" class="text-truncate-1-line">Odyssey: This name could work well for a project related to exploration, adventure, or discovery.</a>
                                                <p class="fs-12 text-muted mt-2 text-truncate-1-line project-list-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                                <div class="project-list-action fs-12 d-flex align-items-center gap-3 mt-2">
                                                    <a href="javascript:void(0);">Start</a>
                                                    <span class="vr text-muted"></span>
                                                    <a href="javascript:void(0);">Edit</a>
                                                    <span class="vr text-muted"></span>
                                                    <a href="javascript:void(0);" class="text-danger">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a href="projects-view.html" class="hstack gap-3">
                                            <div class="avatar-image avatar-md">
                                                <img src="assets/images/avatar/3.png" alt="" class="img-fluid">
                                            </div>
                                            <div>
                                                <span class="text-truncate-1-line">Marianne Audrey</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>2023-04-25</td>
                                    <td>2023-04-30</td>
                                    <td>
                                        <select class="form-select form-control" data-select2-selector="user">
                                            <option value="alex@outlook.com" data-user="1">alex@outlook.com</option>
                                            <option value="john.deo@outlook.com" data-user="2">john.deo@outlook.com</option>
                                            <option value="green.cutte@outlook.com" data-user="3">green.cutte@outlook.com</option>
                                            <option value="nancy.elliot@outlook.com" data-user="4">nancy.elliot@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="5">mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="6" selected>erna.serpa@outlook.com</option>
                                            <option value="green.cutte@outlook.com" data-user="7">green.cutte@outlook.com</option>
                                            <option value="nancy.elliot@outlook.com" data-user="8">nancy.elliot@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="9">mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="10">erna.serpa@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="11">mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="12">erna.serpa@outlook.com</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="form-control" data-select2-selector="status">
                                            <option value="primary" data-bg="bg-primary">In Projress</option>
                                            <option value="warning" data-bg="bg-warning">Not Started</option>
                                            <option value="success" data-bg="bg-success">On Hold</option>
                                            <option value="danger" data-bg="bg-danger">Declined</option>
                                            <option value="teal" data-bg="bg-teal" selected>Finished</option>
                                        </select>
                                    </td>
                                    <td>
                                        <div class="hstack gap-2 justify-content-end">
                                            <a href="projects-view.html" class="avatar-text avatar-md">
                                                <i class="feather feather-eye"></i>
                                            </a>
                                            <div class="dropdown">
                                                <a href="javascript:void(0)" class="avatar-text avatar-md" data-bs-toggle="dropdown" data-bs-offset="0,21">
                                                    <i class="feather feather-more-horizontal"></i>
                                                </a>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-edit-3 me-3"></i>
                                                            <span>Edit</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item printBTN" href="javascript:void(0)">
                                                            <i class="feather feather-printer me-3"></i>
                                                            <span>Print</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-clock me-3"></i>
                                                            <span>Remind</span>
                                                        </a>
                                                    </li>
                                                    <li class="dropdown-divider"></li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-archive me-3"></i>
                                                            <span>Archive</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-alert-octagon me-3"></i>
                                                            <span>Report Spam</span>
                                                        </a>
                                                    </li>
                                                    <li class="dropdown-divider"></li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-trash-2 me-3"></i>
                                                            <span>Delete</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="single-item">
                                    <td>
                                        <div class="item-checkbox ms-1">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input checkbox" id="checkBox_6">
                                                <label class="custom-control-label" for="checkBox_6"></label>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="project-name-td">
                                        <div class="hstack gap-4">
                                            <div class="avatar-image border-0">
                                                <img src="assets/images/brand/gitlab.png" alt="" class="img-fluid">
                                            </div>
                                            <div>
                                                <a href="projects-view.html" class="text-truncate-1-line">Synergy: This name could work well for a project related to collaboration or teamwork, where multiple parts come together to create a greater whole.</a>
                                                <p class="fs-12 text-muted mt-2 text-truncate-1-line project-list-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                                <div class="project-list-action fs-12 d-flex align-items-center gap-3 mt-2">
                                                    <a href="javascript:void(0);">Start</a>
                                                    <span class="vr text-muted"></span>
                                                    <a href="javascript:void(0);">Edit</a>
                                                    <span class="vr text-muted"></span>
                                                    <a href="javascript:void(0);" class="text-danger">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a href="projects-view.html" class="hstack gap-3">
                                            <div class="avatar-image avatar-md bg-warning text-white">N</div>
                                            <div>
                                                <span class="text-truncate-1-line">Nancy Elliot</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>2023-04-15</td>
                                    <td>2023-04-20</td>
                                    <td>
                                        <select class="form-select form-control" data-select2-selector="user">
                                            <option value="alex@outlook.com" data-user="1">alex@outlook.com</option>
                                            <option value="john.deo@outlook.com" data-user="2">john.deo@outlook.com</option>
                                            <option value="green.cutte@outlook.com" data-user="3">green.cutte@outlook.com</option>
                                            <option value="nancy.elliot@outlook.com" data-user="4">nancy.elliot@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="5" selected>mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="6">erna.serpa@outlook.com</option>
                                            <option value="green.cutte@outlook.com" data-user="7">green.cutte@outlook.com</option>
                                            <option value="nancy.elliot@outlook.com" data-user="8">nancy.elliot@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="9">mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="10">erna.serpa@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="11">mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="12">erna.serpa@outlook.com</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="form-control" data-select2-selector="status">
                                            <option value="primary" data-bg="bg-primary" selected>In Projress</option>
                                            <option value="warning" data-bg="bg-warning">Not Started</option>
                                            <option value="success" data-bg="bg-success">On Hold</option>
                                            <option value="danger" data-bg="bg-danger">Declined</option>
                                            <option value="teal" data-bg="bg-teal">Finished</option>
                                        </select>
                                    </td>
                                    <td>
                                        <div class="hstack gap-2 justify-content-end">
                                            <a href="projects-view.html" class="avatar-text avatar-md">
                                                <i class="feather feather-eye"></i>
                                            </a>
                                            <div class="dropdown">
                                                <a href="javascript:void(0)" class="avatar-text avatar-md" data-bs-toggle="dropdown" data-bs-offset="0,21">
                                                    <i class="feather feather-more-horizontal"></i>
                                                </a>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-edit-3 me-3"></i>
                                                            <span>Edit</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item printBTN" href="javascript:void(0)">
                                                            <i class="feather feather-printer me-3"></i>
                                                            <span>Print</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-clock me-3"></i>
                                                            <span>Remind</span>
                                                        </a>
                                                    </li>
                                                    <li class="dropdown-divider"></li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-archive me-3"></i>
                                                            <span>Archive</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-alert-octagon me-3"></i>
                                                            <span>Report Spam</span>
                                                        </a>
                                                    </li>
                                                    <li class="dropdown-divider"></li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-trash-2 me-3"></i>
                                                            <span>Delete</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="single-item">
                                    <td>
                                        <div class="item-checkbox ms-1">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input checkbox" id="checkBox_7">
                                                <label class="custom-control-label" for="checkBox_7"></label>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="project-name-td">
                                        <div class="hstack gap-4">
                                            <div class="avatar-image border-0">
                                                <img src="assets/images/brand/gmail.png" alt="" class="img-fluid">
                                            </div>
                                            <div>
                                                <a href="projects-view.html" class="text-truncate-1-line">Zenith: This name could work well for a project related to achieving the highest point or peak of success.</a>
                                                <p class="fs-12 text-muted mt-2 text-truncate-1-line project-list-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                                <div class="project-list-action fs-12 d-flex align-items-center gap-3 mt-2">
                                                    <a href="javascript:void(0);">Start</a>
                                                    <span class="vr text-muted"></span>
                                                    <a href="javascript:void(0);">Edit</a>
                                                    <span class="vr text-muted"></span>
                                                    <a href="javascript:void(0);" class="text-danger">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a href="projects-view.html" class="hstack gap-3">
                                            <div class="avatar-image avatar-md">
                                                <img src="assets/images/avatar/4.png" alt="" class="img-fluid">
                                            </div>
                                            <div>
                                                <span class="text-truncate-1-line">Cute Green</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>2023-04-07</td>
                                    <td>2023-04-12</td>
                                    <td>
                                        <select class="form-select form-control" data-select2-selector="user">
                                            <option value="alex@outlook.com" data-user="1">alex@outlook.com</option>
                                            <option value="john.deo@outlook.com" data-user="2">john.deo@outlook.com</option>
                                            <option value="green.cutte@outlook.com" data-user="3">green.cutte@outlook.com</option>
                                            <option value="nancy.elliot@outlook.com" data-user="4" selected>nancy.elliot@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="5">mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="6">erna.serpa@outlook.com</option>
                                            <option value="green.cutte@outlook.com" data-user="7">green.cutte@outlook.com</option>
                                            <option value="nancy.elliot@outlook.com" data-user="8">nancy.elliot@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="9">mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="10">erna.serpa@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="11">mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="12">erna.serpa@outlook.com</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="form-control" data-select2-selector="status">
                                            <option value="primary" data-bg="bg-primary">In Projress</option>
                                            <option value="warning" data-bg="bg-warning" selected>Not Started</option>
                                            <option value="success" data-bg="bg-success">On Hold</option>
                                            <option value="danger" data-bg="bg-danger">Declined</option>
                                            <option value="teal" data-bg="bg-teal">Finished</option>
                                        </select>
                                    </td>
                                    <td>
                                        <div class="hstack gap-2 justify-content-end">
                                            <a href="projects-view.html" class="avatar-text avatar-md">
                                                <i class="feather feather-eye"></i>
                                            </a>
                                            <div class="dropdown">
                                                <a href="javascript:void(0)" class="avatar-text avatar-md" data-bs-toggle="dropdown" data-bs-offset="0,21">
                                                    <i class="feather feather-more-horizontal"></i>
                                                </a>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-edit-3 me-3"></i>
                                                            <span>Edit</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item printBTN" href="javascript:void(0)">
                                                            <i class="feather feather-printer me-3"></i>
                                                            <span>Print</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-clock me-3"></i>
                                                            <span>Remind</span>
                                                        </a>
                                                    </li>
                                                    <li class="dropdown-divider"></li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-archive me-3"></i>
                                                            <span>Archive</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-alert-octagon me-3"></i>
                                                            <span>Report Spam</span>
                                                        </a>
                                                    </li>
                                                    <li class="dropdown-divider"></li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-trash-2 me-3"></i>
                                                            <span>Delete</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="single-item">
                                    <td>
                                        <div class="item-checkbox ms-1">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input checkbox" id="checkBox_8">
                                                <label class="custom-control-label" for="checkBox_8"></label>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="project-name-td">
                                        <div class="hstack gap-4">
                                            <div class="avatar-image border-0">
                                                <img src="assets/images/brand/google-drive.png" alt="" class="img-fluid">
                                            </div>
                                            <div>
                                                <a href="projects-view.html" class="text-truncate-1-line">Zenith: This name could work well for a project related to achieving the highest point or peak of success.</a>
                                                <p class="fs-12 text-muted mt-2 text-truncate-1-line project-list-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                                <div class="project-list-action fs-12 d-flex align-items-center gap-3 mt-2">
                                                    <a href="javascript:void(0);">Start</a>
                                                    <span class="vr text-muted"></span>
                                                    <a href="javascript:void(0);">Edit</a>
                                                    <span class="vr text-muted"></span>
                                                    <a href="javascript:void(0);" class="text-danger">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a href="projects-view.html" class="hstack gap-3">
                                            <div class="avatar-image avatar-md bg-success text-white">H</div>
                                            <div>
                                                <span class="text-truncate-1-line">Leach Henry</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>2023-04-06</td>
                                    <td>2023-04-08</td>
                                    <td>
                                        <select class="form-select form-control" data-select2-selector="user">
                                            <option value="alex@outlook.com" data-user="1">alex@outlook.com</option>
                                            <option value="john.deo@outlook.com" data-user="2">john.deo@outlook.com</option>
                                            <option value="green.cutte@outlook.com" data-user="3" selected>green.cutte@outlook.com</option>
                                            <option value="nancy.elliot@outlook.com" data-user="4">nancy.elliot@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="5">mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="6">erna.serpa@outlook.com</option>
                                            <option value="green.cutte@outlook.com" data-user="7">green.cutte@outlook.com</option>
                                            <option value="nancy.elliot@outlook.com" data-user="8">nancy.elliot@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="9">mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="10">erna.serpa@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="11">mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="12">erna.serpa@outlook.com</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="form-control" data-select2-selector="status">
                                            <option value="primary" data-bg="bg-primary">In Projress</option>
                                            <option value="warning" data-bg="bg-warning">Not Started</option>
                                            <option value="success" data-bg="bg-success" selected>On Hold</option>
                                            <option value="danger" data-bg="bg-danger">Declined</option>
                                            <option value="teal" data-bg="bg-teal">Finished</option>
                                        </select>
                                    </td>
                                    <td>
                                        <div class="hstack gap-2 justify-content-end">
                                            <a href="projects-view.html" class="avatar-text avatar-md">
                                                <i class="feather feather-eye"></i>
                                            </a>
                                            <div class="dropdown">
                                                <a href="javascript:void(0)" class="avatar-text avatar-md" data-bs-toggle="dropdown" data-bs-offset="0,21">
                                                    <i class="feather feather-more-horizontal"></i>
                                                </a>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-edit-3 me-3"></i>
                                                            <span>Edit</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item printBTN" href="javascript:void(0)">
                                                            <i class="feather feather-printer me-3"></i>
                                                            <span>Print</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-clock me-3"></i>
                                                            <span>Remind</span>
                                                        </a>
                                                    </li>
                                                    <li class="dropdown-divider"></li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-archive me-3"></i>
                                                            <span>Archive</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-alert-octagon me-3"></i>
                                                            <span>Report Spam</span>
                                                        </a>
                                                    </li>
                                                    <li class="dropdown-divider"></li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-trash-2 me-3"></i>
                                                            <span>Delete</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="single-item">
                                    <td>
                                        <div class="item-checkbox ms-1">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input checkbox" id="checkBox_9">
                                                <label class="custom-control-label" for="checkBox_9"></label>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="project-name-td">
                                        <div class="hstack gap-4">
                                            <div class="avatar-image border-0">
                                                <img src="assets/images/brand/instagram.png" alt="" class="img-fluid">
                                            </div>
                                            <div>
                                                <a href="projects-view.html" class="text-truncate-1-line">Momentum: This name could work well for a project related to maintaining forward motion and progress.</a>
                                                <p class="fs-12 text-muted mt-2 text-truncate-1-line project-list-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                                <div class="project-list-action fs-12 d-flex align-items-center gap-3 mt-2">
                                                    <a href="javascript:void(0);">Start</a>
                                                    <span class="vr text-muted"></span>
                                                    <a href="javascript:void(0);">Edit</a>
                                                    <span class="vr text-muted"></span>
                                                    <a href="javascript:void(0);" class="text-danger">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a href="projects-view.html" class="hstack gap-3">
                                            <div class="avatar-image avatar-md">
                                                <img src="assets/images/avatar/5.png" alt="" class="img-fluid">
                                            </div>
                                            <div>
                                                <span class="text-truncate-1-line">Audrey Marianne</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>2023-04-15</td>
                                    <td>2023-04-25</td>
                                    <td>
                                        <select class="form-select form-control" data-select2-selector="user">
                                            <option value="alex@outlook.com" data-user="1">alex@outlook.com</option>
                                            <option value="john.deo@outlook.com" data-user="2" selected>john.deo@outlook.com</option>
                                            <option value="green.cutte@outlook.com" data-user="3">green.cutte@outlook.com</option>
                                            <option value="nancy.elliot@outlook.com" data-user="4">nancy.elliot@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="5">mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="6">erna.serpa@outlook.com</option>
                                            <option value="green.cutte@outlook.com" data-user="7">green.cutte@outlook.com</option>
                                            <option value="nancy.elliot@outlook.com" data-user="8">nancy.elliot@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="9">mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="10">erna.serpa@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="11">mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="12">erna.serpa@outlook.com</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="form-control" data-select2-selector="status">
                                            <option value="primary" data-bg="bg-primary">In Projress</option>
                                            <option value="warning" data-bg="bg-warning">Not Started</option>
                                            <option value="success" data-bg="bg-success">On Hold</option>
                                            <option value="danger" data-bg="bg-danger" selected>Declined</option>
                                            <option value="teal" data-bg="bg-teal">Finished</option>
                                        </select>
                                    </td>
                                    <td>
                                        <div class="hstack gap-2 justify-content-end">
                                            <a href="projects-view.html" class="avatar-text avatar-md">
                                                <i class="feather feather-eye"></i>
                                            </a>
                                            <div class="dropdown">
                                                <a href="javascript:void(0)" class="avatar-text avatar-md" data-bs-toggle="dropdown" data-bs-offset="0,21">
                                                    <i class="feather feather-more-horizontal"></i>
                                                </a>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-edit-3 me-3"></i>
                                                            <span>Edit</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item printBTN" href="javascript:void(0)">
                                                            <i class="feather feather-printer me-3"></i>
                                                            <span>Print</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-clock me-3"></i>
                                                            <span>Remind</span>
                                                        </a>
                                                    </li>
                                                    <li class="dropdown-divider"></li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-archive me-3"></i>
                                                            <span>Archive</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-alert-octagon me-3"></i>
                                                            <span>Report Spam</span>
                                                        </a>
                                                    </li>
                                                    <li class="dropdown-divider"></li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-trash-2 me-3"></i>
                                                            <span>Delete</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="single-item">
                                    <td>
                                        <div class="item-checkbox ms-1">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input checkbox" id="checkBox_10">
                                                <label class="custom-control-label" for="checkBox_10"></label>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="project-name-td">
                                        <div class="hstack gap-4">
                                            <div class="avatar-image border-0">
                                                <img src="assets/images/brand/paypal.png" alt="" class="img-fluid">
                                            </div>
                                            <div>
                                                <a href="projects-view.html" class="text-truncate-1-line">Horizon: This name could work well for a project related to exploring new frontiers or expanding into new areas.</a>
                                                <p class="fs-12 text-muted mt-2 text-truncate-1-line project-list-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                                <div class="project-list-action fs-12 d-flex align-items-center gap-3 mt-2">
                                                    <a href="javascript:void(0);">Start</a>
                                                    <span class="vr text-muted"></span>
                                                    <a href="javascript:void(0);">Edit</a>
                                                    <span class="vr text-muted"></span>
                                                    <a href="javascript:void(0);" class="text-danger">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a href="projects-view.html" class="hstack gap-3">
                                            <div class="avatar-image avatar-md bg-primary text-white">E</div>
                                            <div>
                                                <span class="text-truncate-1-line">Elliot Nancy</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>2023-05-01</td>
                                    <td>2023-05-03</td>
                                    <td>
                                        <select class="form-select form-control" data-select2-selector="user">
                                            <option value="alex@outlook.com" data-user="1" selected>alex@outlook.com</option>
                                            <option value="john.deo@outlook.com" data-user="2">john.deo@outlook.com</option>
                                            <option value="green.cutte@outlook.com" data-user="3">green.cutte@outlook.com</option>
                                            <option value="nancy.elliot@outlook.com" data-user="4">nancy.elliot@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="5">mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="6">erna.serpa@outlook.com</option>
                                            <option value="green.cutte@outlook.com" data-user="7">green.cutte@outlook.com</option>
                                            <option value="nancy.elliot@outlook.com" data-user="8">nancy.elliot@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="9">mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="10">erna.serpa@outlook.com</option>
                                            <option value="mar.audrey@gmail.com" data-user="11">mar.audrey@gmail.com</option>
                                            <option value="erna.serpa@outlook.com" data-user="12">erna.serpa@outlook.com</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="form-control" data-select2-selector="status">
                                            <option value="primary" data-bg="bg-primary">In Projress</option>
                                            <option value="warning" data-bg="bg-warning">Not Started</option>
                                            <option value="success" data-bg="bg-success">On Hold</option>
                                            <option value="danger" data-bg="bg-danger">Declined</option>
                                            <option value="teal" data-bg="bg-teal" selected>Finished</option>
                                        </select>
                                    </td>
                                    <td>
                                        <div class="hstack gap-2 justify-content-end">
                                            <a href="projects-view.html" class="avatar-text avatar-md">
                                                <i class="feather feather-eye"></i>
                                            </a>
                                            <div class="dropdown">
                                                <a href="javascript:void(0)" class="avatar-text avatar-md" data-bs-toggle="dropdown" data-bs-offset="0,21">
                                                    <i class="feather feather-more-horizontal"></i>
                                                </a>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-edit-3 me-3"></i>
                                                            <span>Edit</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item printBTN" href="javascript:void(0)">
                                                            <i class="feather feather-printer me-3"></i>
                                                            <span>Print</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-clock me-3"></i>
                                                            <span>Remind</span>
                                                        </a>
                                                    </li>
                                                    <li class="dropdown-divider"></li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-archive me-3"></i>
                                                            <span>Archive</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-alert-octagon me-3"></i>
                                                            <span>Report Spam</span>
                                                        </a>
                                                    </li>
                                                    <li class="dropdown-divider"></li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:void(0)">
                                                            <i class="feather feather-trash-2 me-3"></i><span>Delete</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- [ Main Content ] end -->
@endsection