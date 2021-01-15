const axios = require("axios")
const Order = require("../../models/order")
const {ok, badRequest, noContent} = require("../../helpers")

const updateRepositoryOrders = async (req, res) => {
    try {
        const token = req.query.token
        const date = req.query.date
        if (!token || !date) throw new Error("Please provide the parameters corretly.")
        const response = await axios.get(
            "https://bling.com.br/Api/v2/pedidos/json/", {
                params: {
                    apikey: token,
                    filters: `dataEmissao[${date} TO ${date}]`
                }
            }
        )
        const orders = response.data.retorno.pedidos
        if (!orders) return noContent(res)
        const reducedOrders = reduceOrders(orders)
        const msg = await update(reducedOrders)
        return ok(res, msg)
    } catch (e) {
        return badRequest(res, e.message)
    }
}

const reduceOrders = (orders = []) => {
    const m = orders.map(o => ({
        data: o.pedido.data,
        totalvenda: Number(o.pedido.totalvenda)
    }))
    const r = m.reduce((acc, acu) => {
        return acc + acu.totalvenda
    }, 0)
    return {
        date: m[0].data,
        total: r
    }
}

const update = async (totalDaily) => {
    try {
        await Order.updateOne({date: totalDaily.date}, totalDaily, {
            upsert: true
        })
        return "Updated repository values successfully!"
    } catch (e) {
        throw new Error("Error to update daily values in repository.")
    }
}

module.exports = updateRepositoryOrders