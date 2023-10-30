const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    phone : String,
    imagePath: String, 
    password : String,
    confirmPassword : String
})

const userModel = mongoose.model("Users", userSchema)

module.exports = userModel;