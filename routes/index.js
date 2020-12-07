var express = require('express');
var router = express.Router();

const peliculaController = require('../controllers/peliculaController');

/* GET home page. */
router.get('/', peliculaController.index);

// Show Movies

router.get('/movies', peliculaController.show)

router.get('/movies/new', peliculaController.new)

router.get('/movies/recommended', peliculaController.recommended)

router.get('/movies/search', peliculaController.search)

// Create Movie

router.get('/movies/create', peliculaController.create)

router.post('/movies/create', peliculaController.store)

// Detail Movie

router.get('/movies/:id', peliculaController.detail)

// Edit Movie

router.get('/movies/:id/edit', peliculaController.edit)

router.put('/movies/:id', peliculaController.update)

// Delete Movie

router.delete('/movies/:id', peliculaController.delete)

module.exports = router;
