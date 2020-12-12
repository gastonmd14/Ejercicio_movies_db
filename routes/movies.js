var express = require('express');
var router = express.Router();

const peliculaController = require('../controllers/peliculaController');

/* GET home page. */
router.get('/', peliculaController.index);

// Show Movies

router.get('/show', peliculaController.show)

router.get('/new', peliculaController.new)

router.get('/recommended', peliculaController.recommended)

router.get('/search', peliculaController.search)

// Create Movie

router.get('/create', peliculaController.create)

router.post('/create', peliculaController.store)

// Detail Movie

router.get('/:id', peliculaController.detail)

// Edit Movie

router.get('/:id/edit', peliculaController.edit)

router.put('/:id', peliculaController.update)

// Delete Movie

router.delete('/:id', peliculaController.delete)

module.exports = router;