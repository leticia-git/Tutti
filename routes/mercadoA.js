var express = require('express');
var router = express.Router();
const cards = require('../data/card')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mercadoA', {cards: cards, user:req.session.user});
}); 

module.exports = router;