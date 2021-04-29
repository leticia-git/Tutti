const {Product, Category} = require('../../models');


module.exports = {
    async index(req, res, next){
       try { 
           let products = await Product.findAll({
               include:'provider'
           })
            return res.status(200).json(products)
        }
        catch(error) {
            return res.status(400).json({message:'Error: ' + error.message})
        }
    },
    
    async productById(req, res, next){
       try{
           let {id} = req.params
           let product = await Product.findByPk(id,{include:'provider'})
            return res.status(200).json(product)
        }
        catch(error) {
            return res.status(400).json({message:'Error: ' + error.message})
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
    }

}