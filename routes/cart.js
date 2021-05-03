var express = require('express');
var router = express.Router();
const cartController = require('../controllers/Api/CartController')
/* GET home page. */
router.get('/', cartController.index);
router.post('/addItem', cartController.addItem)
router.get('/cupom', cartController.searchCoupon)
router.post('/cupom/create', cartController.create)
router.get('/clean/:id', cartController.limparCarrinho)
router.get('/recebido', cartController.recebido)

module.exports = router;