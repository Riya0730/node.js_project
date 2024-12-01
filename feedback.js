const mongoose = require("mongoose");

const validator = require("validator");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        require: true
    },

    like: {
        type: String,
        required: true,
        minLenght: 5
    },

    service: {
        type: String,
        required: true,
        minLenght: 5
    },

    Suggestion: {
        type: String,
        required: true,
        minLenght: 5
    }
})

//create collection
const Feedback = mongoose.model("Feedback", userSchema);

module.exports = Feedback;