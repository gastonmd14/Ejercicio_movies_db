var express = require('express');
var router = express.Router();

const peliculaController = require('../controllers/peliculaController');

/* GET home page. */
router.get('/', peliculaController.index);

router.get('/movies', peliculaController.show)

router.get('/movies/new', peliculaController.new)

router.get('/movies/recommended', peliculaController.recommended)

router.get('/movies/search', peliculaController.search)

router.get('/movies/create', peliculaController.create)

router.post('/movies/create', peliculaController.store)

router.get('/movies/:id', peliculaController.detail)

router.get('/movies/:id/edit', peliculaController.edit)

router.post('/movies/:id', peliculaController.update)

router.post('/movies/:id', peliculaController.delete)

module.exports = router;
