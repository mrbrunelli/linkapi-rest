const mongoose = require("../database/connection")

const Deal = new mongoose.Schema({
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

module.exports = mongoose.model('deal', Deal)