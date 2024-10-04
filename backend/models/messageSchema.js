import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "⚠️Error 404: FirstName too short. Must be at least 3 chars."]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "⚠️Error 404: LastName too short. Must be at least 3 chars."]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "⚠️Invalid Email Protocol: Please enter a valid email address."]
    },
    phone: {
        //type: Number,
        type: String,
        required: true,
        //validate: [validator.isMobilePhone, "Please provide a valid Phone Number"]
        minLength: [10, "⚠️Phone Error: Must be at least 10 digits long."],
        maxLength: [11, "⚠️Phone Error: Exceeds maximum of 11 digits."]
    },
    message: {
        type: String,
        required: true,
        minLength: [10, "⚠️Message Buffer Overflow: Must be at least 10 characters."]
    },
});

export const Message = mongoose.model("Message", messageSchema)