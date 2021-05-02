const {Coupon} = require('../../models')

module.exports = {
    async cupom (req, res, next){
        try{
            let name = req.params.name
            console.log(name)
            let cupom = await Coupon.findOne({
                where:{
                    name:name,
                    status:1
                }
            })
            console.log(cupom)
            if(cupom!==undefined){
                return res.status(200).json(cupom)
            } else{
                return res.status(200).json({message:'este cupom não está mais ativo ou não existe'})
            }
        } catch(error){
            return res.status(400).json({message: 'Error: ' + error.message})
        }
    },
    async create (req, res, next){
        try{
            let cupom = {...req.body}
            await Coupon.create(cupom);
            return res.status(201).json(cupom)
        } catch(error){
            return res.status(400).json({message:'Error: ' + error.messege})
        }

    },
    
    addItem(req, res, next){
        let cart = req.session.cart;
        if(cart == undefined || cart == null){
            req.session.cart = [];
            let item = req.body;
            res.send(item)

        } else {
            let newItem = req.body;
            cart.push(newItem)
            req.session.cart = cart;
            res.send('cai no else, tem coisa no cart: ' + cart)
        }
    },

    async index(req, res, next){
        
    }
}