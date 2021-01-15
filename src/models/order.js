const mongoose = require("../database/connection")

const Order = new mongoose.Schema({
   date: {
       type: Date,
       required: true
   },
    total: {
       type: Number,
        required: true
    },
    currency: String
}, {
    timestamps: true
})

module.exports = mongoose.model('order', Order)