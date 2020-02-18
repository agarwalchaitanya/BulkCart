const mongoose = require('mongoose');

let Product = new mongoose.Schema({
    product_id: {
        type: String,
        required: true
    },
    vendor: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    current_orders: {
        type: Number,
        default: 0
    },
    maximum_orders: {
        type: Number,
        required: true
    },
    minimum_orders: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', Product);