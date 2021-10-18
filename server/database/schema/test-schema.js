const { Schema } = require('mongoose');
const mongoose = require('mongoose');

/* USER SCHEMA, AND MODULE EXPORT */
module.exports = mongoose.model('test', new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    body: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
}));