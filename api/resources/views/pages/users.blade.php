@extends('layouts.app')
@section('title', 'Users')
@section('page-title', 'Users')
@section('section-title', 'Students')


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
            <a href={{ route('student.create') }} class="btn btn-primary">
                <i class="feather-plus me-2"></i>
                <span>Create Student</span>
            </a>
        </div>
    </div>
</div>
@endsection

@section('content')
<div class="accordion-body pb-2 bg-white ">
    {{-- Student Stats --}}
    <div class="row mx-2">
        <div class="col-xxl-3 col-md-6">
            <div class="card stretch stretch-full">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center gap-3">
                            <div class="avatar-text avatar-xl rounded">
                                <i class="feather-users"></i>
                            </div>
                            <a href="javascript:void(0);" class="fw-bold d-block">
                                <span class="text-truncate-1-line">Total Customers</span>
                                <span class="fs-24 fw-bolder d-block">26,595</span>
                            </a>
                        </div>
                        <div class="badge bg-soft-success text-success">
                            <i class="feather-arrow-up fs-10 me-1"></i>
                            <span>36.85%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-md-6">
            <div class="card stretch stretch-full">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center gap-3">
                            <div class="avatar-text avatar-xl rounded">
                                <i class="feather-user-check"></i>
                            </div>
                            <a href="javascript:void(0);" class="fw-bold d-block">
                                <span class="text-truncate-1-line">Active Customers</span>
                                <span class="fs-24 fw-bolder d-block">2,245</span>
                            </a>
                        </div>
                        <div class="badge bg-soft-danger text-danger">
                            <i class="feather-arrow-down fs-10 me-1"></i>
                            <span>24.56%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-md-6">
            <div class="card stretch stretch-full">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center gap-3">
                            <div class="avatar-text avatar-xl rounded">
                                <i class="feather-user-plus"></i>
                            </div>
                            <a href="javascript:void(0);" class="fw-bold d-block">
                                <span class="text-truncate-1-line">New Customers</span>
                                <span class="fs-24 fw-bolder d-block">1,254</span>
                            </a>
                        </div>
                        <div class="badge bg-soft-success text-success">
                            <i class="feather-arrow-up fs-10 me-1"></i>
                            <span>33.29%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-md-6">
            <div class="card stretch stretch-full">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center gap-3">
                            <div class="avatar-text avatar-xl rounded">
                                <i class="feather-user-minus"></i>
                            </div>
                            <a href="javascript:void(0);" class="fw-bold d-block">
                                <span class="text-truncate-1-line">Inactive Customers</span>
                                <span class="fs-24 fw-bolder d-block">4,586</span>
                            </a>
                        </div>
                        <div class="badge bg-soft-danger text-danger">
                            <i class="feather-arrow-down fs-10 me-1"></i>
                            <span>42.47%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="main-content">
    <div class="row">
        <div class="col-lg-12">
            <div class="card stretch stretch-full">
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table table-hover" id="customerList">
                            <thead>
                                <tr>
                                    <th>Students</th>
                                    <th>Email</th>
                                    <th>Roll No</th>
                                    <th>Reg. Date</th>
                                    <th>Department</th>
                                    <th>Status</th>
                                    <th class="text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($users as $user)
                                    <tr class="single-item">
                                    <td>
                                        <a href="customers-view.html" class="hstack gap-3">
                                            <div class="avatar-image avatar-md">
                                                <img src={{$user->avatar}} alt="Student Profile Picture" class="img-fluid">
                                            </div>
                                            <div>
                                                <span class="text-truncate-1-line">{{$user->profile->full_name ?? "Mr. Student"}}</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>{{$user->email}}</td>
                                    <td>{{ $user->roll_number }}</td>
                                    <td>{{ $user->registration_date->format('d M Y') }}</td>
                                    <td>{{$user->student_info['department']}}</td>
                                    <td>
                                        <select class="form-control" data-select2-selector="status">
                                            <option value="active"
                                                data-bg="bg-success"
                                                {{ $user->status === 'active' ? 'selected' : '' }}>
                                                Active
                                            </option>

                                            <option value="inactive"
                                                data-bg="bg-warning"
                                                {{ $user->status === 'inactive' ? 'selected' : '' }}>
                                                Inactive
                                            </option>

                                            <option value="banned"
                                                data-bg="bg-danger"
                                                {{ $user->status === 'banned' ? 'selected' : '' }}>
                                                Banned
                                            </option>
                                        </select>
                                    </td>
                                    <td>
                                        <div class="hstack gap-2 justify-content-end">
                                            <a href={{route('users.view')}} class="avatar-text avatar-md">
                                                <i class="feather feather-eye"></i>
                                            </a>
                                            <a href={{route('users.view')}} class="avatar-text avatar-md">
                                                <i class="feather feather-edit-3"></i>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                @endforeach
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
