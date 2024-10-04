// import mongoose from "mongoose";
// import validator from "validator";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// const userSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true,
//         minLength: [3, "First Name must conatin atleast 3 letters"]
//     },
//     lastName: {
//         type: String,
//         required: true,
//         minLength: [3, "Last Name must conatin atleast 3 letters"]
//     },
//     email: {
//         type: String,
//         required: true,
//         validate: [validator.isEmail, "Please provide a valid email"]
//     },
//     phone: {
//         //type: Number,
//         type: String,
//         required: true,
//         //validate: [validator.isMobilePhone, "Please provide a valid Phone Number"]
//         minLength: [10, "Phone must contain 10 Digits"],
//         maxLength: [11, "Phone must contain Max 11 Digits"]
//     },
//     NIC: {
//         type: String,
//         required: true,
//         minLength: [10, "NIC must contain at least 10 digits/characters"],
//         maxLength: [12, "NIC can contain a maximum of 12 digits/characters"]
//     },
//     dob: {
//         type: Date,
//         required: [true, "DOB IS REQUIRED"],
//         //required: true,
//         //validate: [validator.isISO8601, "Please provide a valid date of birth"]
//     },
//     gender: {
//         type: String,
//         enum: ["Male", "Female", "Other"],
//         required: true
//     },
//     password: {
//         type: String,
//         required: true,
//         minLength: [8, "Password must contain at least 8 characters"],
//         select: false
//     },
//     role: {
//         type: String,
//         required: true,
//         enum: ["Admin", "Doctor", "Patient"],
//         //default: "Patient"
//     },
//     doctorDepartment: {
//         type: String,
//         required: false,
//         //default: "Not Assigned"
//     },
//     docAvatar: {
//         public_id: String,
//         url: String
//     },

//     otp: {
//         type: String,
//         required: false,
//     },
//     otpExpires: {
//         type: Date,
//         required: false,
//     },
//     isOtpVerified: {
//         type: Boolean,
//         default: false,
//     }
// });

// userSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) {
//         next();
//     }
//     this.password = await bcrypt.hash(this.password, 10);
// });

// userSchema.methods.comparePassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
// };

// userSchema.methods.generateJsonWebToken = function () {
//     const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES });
//     return token;
// }






// export const User = mongoose.model("User", userSchema);


import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    // Existing fields
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First Name must contain at least 3 letters"]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last Name must contain at least 3 letters"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please provide a valid email"]
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone must contain 10 Digits"],
        maxLength: [11, "Phone must contain Max 11 Digits"]
    },
    NIC: {
        type: String,
        required: true,
        minLength: [10, "NIC must contain at least 10 digits/characters"],
        maxLength: [12, "NIC can contain a maximum of 12 digits/characters"]
    },
    dob: {
        type: Date,
        required: [true, "DOB IS REQUIRED"],
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: [8, "Password must contain at least 8 characters"],
        select: false
    },
    role: {
        type: String,
        required: true,
        enum: ["Admin", "Doctor", "Patient"],
    },
    doctorDepartment: {
        type: String,
        required: false,
    },
    docAvatar: {
        public_id: String,
        url: String
    },
    // New fields for OTP
    otp: {
        type: String,
        required: false,
    },
    otpExpires: {
        type: Date,
        required: false,
    },
    isOtpVerified: {
        type: Boolean,
        default: false,
    }
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateJsonWebToken = function () {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES });
    return token;
}

export const User = mongoose.model("User", userSchema);
