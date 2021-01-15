const {ok, badRequest} = require("../helpers")
const LoadPipedriveWonDeals = require("./load-pipedrive-won-deals")
const LoadPipedriveProductsByDeal = require("./load-pipedrive-products-by-deal")
const SaveBlingWonDeals = require("./save-bling-won-deals")

const PIPEDRIVE_TOKEN = process.env.PIPEDRIVE_TOKEN
const BLING_TOKEN = process.env.BLING_TOKEN

module.exports = async (req, res) => {
    try {
        const wonDeals = await new LoadPipedriveWonDeals(PIPEDRIVE_TOKEN).load()
        const wonDealsWithProducts = await new LoadPipedriveProductsByDeal(PIPEDRIVE_TOKEN, wonDeals).load()
        const responses = await new SaveBlingWonDeals(BLING_TOKEN, wonDealsWithProducts).save()
        return ok(res, responses)
    } catch (e) {
        return badRequest(res, e)
    }
}