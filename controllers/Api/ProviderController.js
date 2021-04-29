var {Provider} = require('../../models');


module.exports = {
    async create(req, res, next){
       try{
           let provider = {...req.body}
            await Provider.create(provider);
            return res.status(201).json(provider);
       }catch(error){
           return res.status(400).json({message: 'Erro: ' + error.message});
       }
    }
}