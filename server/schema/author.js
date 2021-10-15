const { Schema } = require('mongoose');
const mongoose = require('../database/connection');

/* USER SCHEMA, AND MODULE EXPORT */
module.exports = mongoose.model('author', new Schema({
    name: {
        type: String,
        required: true
    }
}));