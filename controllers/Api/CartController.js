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

    }
}