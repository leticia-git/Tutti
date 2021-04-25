const {User, UserData, UserAddress, Card, Category, Comment, Coupon, Courier, Delivery,Order,OrderItem, Payment, Product,Recipe,ProviderAddress, Provider} = require('./models');

const findUserByData = async (userDataId) => {
        let userData = await UserData.findByPk(userDataId,{include:'user'});
        console.log('\nO numero de telefone de ',userData.user.name, ' é: ', userData.fone)
    }

const findUserByAddress = async (userAdressId) => {
    let endereco = await UserAddress.findByPk(userAdressId,{include:'user'});
    console.log('\nO usuário ',endereco.user.name,' castrastrou um endereço de ', 
    endereco.city);
}

const createCard = async (bandeira, numero, nomeCartao, validade, usuarioId) => {
    await Card.create({
        flag:bandeira, 
        cardNumber:numero, 
        cardholder:nomeCartao, 
        expiration:validade,
        userId:usuarioId
    }).then(res=>console.log('O cliente de Id= ',usuarioId,' cadastrou um cartão com sucesso')).catch(err=>console.log(err))
}

const testar1pra1ouN = async (model, alias) => {
    model.findAll({include:alias}).then((res)=>console.log('\nfuncionou!')).catch(err=>console.log('deu ruim!',err));
}
const testarTabelaPai = async (model) =>{
    model.findAll().then((res)=>console.log('\nfuncionou!')).catch(err=>console.log('deu ruim!', err));
}

testarTabelaPai(OrderItem);
testar1pra1ouN(OrderItem,'product');