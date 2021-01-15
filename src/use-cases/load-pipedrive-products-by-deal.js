const axios = require("axios")

class LoadPipedriveProductsByDeal {
    #serializedDeals = []
    #pipedriveToken

    constructor(pipedriveToken, serializedDeals) {
        this.#pipedriveToken = pipedriveToken
        this.#serializedDeals = serializedDeals
    }

    async load() {
        try {
            const serializedProducts = []
            for (let deal of this.#serializedDeals) {
                const res = await axios.get(
                    `https://api.pipedrive.com/v1/deals/${deal.id}/products?start=0&include_product_data=1`, {
                        params: {
                            api_token: this.#pipedriveToken
                        }
                    }
                )
                const productsOfDeal = res.data.data
                const products = this.serializeProducts(productsOfDeal)
                serializedProducts.push({
                    id: deal.id,
                    name: deal.name,
                    products: products
                })
            }
            return serializedProducts
        } catch (e) {
            throw new Error("Error to load Products of Deal.")
        }
    }

    serializeProducts(products) {
        const productCollection = []
        for (let p of products) {
            productCollection.push({
                codigo: p.product.code,
                descricao: p.name,
                qtde: p.quantity,
                vlr_unit: p.item_price
            })
        }
        return productCollection
    }
}

module.exports = LoadPipedriveProductsByDeal