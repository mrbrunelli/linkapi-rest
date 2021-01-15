const express = require("express")
const integrationHandler = require("./handlers/integration-handler")

const router = express.Router()

router.use("/integration", integrationHandler)

module.exports = router