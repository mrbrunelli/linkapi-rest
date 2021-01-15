const error404 = (req, res) => {
    return res.status(404).json({
        message: "Hmm... This route dont exists... Please, check API Docs",
        apiDoc: "https://github.com/mrbrunelli/linkapi-rest/blob/master/APIDOCS.md"
    })
}

module.exports = error404