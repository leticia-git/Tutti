const bcrypt = require('bcrypt');
const {User} = require('../../models')


module.exports = {
  create(req, res, next){
    res.render('create-user');
  },

  async save(req, res, next){
 
    /*  criptografando a senha */
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

    /* criando objeto para enviar ao Banco de dados */
    let user = { ...req.body };
    
    /* adicionando objeto dentro do Banco de dados */
    await User.create(user).catch(err=>console.log(err))

    res.render('create-user', { added: true });
  },
 
  login(req, res, next){
    res.render('login');
  },

  async authenticate(req, res, next){
    let { email, password } = req.body;
    let user = await User.findOne({where:{email}});

    if(!user){
      return res.render('login', { notFound: true });
    }

    if(!bcrypt.compareSync(password, user.password)){
      return res.render('login', { notFound: true });
    }
    
    // removendo propriedade password para que o usuario logado nao trafegue com sua senha
    user.password = undefined 

    // criando sessao contendo informacoes do usuario que ira se logar
    req.session.user = user;

    res.redirect("/")
    //res.render('index', { user: req.session.user });
  },

  logout(req, res, next){
    req.session.destroy();
    res.redirect('/');
  }
}