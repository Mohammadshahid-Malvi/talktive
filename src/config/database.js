const mongoose = require("mongoose");

// Connect with database
const connectDB = async () => {
    await mongoose.connect("mongodb+srv://techSFC:Mrsd2291@techsfc.y1ydr.mongodb.net/Talktive");
};

module.exports = connectDB;