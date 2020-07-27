var express = require('express')
var router = express.Router()
const mercadoLivreController = require('../controllers/mercadoLivreController')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('mercado_livre')
});

router.post('/search', mercadoLivreController.search)


module.exports = router;
