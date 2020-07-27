var express = require('express')
var router = express.Router()
const imdbController = require('../controllers/imdbController')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('imdb')
});

router.get('/top_rated_movies', imdbController.topRatedMovies)


module.exports = router;
