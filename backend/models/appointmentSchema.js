import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "⚠️ Error: FirstName should be at least 3 characters. Try harder!"]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "⚠️ Error: LastName should be at least 3 characters. More characters, please!"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "⚠️ Error: Invalid Email Syntax. Hack the format!"]
    },
    phone: {
        //type: Number,
        type: String,
        required: true,
        //validate: [validator.isMobilePhone, "Please provide a valid Phone Number"]
        minLength: [10, "⚠️ Error: Phone Number must be at least 10 digits. Input more data!"],
        maxLength: [11, "⚠️ Error: Phone Number exceeds 11 digits. Keep it concise!"]
    },
    NIC: {
        type: String,
        required: true,
        minLength: [10, "⚠️ Error: NIC Protocol Breach - Minimum 10 Characters Required"],
        maxLength: [12, "⚠️ Error: NIC Overflow - Maximum 12 Characters Allowed"]
    },
    dob: {
        type: Date,
        required: [true, "⚠️ ERROR: DOB Parameter Not Detected. Enter to Initialize"],
        //required: true,
        //validate: [validator.isISO8601, "Please provide a valid date of birth"]
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true
    },
    appointment_date: {
        //type: Date,
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    doctor: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    hasVisited:{
        type: Boolean,
        default: false,
    },
    doctorId:{
        type: mongoose.Schema.Types.ObjectId,
        //type: mongoose.Schema.ObjectId,
        //ref: "Doctor"
        required: true
    },
    patientId:{
        type: mongoose.Schema.Types.ObjectId,
        //type: mongoose.Schema.ObjectId,
        //ref: "Patient"
        required: true
    },
    address:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ["Pending", "Confirmed", "Cancelled"],
        //required: true,
        default: "Pending"
    }
});

export const Appointment = mongoose.model("Appointment", appointmentSchema);
