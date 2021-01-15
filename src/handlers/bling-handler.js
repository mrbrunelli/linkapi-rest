const express = require("express")
const saveBlingWonDeals = require("../use-cases")

const router = express.Router()

router.get("/integrate", saveBlingWonDeals)

module.exports = router