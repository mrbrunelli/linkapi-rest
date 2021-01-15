const axios = require("axios")

class LoadPipedriveWonDeals {
    #pipedriveToken

    constructor(pipedriveToken) {
        this.#pipedriveToken = pipedriveToken
    }

    async load() {
        try {
            const deals = []
            const res = await axios.get(
                "https://api.pipedrive.com/v1/deals?status=won&start=0", {
                    params: {
                        api_token: this.#pipedriveToken
                    }
                }
            )
            deals.push(...res.data.data)
            const serializedDeals = this.serializeDeals(deals)
            return serializedDeals
        } catch (e) {
            throw new Error("Error to load Won Deals of Pipedrive.")
        }
    }

    serializeDeals(deals) {
        const customersAndDeals = []
        for (let deal of deals) {
            customersAndDeals.push({
                id: deal.id,
                name: deal.person_id.name
            })
        }
        return customersAndDeals
    }
}

module.exports = LoadPipedriveWonDeals
