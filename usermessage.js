const mongoose = require("mongoose");

const validator = require("validator");

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        require: true

        // validate(value) {
        //     if (validator.isEmail(value)) {
        //         throw new Error("invalid email id")
        //     }
        // }
    },

    message: {
        type: String,
        required: true,
        minLenght: 3
    }
})

//create collection
const User = mongoose.model("User", userSchema);

module.exports = User;