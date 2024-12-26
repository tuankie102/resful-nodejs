const mongoose = require("mongoose");

const kittySchema = new mongoose.Schema({
    name: String,
    age: Number
})
const Kitten = mongoose.model("Kitten", kittySchema);

module.exports = Kitten;