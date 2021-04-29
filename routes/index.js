var express = require('express');
var router = express.Router();


var ProviderController = require('../controllers/Api/ProviderController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tutti', user: req.session.user });
});

router.post('/provider/create', ProviderController.create);

var userRouter = require('./user');
var productRouter = require('./products')
var categoryRouter = require('./category')
var loginRouter = require('./login');
var recipesRouter = require('./recipes');
var usRouter = require('./us');
var contactRouter = require('./contact');
var frutaRouter = require('./fruta');
var legumesRouter = require('./legumes');
var verdurasRouter = require('./verduras');
var mercadoARouter = require ('./mercadoA');
var mercadoBRouter = require ('./mercadoB');
var mercadoCRouter = require ('./mercadoC');
var cartRouter = require ('./cart');
var checkoutRouter = require ('./checkout');
var confirmationRouter = require ('./confirmation');

router.use('/login', loginRouter);
router.use('/product', productRouter);
router.use('/category', categoryRouter)
router.use('/recipes', recipesRouter);
router.use('/us', usRouter);
router.use('/users', userRouter);
router.use('/contact', contactRouter);
router.use('/fruta', frutaRouter);
router.use('/legumes', legumesRouter);
router.use('/verduras', verdurasRouter);
router.use('/mercadoA', mercadoARouter);
router.use('/mercadoB', mercadoBRouter);
router.use('/mercadoC', mercadoCRouter);
router.use('/cart', cartRouter);
router.use('/checkout', checkoutRouter);
router.use('/confirmation', confirmationRouter);


module.exports = router;