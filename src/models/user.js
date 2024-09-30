const mongoose = require("mongoose");
const validator = require("validator");

// Created Schema
const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minlength:5,
        maxLength:40
    },
    lastName:{
        type: String
    },
    emailId:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email should be valid')
            }
        }
    },
    password:{
        type: String,
        required: true
    },
    phoneNo:{
        type: Number
    },
    gender:{
        type: String,
        validate(value) {
            if(!["male","female","others"].includes(value)){
                throw new Error("Value is not Valid");
            }
        }
    },
    photoURL: {
        type: String,
        default:"https://geographyandyou.com/images/user-profile.png",
        validate(value) {
            if (!validator.isURL(value)){
                throw new Error("Image URL should be valid")
            }
        }
    },
    about: {
        type: String,
        default: "This is default of about us"
    },
    skills: {
        type: [String]
    }
},
{
    timestamps:true
}
);

// Created Model
const User = mongoose.model("User",userSchema);

module.exports = User;