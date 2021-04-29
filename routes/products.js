var express = require('express');
var router = express.Router();

var ProductController = require('../controllers/Api/ProductControler');

router.post('/create', ProductController.create);
router.get('/', ProductController.index);
router.get('/:id', ProductController.productById)

module.exports = router;