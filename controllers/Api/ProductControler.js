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
            if(product !== undefined){
                let provider = product.providerId
                let vendorProducts = await Product.findAll({where:{providerId:provider}})
                let vendorSugestion = vendorProducts.filter(products=>products.id !== vendorProducts.id )
                console.log(vendorSugestion)
                return res.render('product',{user: req.session.user, product:product, vendor:vendorSugestion})
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
        console.log('\n\n', product,'\n\n');
        let searchProducts = await Product.findAll({where:{name:product}}).catch(error => console.log(error));
        if(searchProducts !== undefined){
            res.send(searchProducts)
        } else{
            res.send('o produto que vc procura não foi encontrado!')
        }
    }

}