const mongoose = require("mongoose")

const DB_URI = process.env.DB_URI
const DB_NAME = process.env.DB_NAME

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: DB_NAME
}, (err) => {
    if (!err) {
        console.log("Connected successfully!")
    } else {
        console.log("Failed to connect!" + err)
    }
})

module.exports = mongoose