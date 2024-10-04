import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { User } from "../models/userSchema.js";
import { generateToken } from "../utils/jwtToken.js";
import  generateOTP from "../utils/generateOtp.js";
import sendEmail from "../utils/sendEmail.js"; // Import sendEmail function


export const patientRegister = catchAsyncErrors(async (req, res, next) => {
    // code for patient register goes here
    const {
        firstName,
        lastName,
        email,
        phone,
        password,
        gender,
        dob,
        NIC,
        role
    } = req.body;
    if (
        !firstName ||
        !lastName ||
        !email ||
        !phone ||
        !password ||
        !gender ||
        !dob ||
        !NIC ||
        !role
    ) {
        return next(new ErrorHandler("All fields are required", 400));
    }
    let user = await User.findOne({ email });
    if (user) {
        return next(new ErrorHandler("Email already exists", 400));
    }
    user = await User.create({
        firstName,
        lastName,
        email,
        phone,
        password,
        gender,
        dob,
        NIC,
        role
    });
    generateToken(user, "User registered successfully", 201, res);
});


    export const login = catchAsyncErrors(async (req, res, next) => {
    const { email, password, confirmPassword, role } = req.body;
    if (!email || !password || !confirmPassword || !role) {
        return next(new ErrorHandler("All fields are required. Please fill in the missing values.", 400));
    }
    if (password !== confirmPassword) {
        return next(new ErrorHandler("Passwords do not match. Please re-enter your password.", 400));
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new ErrorHandler("Invalid credentials. Please check your email and password and try again.", 401));
    }
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Incorrect password. Please check your password and try again.", 401));
    }
    if (role !== user.role) {
        return next(new ErrorHandler("Access denied: You do not have the required permissions.(Unauthorized Access)", 403));
    }
    generateToken(user, "Login successful: User authenticated and token generated.", 200, res);

});

// export const login = catchAsyncErrors(async (req, res, next) => {
//     const { email, password, otp, role } = req.body;

//     if (!email || !password || !role) {
//         return next(new ErrorHandler("All fields are required. Please fill in the missing values.", 400));
//     }

//     const user = await User.findOne({ email }).select("+password");

//     if (!user) {
//         return next(new ErrorHandler("Invalid credentials. Please check your email and password and try again.", 401));
//     }

//     const isPasswordMatched = await user.comparePassword(password);

//     if (!isPasswordMatched) {
//         return next(new ErrorHandler("Incorrect password. Please check your password and try again.", 401));
//     }

//     if (role !== user.role) {
//         return next(new ErrorHandler("Access denied: You do not have the required permissions.(Unauthorized Access)", 403));
//     }

//     if (!otp) {
//         // Generate OTP and send to user's email
//         const generatedOtp = generateOTP(); // Generate OTP
//         user.otp = generatedOtp;
//         user.otpExpires = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes
//         await user.save();

//         // Send OTP email
//         await sendEmail({
//             email,
//             subject: 'Your OTP Code',
//             message: `Your OTP code is ${generatedOtp}`,
//         });

//         return res.status(200).json({
//             success: true,
//             message: "OTP sent to your email. Please check your inbox.",
//         });
//     } else {
//         // Verify OTP
//         if (user.otp !== otp || user.otpExpires < Date.now()) {
//             return next(new ErrorHandler("Invalid or expired OTP. Please request a new OTP.", 400));
//         }

//         // Clear OTP after successful login
//         user.otp = undefined;
//         user.otpExpires = undefined;
//         await user.save();

//         generateToken(user, "Login successful: User authenticated and token generated.", 200, res);
//     }
// });

// export const login = catchAsyncErrors(async (req, res, next) => {
//     // Add this in your login route handler
// const { email, password } = req.body;

// // Authenticate user
// const user = await User.findOne({ email }).select('+password');
// if (!user || !(await user.comparePassword(password))) {
//     return res.status(401).json({ message: 'Invalid email or password' });
// }

// // Generate and send OTP
// const otp = generateOTP();
// user.otp = otp;
// user.otpExpires = Date.now() + 10 * 60 * 1000; // OTP expires in 10 minutes
// await user.save();

// // Send OTP via email
// await sendEmail({
//     email: user.email,
//     subject: 'Your OTP Code',
//     message: `Your OTP code is ${otp}`
// });

// res.status(200).json({ message: 'OTP sent to your email. Please verify it.' });

// });



// export const verifyOtp = async (req, res) => {
//     const { email, otp } = req.body;

//     try {
//         console.log(`Received OTP verification request: email=${email}, otp=${otp}`);

//         const user = await User.findOne({ email });
//         if (!user) {
//             console.log("User not found");
//             return res.status(400).json({ message: "User not found" });
//         }

//         console.log(`Stored OTP: ${user.otp}, Entered OTP: ${otp}`);

//         if (user.otp !== otp) {
//             console.log("Invalid OTP");
//             return res.status(400).json({ message: "Invalid OTP" });
//         }

//         if (new Date() > user.otpExpires) {
//             console.log("OTP has expired");
//             return res.status(400).json({ message: "OTP has expired" });
//         }

//         user.isOtpVerified = true;
//         user.otp = undefined;
//         user.otpExpires = undefined;
//         await user.save();

//         res.status(200).json({ message: "OTP verified successfully" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// };


export const addNewAdmin = catchAsyncErrors(async (req, res, next) => {
    const {
        firstName,
        lastName,
        email,
        phone,
        password,
        gender,
        dob,
        NIC
    } = req.body;
    if (
        !firstName ||
        !lastName ||
        !email ||
        !phone ||
        !password ||
        !gender ||
        !dob ||
        !NIC
    ) {
        return next(new ErrorHandler("All fields are required", 400));
    }
    const isRegistered = await User.findOne({ email });
    if (isRegistered) {
        return next(new ErrorHandler(`${isRegistered.role} With that Email already exists`, 400));
    }
    const admin = await User.create({
        firstName,
        lastName,
        email,
        phone,
        password,
        gender,
        dob,
        NIC,
        role: "Admin"
    });
    res.status(201).json({
        success: true,
        message: "Admin setup complete: New admin profile initialized and ready.",
    });
});

export const getAllDoctors = catchAsyncErrors(async (req, res, next) => {
    const doctors = await User.find({ role: 'Doctor' });
    res.status(200).json({
        success: true,
        //data: doctors
        doctors
    });
});

export const getUserDetails = catchAsyncErrors(async (req, res, next) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        user
    });
});

export const logoutAdmin = catchAsyncErrors(async (req, res, next) => {
    res.status(200).cookie("adminToken", "", {
        expires: new Date(Date.now()),
        httpOnly: true
    }).json({
        success: true,
        message: "Logged out successfully: Admin logged out."
    });
});

export const logoutPatient = catchAsyncErrors(async (req, res, next) => {
    res.status(200).cookie("patientToken", "", {
        expires: new Date(Date.now()),
        httpOnly: true
    }).json({
        success: true,
        message: "Logged out successfully: Patient logged out."
    });
});

export const addNewDoctor = catchAsyncErrors(async (req, res, next) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return next(new ErrorHandler("Upload failed: Doctor avatar not detected. Operation halted!", 400));
    }
    const { docAvatar } = req.files;
    const allowedFormats = ["image/png", "image/jpg", "image/jpeg", "image/webp"];
    if (!allowedFormats.includes(docAvatar.mimetype)) {
        return next(new ErrorHandler("Invalid file format: Only PNG, JPG, JPEG, and WEBP formats are allowed. Operation halted!", 400));
    }
    const {
        firstName,
        lastName,
        email,
        phone,
        password,
        gender,
        dob,
        NIC,
        doctorDepartment
    } = req.body;
    if (
        !firstName ||
        !lastName ||
        !email ||
        !phone ||
        !password ||
        !gender ||
        !dob ||
        !NIC ||
        !doctorDepartment
    ) {
        return next(new ErrorHandler("Incomplete data stream. All fields are required to proceed!", 400));
    }
    const isRegistered = await User.findOne({ email });
    if (isRegistered) {
        return next(new ErrorHandler(`Duplicate entry detected. ${isRegistered.role} email already in the system.`, 400));
    }
    const cloudinaryResponse = await cloudinary.uploader.upload(docAvatar.tempFilePath);
    if (!cloudinaryResponse || cloudinaryResponse.error) {
        console.error("Cloudinary Error:", cloudinaryResponse.error || "Unknown Cloudinary Error");
        //return next(new ErrorHandler("File upload failed. Please try again.", 500)); 
    }
    const doctor = await User.create({
        firstName,
        lastName,
        email,
        phone,
        password,
        gender,
        dob,
        NIC,
        role: "Doctor",
        docAvatar: {
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.secure_url
        },
        doctorDepartment
    });
    res.status(201).json({
        success: true,
        message: "Doctor node initialized: Profile injected into the system matrix.(SUCCESS)",
        doctor
    });
});