import express from "express"
import { addNewAdmin, addNewDoctor, getAllDoctors, getUserDetails, login, logoutAdmin, logoutPatient, patientRegister } from "../controller/userController.js";
import { isAdminAuthenticated, isPatientAuthenticated } from "../middlewares/auth.js";

const router = express.Router();


router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/admin/addnew", isAdminAuthenticated, addNewAdmin);
router.get("/doctors", getAllDoctors);
router.get("/admin/me", isAdminAuthenticated, getUserDetails);
router.get("/patient/me", isPatientAuthenticated, getUserDetails);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
router.post("/doctor/addnew", isAdminAuthenticated, addNewDoctor);
router.post("/login", login);
router.put("/doctor/:id", isAdminAuthenticated, updateDoctor);
router.delete("/doctor/:id", isAdminAuthenticated, deleteDoctor);




export default router;

// import express from "express";
// import { addNewAdmin, addNewDoctor, getAllDoctors, getUserDetails, login, logoutAdmin, logoutPatient, patientRegister, verifyOtp } from "../controller/userController.js";
// import { isAdminAuthenticated, isPatientAuthenticated } from "../middlewares/auth.js";
// const router = express.Router();

// router.post("/patient/register", patientRegister);
// router.post("/login", login);
// router.post("/admin/addnew", isAdminAuthenticated, addNewAdmin);
// router.get("/doctors", getAllDoctors);
// router.get("/admin/me", isAdminAuthenticated, getUserDetails);
// router.get("/patient/me", isPatientAuthenticated, getUserDetails);
// router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);
// router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
// router.post("/doctor/addnew", isAdminAuthenticated, addNewDoctor);
// //router.post('/verify-otp', verifyOtp);

// // In your userRouter.js
// // Inside your verify-otp route
// // router.post('/verify-otp', async (req, res) => {
// //     const { email, otp } = req.body;
    
// //     const user = await User.findOne({ email });
// //     if (!user || user.otp !== otp || Date.now() > user.otpExpires) {
// //         return res.status(400).json({ message: 'Invalid or expired OTP' });
// //     }

// //     user.otp = undefined;
// //     user.otpExpires = undefined;
// //     await user.save();

// //     // Generate and send JWT or other user session token
// //     const token = user.generateJsonWebToken(); // Ensure this method exists and works
// //     res.status(200).json({ message: 'OTP verified successfully', token });
// // });

// export default router;