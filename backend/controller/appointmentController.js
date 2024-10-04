import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { Appointment } from "../models/appointmentSchema.js";
import { User } from "../models/userSchema.js";

export const postAppointment = catchAsyncErrors(async (req, res, next) => {
    const {
        firstName,
        lastName,
        email,
        phone,
        NIC,
        dob,
        gender,
        appointment_date,
        department,
        doctor_firstName,
        doctor_lastName,
        hasVisited,
        address
    } = req.body;
    if (
        !firstName ||
        !lastName ||
        !email ||
        !phone ||
        !NIC ||
        !dob ||
        !gender ||
        !appointment_date ||
        !department ||
        !doctor_firstName ||
        !doctor_lastName ||
        //!hasVisited ||
        !address
    ) {
        return next(new ErrorHandler("⚠️ Input breach detected: Mandatory fields missing. Complete the data injection to proceed.", 400));
    }
    const isConflict = await User.find({
        firstName: doctor_firstName,
        lastName: doctor_lastName,
        role: "Doctor",
        doctorDepartment: department,
    })
    if (isConflict.length === 0) {
        return next(new ErrorHandler("⚠️ SYSTEM FAILURE: Doctor's Identity Matrix Not Found. Please Re-initialize Search(NOT FOUND)", 404));
    }
    if (isConflict.length > 1) {
        return next(new ErrorHandler("⚠️ SYSTEM CRASH: Doctor's Appointment Array Overwritten. Multiple Conflicts Detected. Debug via Email or Phone.", 409));
    }
    const doctorId = isConflict[0]._id;
    const patientId = req.user._id;
    const appointment = await Appointment.create({
        patientId,
        doctorId,
        firstName,
        lastName,
        email,
        phone,
        NIC,
        dob,
        gender,
        appointment_date,
        department,
        doctor: {
            firstName: doctor_firstName,
            lastName: doctor_lastName
        },
        hasVisited,
        address,
        //status: "Pending"
    });
    res.status(201).json({
        success: true,
        message: "✅ CODE EXECUTED: Appointment Protocol Engaged. Success Confirmed.(SENT)",
        appointment
    });
});

export const getAllAppointments = catchAsyncErrors(async (req, res, next) => {
    const appointments = await Appointment.find();
    res.status(200).json({
        success: true,
        appointments
    });
});

export const updateAppointmentStatus = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;
    let appointment = await Appointment.findById(id);
    if (!appointment) {
        return next(new ErrorHandler("⚠️ ENTITY NOT DETECTED: Appointment Not Located(NOT FOUND)", 404));
    }
    appointment = await Appointment.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });
    res.status(200).json({
        success: true,
        message: "🔄🆕 UPDATE SUCCESSFUL: Appointment Status Modified. New Status Synced(UPDATED)",
        appointment
    });
});

export const deleteAppointment = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;
    let appointment = await Appointment.findById(id);
    if (!appointment) {
        return next(new ErrorHandler("✖️✖️ ENTITY NOT FOUND: Appointment Not Located(NOT FOUND)", 404));
    }
    await appointment.deleteOne();
    res.status(200).json({
        success: true,
        message: "🚮 DELETE SUCCESSFUL: Appointment Permanently Removed. Data Completely Discarded(DELETED)",
        appointment
    });
});