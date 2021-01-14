require("dotenv/config")
const express = require("express")
const app = express()

const PORT = process.env.PORT || 3333

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(PORT, () => {
    console.log("Server running on port -> " + PORT)
})
