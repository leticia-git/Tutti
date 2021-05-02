const {Product, Category} = require('../../models');
const Sequelize = require('sequelize')


module.exports = {
    async index(req, res, next){
       try { 
           let product = await Product.findAll({
               include:'provider'
           })
            return res.render('mercadoGeral', {user:req.session.user, products:product})
        }
        catch(error) {
            return res.render('erro',{user:req.session.user, message:'Algo deu errado!'})
        }
    },
    
    async productById(req, res, next){
       try{
           let {id} = req.params
           let product = await Product.findByPk(id,{include:'provider'})
            if(product.name !== undefined){
                let provider = product.providerId
                let vendorProducts = await Product.findAll({where:{providerId:provider}, limit:5})
                let vendorSugestion = vendorProducts.filter(products=>product.id !== products.id )
                return res.render('product',{user: req.session.user, product:product, vendorSugestion:vendorSugestion})
            } else {
                return res.render('erro',{user:req.session.user, message:'Não encontramos este produto!'})
            }
        }
        catch(error) {
            return res.render('erro',{user:req.session.user, message:'Algo deu errado!'})
        }
    },
    async category(req, res, next){
        try{
            let id = req.params.id
            var categoryProducts = await Product.findAll({
                where:{
                    categoryId:id
                }
            })
            
           if(id==1){
            console.log(`\n\n To chegando até aquino primeiro if\n O Id é:${id}\n`)
            return res.render('mercadoA', {user:req.session.user, category:categoryProducts});
           } 
           else if(id==2){
            return res.render('mercadoB', {user:req.session.user, category:categoryProducts});
           }
           else if(id==3){
            return res.render('mercadoC', {user:req.session.user, category:categoryProducts});
           }
           else{
               return res.render('erro', {user:req.session.user, message:'não encontramos esta categoria'});
           }
        } catch (error){
            return res.render('erro', {user:req.session.user, message:'não encontramos esta categoria'});
        }
    },
    async create(req, res, next){
        try{
            let product = {...req.body};
            await Product.create(product);
            return res.status(201).json(product)

        } catch(error){
            return res.status(400).json({message:'Error: ' + error.messege})
        }
    },
    async createCategory(req, res, next){
        try{
            let category = {...req.body};
            console.log(category);
            await Category.create(category);
            return res.status(201).json(category)
        } catch (error){
            return res.status(400).json({message:'Error: ' + error.messege})
        }
    },
    async searchProduct(req, res, next){
        let product = req.query.productName;

        let searchProducts = await Product.findAll({where:{name:{[Sequelize.Op.like]:`%${product}%`}}}).catch(error => console.log(error));
        
        function isEmptyObject(products) {
            var name;
            for (name in products) {
              return false;
            }
            return true;
          }
          
        let vazio = isEmptyObject(searchProducts);
        
        if(!vazio){
            return res.render('mercadoGeral', {user:req.session.user, products:searchProducts})
        } else{
            res.render('erro',{message:'Não encontramos esse produto!'});
        }
    }

}