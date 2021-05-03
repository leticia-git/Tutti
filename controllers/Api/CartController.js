const { render } = require('../../app')
const {Cart, Coupon} = require('../../models')

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
    
    async addItem(req, res, next){
        try{
            let {quantity, productId, name, sale, price, salePrice, userId} = req.body;
            if(sale == 1){
                let total = salePrice * quantity / 1000;
                let itemAdd = await Cart.create({
                    name:name, 
                    price:salePrice, 
                    quantity:quantity, 
                    itemTotal:total, 
                    userId:userId, 
                    productId:productId
                });
                console.log(itemAdd)
                return res.redirect('/checkout')
            } else {
                let total = price * quantity / 1000;
                let itemAdd = await Cart.create({
                    name:name, 
                    price:price, 
                    quantity:quantity, 
                    itemTotal:total, 
                    userId:userId, 
                    productId:productId
                });
                return res.redirect('/checkout',{user:req.session.user})
            }
        } catch(error){
            return res.render('erro', {message:'Não conseguimos processar sua solicitação, verifique se está logado!'})
        }
    },

    async index(req, res, next){
        try{
            let user = req.session.user
            let itensCart = await Cart.findAll({
             where:{
                 userId:user.id
                }
            });
            return res.render('checkout', {user:req.session.user, products:itensCart});
        } catch (error) {
            return res.render('erro', {message: 'Não conseguimos identificar você!\nPor favor, realize o login!', user: req.session.user})
        }


    }
}