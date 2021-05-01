const {Product, Category} = require('../../models');


module.exports = {
    async index(req, res, next){
       try { 
           let products = await Product.findAll({
               include:'provider'
           })
           let productActive = products.filter(products => products.provider.status === 1)
            return res.status(200).json(productActive)
        }
        catch(error) {
            return res.status(400).json({message:'Error: ' + error.message})
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
                res.send('A pagina para esse produto não exite')
            }
        }
        catch(error) {
            return res.render('error', {message:'Error: ' + error.message})
        }
    },
    async category(req, res, next){
        try{
            let id = req.params.id
            let category = await Product.findAll({
                where:{
                    categoryId:id
                }
            })
            return res.status(200).json(category)
        } catch (error){
            return res.status(400).json({messege: error})
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

        let searchProducts = await Product.findAll({where:{name:product}}).catch(error => console.log(error));
        
        function isEmptyObject(products) {
            var name;
            for (name in products) {
              return false;
            }
            return true;
          }
          
        let vazio = isEmptyObject(searchProducts);
        
        if(!vazio){
            res.send(searchProducts)
        } else{
            res.render('erro')
        }
    }

}