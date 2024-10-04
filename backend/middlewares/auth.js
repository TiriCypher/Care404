import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./errorMiddleware.js";
import jwt from "jsonwebtoken";
import { User } from '../models/userSchema.js'; 

export const isAdminAuthenticated = catchAsyncErrors(async (req, res, next) => {
    const token = req.cookies.adminToken;
    if (!token) {
        return next(new ErrorHandler("⚠️ AuthError: Admin authentication failed. Access denied - insufficient privileges [Error: 0x401]", 401));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);
    if (req.user.role !== "Admin") {
        return next(new ErrorHandler(`⚠️ Access Denied: ${req.user.role}s are not authorized to perform this action.`, 403));
    }
    next();

})

export const isPatientAuthenticated = catchAsyncErrors(async (req, res, next) => {
    const token = req.cookies.patientToken;
    if (!token) {
        return next(new ErrorHandler("⚠️ Patient not authenticated", 401));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);
    if (req.user.role !== "Patient") {
        return next(new ErrorHandler(`⚠️ Access Denied: ${req.user.role}s are not authorized to perform this action.`, 403));
    }
    next();

})