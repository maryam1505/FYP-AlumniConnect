@extends('layouts.app')
@section('title', 'Student Create')
@section('page-title', 'Users')
@section('section-title', 'Create Student')

@section('style')
    <style>
        .is-invalid {
            border: 1px solid red !important;
        }
    </style>
@endsection

@section("content")
<div class="main-content">
    <div class="row">
        <div class="col-lg-12">
            <div class="card border-top-0">
                <div class="card-header p-0">
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs flex-wrap w-100 text-center customers-nav-tabs" id="myTab" role="tablist">
                        <!-- Profile Tab -->
                        <li class="nav-item flex-fill border-top" role="presentation">
                            <a href="javascript:void(0);" class="nav-link active" data-bs-toggle="tab" data-bs-target="#profileTab" role="tab" id="profile-info">Profile</a>
                        </li>
                        <!-- Academic Tab -->
                        <li class="nav-item flex-fill border-top" role="presentation">
                            <a href="javascript:void(0);" class="nav-link disabled" data-bs-toggle="tab" data-bs-target="#academicTab" role="tab" tabindex="-1" id="academic-info">Academic Info</a>
                        </li>
                        <!-- Password Tab -->
                        <li class="nav-item flex-fill border-top" role="presentation">
                            <a href="javascript:void(0);" class="nav-link disabled" data-bs-toggle="tab" data-bs-target="#passwordTab" role="tab" tabindex="-1" id="create-password">Create Password</a>
                        </li> 
                    </ul>
                </div>
                {{-- Error Handling --}}
                @if ($errors->any())
                    <div class="alert alert-danger">
                        <ul class="mb-0">
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif

                @if (session('error'))
                    <div class="alert alert-danger">{{ session('error') }}</div>
                @endif

                @if (session('success'))
                    <div class="alert alert-success">{{ session('success') }}</div>
                @endif
                <form method="POST" action="{{ route('student.store') }}">
                    @csrf
                    <div class="tab-content">
                        <!-- Profile Details -->
                        <div class="tab-pane fade show active" id="profileTab" role="tabpanel">
                            <div class="card-body personal-info">
                                <div class="mb-4 d-flex align-items-center justify-content-between">
                                    <h5 class="fw-bold mb-0 me-4">
                                        <span class="d-block mb-2">Personal Information:</span>
                                        <span class="fs-12 fw-normal text-muted text-truncate-1-line">Following information is required to create a student profile! </span>
                                    </h5>
                                </div>
                                <!-- Name -->
                                <div class="row mb-4 align-items-center">
                                    <div class="col-lg-4">
                                        <label for="fullnameInput" class="fw-semibold">Name: </label>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="input-group">
                                            <div class="input-group-text"><i class="feather-user"></i></div>
                                            <input type="text" class="form-control" name="full_name" id="fullnameInput" placeholder="Name" required>
                                        </div>
                                    </div>
                                </div>
                                <!-- Email -->
                                <div class="row mb-4 align-items-center">
                                    <div class="col-lg-4">
                                        <label for="mailInput" class="fw-semibold">Email: </label>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="input-group">
                                            <div class="input-group-text"><i class="feather-mail"></i></div>
                                            <input type="email" class="form-control" name="email" id="mailInput" placeholder="Email" required>
                                        </div>
                                    </div>
                                </div>
                                <!-- Username -->
                                <div class="row mb-4 align-items-center">
                                    <div class="col-lg-4">
                                        <label for="usernameInput" class="fw-semibold">Username: </label>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="input-group">
                                            <div class="input-group-text"><i class="feather-link-2"></i></div>
                                            <div class="input-group-text">https://alumniconnect.ue.edu.pk/</div>
                                            <input type="text" class="form-control" name="username" id="usernameInput" placeholder="Username" required>
                                        </div>
                                    </div>
                                </div>
                                <!-- Gender -->
                                <div class="row mb-4 align-items-center">
                                    <div class="col-lg-4">
                                        <label class="fw-semibold">Gender </label>
                                    </div>
                                    <div class="col-lg-8">
                                        <select class="form-control" name="gender" data-select2-selector="city" required>
                                            <option data-city="bg-primary" value="male" selected>Male</option>
                                            <option data-city="bg-success" value="female">Female</option>
                                            <option data-city="bg-secondary" value="other">Other</option>
                                            <option data-city="bg-danger" value="prefer not to say">Prefer not to say</option>
                                        </select>
                                    </div>
                                </div>
                                <!-- Phone No -->
                                <div class="row mb-4 align-items-center">
                                    <div class="col-lg-4">
                                        <label for="phoneInput" class="fw-semibold">Phone: </label>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="input-group">
                                            <div class="input-group-text"><i class="feather-phone"></i></div>
                                            <input type="phone" class="form-control" name="phone" id="phoneInput" placeholder="Phone" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-4 align-items-center">
                                    <div class="col-lg-4">
                                        <label for="companyInput" class="fw-semibold">CNIC: </label>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="input-group">
                                            <div class="input-group-text"><i class="feather-book"></i></div>
                                            <input type="cnic" class="form-control" name="cnic" id="companyInput" placeholder="Student CNIC" required>
                                        </div>
                                    </div>
                                </div>
                                <!-- Address -->
                                <div class="row mb-4 align-items-center">
                                    <div class="col-lg-4">
                                        <label for="addressInput_2" class="fw-semibold">Address: </label>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="input-group">
                                            <div class="input-group-text"><i class="feather-map-pin"></i></div>
                                            <textarea class="form-control" required name="address" id="addressInput_2" cols="30" rows="3" placeholder="Address"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <!-- DOB -->
                                <div class="row mb-4 align-items-center">
                                    <div class="col-lg-4">
                                        <label for="dateofBirth" class="fw-semibold">Date of Birth: </label>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="input-group">
                                            <div class="input-group-text"><i class="feather-calendar"></i></div>
                                            <input type="date" name="dob" class="form-control" id="dateofBirth" placeholder="Pick date of birth" required>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <div class="text-end">
                                    <button type="button" class="btn btn-secondary d-inline-block" id="toAcademic"> Save & Next </button>
                                </div>
                            </div>
                        </div>
                        <!-- Academic Details -->
                        <div class="tab-pane fade" id="academicTab" role="tabpanel">
                            <div class="card-body pass-info">
                                <div class="mb-4 d-flex align-items-center justify-content-between">
                                    <h5 class="fw-bold mb-0 me-4">
                                        <span class="d-block mb-2">Academic Information:</span>
                                        <span class="fs-12 fw-normal text-muted text-truncate-1-line">Academic Information explains student current status.</span>
                                    </h5>
                                </div>
                                <!-- Roll_number -->
                                <div class="row mb-4 align-items-center">
                                    <div class="col-lg-4">
                                        <label for="fullnameInput" class="fw-semibold">Roll Number </label>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="input-group">
                                            <div class="input-group-text"><i class="feather-user"></i></div>
                                            <input type="text" class="form-control" name="roll_number" id="fullnameInput" placeholder="Roll Number" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-4 align-items-center">
                                    <div class="col-lg-4">
                                        <label class="fw-semibold">Department: </label>
                                    </div>
                                    <div class="col-lg-8">
                                        <select class="form-control" name="department_id" id="department_id" data-select2-selector="city">
                                            <option data-city="bg-teal" value="" selected disabled>Select Department</option>
                                            @foreach($departments as $department)
                                                <option value="{{ $department->_id }}">{{ $department->name }}</option>
                                            @endforeach
                                            
                                        </select>
                                    </div>
                                </div>
                                <div class="row mb-4 align-items-center">
                                    <div class="col-lg-4">
                                        <label class="fw-semibold">Program: </label>
                                    </div>
                                    <div class="col-lg-8">
                                        <select class="form-control" name="program_id" id="program_id" disabled data-select2-selector="city">
                                            <option value="" data-city="bg-primary" selected disabled >Select Program</option>
                                            @foreach($programs as $program)
                                                <option value="{{ $program->_id }}" data-department="{{ $program->department_id }}">
                                                    {{ $program->name }}
                                                </option>
                                            @endforeach
                                            
                                        </select>
                                    </div>
                                </div>
                                <div class="row mb-4 align-items-center">
                                    <div class="col-lg-4">
                                        <label class="fw-semibold">Campus: </label>
                                    </div>
                                    <div class="col-lg-8">
                                        <select class="form-control" name="campus_id" id="campus_id" data-select2-selector="city">
                                            <option data-city="bg-red" value="" selected disabled>Select Campus</option>
                                            @foreach($campuses as $campus)
                                                <option value="{{ $campus->_id }}">{{ $campus->name }}</option>
                                            @endforeach
                                            
                                        </select>
                                    </div>
                                </div>
                                <div class="row mb-4 align-items-center">
                                    <div class="col-lg-4">
                                        <label class="fw-semibold">Shift: </label>
                                    </div>
                                    <div class="col-lg-8">
                                        <select class="form-control" name="shift" id="shift_id" data-select2-selector="city">
                                            <option data-city="bg-secondary" value="" selected disabled>Select Shift</option>
                                            <option value="M">Morning</option>
                                            <option value="E">Evening</option>
                                            
                                        </select>
                                    </div>
                                </div>
                                <div class="row mb-4 align-items-center">
                                    <div class="col-lg-4">
                                        <label class="fw-semibold">Batch: </label>
                                    </div>
                                    <div class="col-lg-8">
                                        <select class="form-control" name="batch_id" id="batch_id" data-select2-selector="city">
                                            <option data-city="bg-teal" value="" selected disabled>Select Batch</option>
                                            @foreach($batches as $batch)
                                                <option value="{{ $batch->_id }}">{{ $batch->year }}</option>
                                            @endforeach
                                            
                                        </select>
                                    </div>
                                </div>
                                <div class="row mb-4 align-items-center">
                                    <div class="col-lg-4">
                                        <label class="fw-semibold">Session: </label>
                                    </div>
                                    <div class="col-lg-8">
                                        <select class="form-control" name="session" id="session_id" data-select2-selector="city">
                                            <option data-city="bg-teal" value="" selected disabled>Select Batch Session</option>
                                            <option value="Fall">Fall</option>
                                            <option value="Spring">Spring</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row mb-4 align-items-center">
                                    <div class="col-lg-4">
                                        <label class="fw-semibold">Semester: </label>
                                    </div>
                                    <div class="col-lg-8">
                                        <select class="form-control" name="semester" id="semester_id" data-select2-selector="city">
                                            <option data-city="bg-warning" value="" selected disabled>Select Current Semester</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                        </select>
                                    </div>
                                </div>
                            <div class="text-end">
                                <button type="button" class="btn btn-secondary d-inline-block" id="toPassword"> Save & Next </button>
                            </div>
                        </div>
                            
                        </div>
                        <!-- Create Password -->
                        <div class="tab-pane fade" id="passwordTab" role="tabpanel">
                            <div class="card-body pass-info">
                                <div class="mb-4 d-flex align-items-center justify-content-between">
                                    <h5 class="fw-bold mb-0 me-4">
                                        <span class="d-block mb-2">Password Information:</span>
                                        <span class="fs-12 fw-normal text-muted text-truncate-1-line">You can only change your password twice within 24 hours! </span>
                                    </h5>
                                </div>
                                <div class="row mb-4 align-items-center">
                                    <div class="col-lg-4">
                                        <label for="Input" class="fw-semibold">Password: </label>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="input-group">
                                            <div class="input-group-text"><i class="feather-key"></i></div>
                                            <input type="password" name="password" class="form-control" id="Input" placeholder="Password">
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-4 align-items-center">
                                    <div class="col-lg-4">
                                        <label for="Input" class="fw-semibold">Password Confirm: </label>
                                    </div>
                                    <div class="col-lg-8 generate-pass">
                                        <div class="input-group field">
                                            <div class="input-group-text"><i class="feather-key"></i></div>
                                            <input type="password" name="password_confirmation" class="form-control password" id="newPassword" placeholder="Password Confirm">
                                            <div class="input-group-text c-pointer gen-pass"><i class="feather-hash"></i></div>
                                            <div class="input-group-text border-start bg-gray-2 c-pointer show-pass"><i></i></div>
                                        </div>
                                        <div class="progress-bar mt-2">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="pass-hint">
                                    <p class="fw-bold">Password Requirements:</p>
                                    <ul class="fs-12 ps-1 ms-2 text-muted">
                                        <li class="mb-1">At least one lowercase character</li>
                                        <li class="mb-1">Minimum 8 characters long - the more, the better</li>
                                        <li>At least one number, symbol, or whitespace character</li>
                                    </ul>
                                </div>
                                <div class="text-end">
                                    <button type="submit" class="btn-primary btn d-inline-block"> Create Student</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection

@section('script')

<script>
        
$(document).ready(function () {

    function validateTab(tabId) {
        let isValid = true;

        $(tabId).find('input, select, textarea').each(function () {

            if ($(this).prop('disabled')) return;

            if ($(this).prop('required') && !$(this).val()) {
                isValid = false;

                $(this).addClass('is-invalid');

            } else {
                $(this).removeClass('is-invalid');
            }

        });

        return isValid;
    }

    // Profile → Academic
    $('#toAcademic').on('click', function () {

        if (!validateTab('#profileTab')) {
            alert('Please fill all required fields in Personal Info');
            return;
        }

        let $academicTab = $('#academic-info');

        $academicTab.removeClass('disabled').removeAttr('tabindex');

        new bootstrap.Tab($academicTab[0]).show();
    });

    // Academic → Password
    $('#toPassword').on('click', function () {

        if (!validateTab('#academicTab')) {
            alert('Please fill all required fields in Academic Info');
            return;
        }

        let $passwordTab = $('#create-password');

        $passwordTab.removeClass('disabled').removeAttr('tabindex');

        new bootstrap.Tab($passwordTab[0]).show();
    });

});
    

/* Dynamic programs based on department */
$(document).ready(function () {

    const $dept = $('#department_id');
    const $program = $('#program_id');

    const allPrograms = $program.find('option').clone();

    $dept.on('change', function () {

        const selectedDept = $(this).val();

        if (!selectedDept) return;

        $program.prop('disabled', false);

        $program.empty();
        $program.append('<option value="" data-city="bg-primary" disabled selected>Select Program</option>');

        allPrograms.each(function () {
            const dept = $(this).data('department');

            if (String(dept) === String(selectedDept)) {
                $program.append($(this));
            }
        });

        $program.val(null).trigger('change');
    });

});

</script>
@endsection