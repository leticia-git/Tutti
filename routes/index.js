const express = require('express');
const router = express.Router();

const ProviderController = require('../controllers/Api/ProviderController');
const ProductController = require('../controllers/Api/ProductControler');

const userRouter = require('./user');
const productRouter = require('./products')
const categoryRouter = require('./category')
const loginRouter = require('./login');
const recipesRouter = require('./recipes');
const frutaRouter = require('./fruta');
const legumesRouter = require('./legumes');
const verdurasRouter = require('./verduras');
const mercadoARouter = require ('./mercadoA');
const mercadoBRouter = require ('./mercadoB');
const mercadoCRouter = require ('./mercadoC');
const cartRouter = require ('./cart');
const checkoutRouter = require ('./checkout');
const confirmationRouter = require ('./confirmation');
const erroRouter = require ('./erro');
const clientRouter = require ('./client');
/* GET home page. */

router.get('/', ProductController.index);
router.get('/contact', function(req,res){
    res.render('contact', {user: req.session.user})
})
router.get('/us', function(req, res, next) {
  res.render('us', {user: req.session.user});
}); 
router.get('/search', ProductController.searchProduct)
router.post('/provider/create', ProviderController.create);



router.use('/login', loginRouter);
router.use('/product', productRouter);
router.use('/category', categoryRouter)
router.use('/recipes', recipesRouter);
router.use('/users', userRouter);
router.use('/fruta', frutaRouter);
router.use('/legumes', legumesRouter);
router.use('/verduras', verdurasRouter);
router.use('/mercadoA', mercadoARouter);
router.use('/mercadoB', mercadoBRouter);
router.use('/mercadoC', mercadoCRouter);
router.use('/cart', cartRouter);
router.use('/checkout', checkoutRouter);
router.use('/confirmation', confirmationRouter);
router.use('/erro', erroRouter);
router.use('/client', clientRouter);
module.exports = router;