const mongoose = require("mongoose");


// mongoose.connect("mongodb://127.0.0.1:27017/Riyathapa").then(() => {
//     console.log(`connection sucessful`);

// }).catch((e) => {
//     console.log(`no connection`);
// });


const mongoURI = "mongodb://127.0.0.1:27017/Riyathapa"

const connecttomongo = () => {
    mongoose.connect(mongoURI)
    console.log("connected successfully")
}

module.exports = connecttomongo