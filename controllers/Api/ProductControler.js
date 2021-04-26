const {Product} = require('../../models');

module.exports = {
    async index(req, res){
        await Product.findAll()
        .then( products => {
            return res.status(200).json(products)
        })
        .catch(error => {
            return res.status(400).json(error)
        })
    },
    async searchById(req, res){
        await Product.findByPk(req.params.id)
        .then( product => {
            return res.status(200).json(product)
        })
        .catch(error => {
            return res.status(400).json(error)
        })
    }

}