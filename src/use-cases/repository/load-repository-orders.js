const Order = require("../../models/order")
const {ok, badRequest} = require("../../helpers")

const loadRepositoryOrders = async (req, res) => {
    try {
        const orders = await Order.find()
        return ok(res, orders)
    } catch (e) {
        return badRequest(res. e.message)
    }
}

module.exports = loadRepositoryOrders