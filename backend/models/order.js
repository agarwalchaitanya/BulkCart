const mongoose = require('mongoose');

let Order = new mongoose.Schema({
    order_id: {
        type: String,
        required: true
    },
    product_id: {
        type: String,
        required: true
    },
    dispatch_status: {
        type: String,
        required: true
    },
    orders: {
        type: Map,
        of: Number
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Order', Order);