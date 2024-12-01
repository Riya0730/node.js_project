const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
    },
    Phone: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true

    },

    date: {
        type: Date,
        default: Date.now
    }

});

//const Register =  mongoose.model("Register", userSchema);
module.exports = mongoose.model("register", userSchema);

