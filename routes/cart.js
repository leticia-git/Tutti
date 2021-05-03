var express = require('express');
var router = express.Router();
const cartController = require('../controllers/Api/CartController')
/* GET home page. */
router.get('/', cartController.index);
router.post('/addItem', cartController.addItem)
router.get('/cupom/:name', cartController.cupom)
router.post('/cupom/create', cartController.create )

module.exports = router;