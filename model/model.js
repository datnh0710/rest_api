const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    },
    date: {
        required: false,
        type: String
    },
    body: {
        required: true,
        type: String,
    },
    title: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)