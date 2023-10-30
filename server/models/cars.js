const mongoose = require('mongoose');

const newcarSchema = new mongoose.Schema({
    carname: String,
    model: String,
    year: String,
    description: String,
    price: String,
    imagePath: String, 
});

const newcarModel = mongoose.model("Our-Cars", newcarSchema);

module.exports = newcarModel;
