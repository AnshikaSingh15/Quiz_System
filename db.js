const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("YOUR_MONGODB_CONNECTION_STRING");
        console.log("MongoDB Connected");
    } catch (error) {
        console.log("DB Error:", error);
    }
};

module.exports = connectDB;