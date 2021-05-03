const {Cart, Coupon} = require('../../models')

module.exports = {
    async searchCoupon(req, res, next){
        try{
            let cupom = req.query.cupomName;

        let searchCupom = await Coupon.findOne({where:{name:cupom}}).catch(error => console.log(error));
        
        function isEmptyObject(products) {
            let id;
            for (id in products) {
              return false;
            }
            return true;
          }
          
        let vazio = isEmptyObject(searchCupom);
        if(!vazio){
            req.session.cupom = searchCupom;
            return res.render('sucesso', {user:req.session.user, message:'Seu cupom foi aplicado com sucesso!'})
        } else{
            return res.render('erro', {user:req.session.user, message:'Não encontramos este cupom! Volte a sua cesta para tentar novamente ou finalizar seu pedido!'})
        }
        } catch (error){
            res.render('erro', {message:'Algo deu errado com seu cupom!'})
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
                return res.render('sucesso', {user:req.session.user, message:'Seu produto foi adicionado a sua cesta!'})
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
                return res.render('sucesso', {user:req.session.user, message:'Seu produto foi adicionado a sua cesta!'})
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
            
            let totalProdutos = 0;
            let pesoProdutos = 0;
            itensCart.forEach(element => { 
                totalProdutos += element.itemTotal;
                pesoProdutos += element.quantity
            });
            
            let taxaFrete = pesoProdutos/1500;
            let frete = 2.99 + taxaFrete;
            
            let cupom = req.session.cupom;
            
            if(cupom == 0 || cupom == undefined){
                let total = totalProdutos + frete;
                return res.render('checkout', {user:req.session.user, products:itensCart, total:total, frete: frete, cupom:req.session.cupom});
            } else {
            totalProdutos -= cupom.discount;
            let total = totalProdutos + frete;
            req.session.total = total
            console.log('\n\ncai no else');
            return res.render('checkout', {user:req.session.user, products:itensCart, total:total, frete:frete, cupom:req.session.cupom});
            }
            
        } catch (error) {
            return res.render('erro', {message: 'Não conseguimos identificar você!\nPor favor, realize o login!', user: req.session.user})
        }


    }
}