import crypto from "crypto";

const generateOTP = () => {
    return crypto.randomBytes(3).toString("hex"); // Generates a 6-character OTP
};

export default generateOTP; // Change this to default export
