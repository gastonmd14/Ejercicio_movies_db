var express = require('express');
var router = express.Router();

const actorController = require('../controllers/actorController');

/* GET home page. */
router.get('/', actorController.index);

// Show Movies

router.get('/show', actorController.show)

// router.get('/movies/new', peliculaController.new)

// router.get('/movies/recommended', peliculaController.recommended)

// router.get('/movies/search', peliculaController.search)

// Create Movie

// router.get('/movies/create', peliculaController.create)

// router.post('/movies/create', peliculaController.store)

// Detail Movie

router.get('/:id', actorController.detail)

// Edit Movie

// router.get('/:id/edit', generoController.edit)

// router.put('/:id', generoController.update)

// Delete Movie

// router.delete('/movies/:id', peliculaController.delete)

module.exports = router;