const express = require("express")
const BlingHandler = require("./handlers/bling-handler")

const router = express.Router()

router.use("/integration", BlingHandler)

module.exports = router