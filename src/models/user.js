const mongoose = require("mongoose");

// Created Schema
const userSchema = mongoose.Schema({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    emailId:{
        type: String
    },
    password:{
        type: String
    },
    phoneNo:{
        type: Number
    },
    gender:{
        type: String
    }
});

// Created Model
const User = mongoose.model("User",userSchema);

module.exports = User;