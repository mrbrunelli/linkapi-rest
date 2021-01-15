const express = require("express")
const saveBlingWonDeals = require("../use-cases")
const {updateRepositoryOrders, loadRepositoryOrders} = require("../use-cases/repository")

const router = express.Router()

router.post("/integrate", saveBlingWonDeals)
router.put("/update-repository", updateRepositoryOrders)
router.get("/orders", loadRepositoryOrders)

module.exports = router