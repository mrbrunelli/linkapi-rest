const axios = require("axios")
const j2xml = require("js2xmlparser")

class SaveBlingWonDeals {
    #blingToken
    #deals = []

    constructor(blingToken, deals) {
        this.#blingToken = blingToken
        this.#deals = deals
    }

    async save(req, res) {
        try {
            const responses = []
            for (let deal of this.#deals) {
                const encodedXml = this.parseJsonToXml(deal)
                const res = await axios.post(
                    "https://bling.com.br/Api/v2/pedido/json/", null, {
                        params: {
                            apikey: this.#blingToken,
                            xml: encodedXml
                        }
                    }
                )
                responses.push(res.data)
            }
            return responses
        } catch (e) {
            throw new Error("Error to save Pipedrive Won Deals in Bling platform.")
        }
    }

    parseJsonToXml(j) {
        const xml = {
            cliente: {
                nome: j.name
            },
            itens: {
                item: j.products
            }
        }
        const encodedXml = this.encodeXml(
            j2xml.parse("pedido", xml)
        )
        return encodedXml
    }

    encodeXml(x) {
        return encodeURIComponent(x)
    }
}

module.exports = SaveBlingWonDeals