const {Cart, Coupon} = require('../../models')

module.exports = {
    async searchCoupon(req, res, next){
        let cupom = req.query.cupomName;

        let searchCupom = await Product.findAll({where:{name:cupom}}).catch(error => console.log(error));
        
        function isEmptyObject(products) {
            var name;
            for (name in products) {
              return false;
            }
            return true;
          }
          
        let vazio = isEmptyObject(searchCupom);
        
        if(!vazio){
            return res.render('checkout', {user:req.session.user, total:req.session.total, cupom:searchCupom})
        } else{
            return res.render('checkout', {user:req.session.user, total:req.session.total})
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
            }
            return res.redirect('/')
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
            let total = 0;
            itensCart.forEach(element => { 
                total+=element.itemTotal 
            });

            req.session.total = total;

            let cupom = req.session.cupom;
            if(cupom == 0 || cupom == undefined){
            return res.render('checkout', {user:req.session.user, products:itensCart, total:req.session.total});
            } else {
            total -= cupom.discount;
            req.session.total = total
            console.log('\n\ncai no else');
            return res.render('checkout', {user:req.session.user, products:itensCart, total:req.session.total});
            }
            
        } catch (error) {
            return res.render('erro', {message: 'Não conseguimos identificar você!\nPor favor, realize o login!', user: req.session.user})
        }


    }
}