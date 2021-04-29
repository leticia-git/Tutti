var express = require('express');
var router = express.Router();

const ProductControler = require('../controllers/Api/ProductControler')

router.get('/:id', ProductControler.category)
router.post('/create', ProductControler.createCategory);

module.exports = router;