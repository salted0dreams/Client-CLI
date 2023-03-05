const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const CustomerSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const Customer = mongoose.model('customer', CustomerSchema);

module.exports = Customer;
