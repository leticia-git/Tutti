var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mercadoC', { user: req.session.user });
}); 

module.exports = router;