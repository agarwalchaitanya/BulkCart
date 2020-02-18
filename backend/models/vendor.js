const mongoose = require('mongoose');

let Vendor = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    rating: {
        type: Number
    },
    number_of_ratings: {
        type: Number
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Vendor', Vendor);