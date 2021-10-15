const { Schema } = require('mongoose');
const mongoose = require('../database/connection');

/* USER SCHEMA, AND MODULE EXPORT */
module.exports = mongoose.model('book', new Schema({
    name: {
        type: String,
        required: true
    },
    authorId: {
        type: String,
        required: true
    }
}));