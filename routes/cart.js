var express = require('express');
var router = express.Router();
const cartController = require('../controllers/Api/CartController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cart');
}); 
router.get('/cupom/:name', cartController.cupom)
router.post('/cupom/create', cartController.create )

module.exports = router;