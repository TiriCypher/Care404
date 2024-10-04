import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "HOSPITAL_MANAGEMENT"
    }).then(() => {
        console.log("🔗 DB sync: HOSPITAL_MANAGEMENT wired into the grid.(SUCCESS CONNECTED)");
    }).catch(err => {
        console.log(`⚠️ Critical system failure: Unable to connect to database. Error trace: ${err}(ERROR)`);
    });
};