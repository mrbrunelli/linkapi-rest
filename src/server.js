require("dotenv/config")
const express = require("express")
const routes = require("./routes")
const {error404} = require("./middlewares")
const app = express()
const PORT = process.env.PORT || 3333

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(routes)
app.get("*", error404)

app.listen(PORT, () => {
    console.log("Server running on port -> " + PORT)
})
