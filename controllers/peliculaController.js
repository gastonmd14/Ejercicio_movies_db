const db = require('../database/models')

const { Op } = require('sequelize')


module.exports = {
  index: function(req, res, next) {
      res.render('movies/index', { title: 'DH Movies' });
    },
  
  show: function (req, res) {
    // devolver todas las peliculas
    db.Pelicula.findAll()
      .then((resultado) => {
        res.render('movies/show', { movies: resultado })
      })
      .catch(function(error){
        console.log(error);
      })   
    },
  
  new: function (req, res) {
    // buscar la lista de todos los generos para visualizar en el formulario
    db.Pelicula.findAll({
      order: [['release_date', 'ASC']],
      limit: 5
    }).then((resultado) => {
      res.render('movies/new', {movies: resultado})
    })
    .catch(function(error){
      console.log(error);
    })  
    },

  recommended: function (req, res) {
    // buscar la lista de todos los generos para visualizar en el formulario
    db.Pelicula.findAll({
      where: {
        rating:{
          [Op.gte]: 8
        }
      }   
    }).then((resultado) => {
      res.render('movies/new', {movies: resultado})
    })
    .catch(function(error){
      console.log(error);
    })  
    },

  search: function (req, res) {  
    db.Pelicula.findAll({
      where: {
        title:{
          [Op.substring]:  req.query.keywords
        }
      }   
    }).then((resultado) => {
      res.render('movies/search', {movie: resultado})
    }) 
    .catch(function(error){
      console.log(error);
    }) 
    },

  create: function (req, res) {
    db.Genero.findAll({})
      .then((resultado) => {
        res.render('movies/create', {genres: resultado})
    })
    .catch(function(error){
      console.log(error);
    }) 
  },

  store: function (req, res) {      
    db.Pelicula.create({
      title: req.body.title,
      rating: req.body.rating,
      awards: req.body.awards,
      release_date: req.body.release_date,
      length: req.body.length,
      genre_id: req.body.genre_id
    })
    .catch(function(error){
      console.log(error);
    }) 
    res.redirect('/movies')
  },

  detail: function (req, res) {
    // devolver solo la pelicula especificada por el id
    db.Pelicula.findByPk(req.params.id, {
      include: [
        {association: 'genero'},
        {association: 'actores'}
    ]})
      
    .then((resultado) => {
      console.log(resultado);
      res.render('movies/detail', { movie: resultado })
    })
    .catch(function(error){
      console.log(error);
    })   
    },
  

  edit: function (req, res) {
    let moviesResults = db.Pelicula.findByPk(req.params.id)
    let genresResults = db.Genero.findAll()
    let actorsResults = db.Actor.findAll()
 
    Promise.all([moviesResults, genresResults, actorsResults])
      .then(function([movies, genres, actors]) {
        res.render('movies/edit', {
              genres : genres,    
              movie : movies,
              actor: actors
        })                
      })
      .catch(function(error){
        console.log(error);
      })                    
    },

  update: function (req, res) {
    db.Pelicula.update({
      title: req.body.title,
      rating: req.body.rating,
      awards: req.body.awards,
      release_date: req.body.release_date,
      length: req.body.length,
      genre_id: req.body.genre_id
    }, {     
        where: {
          id: req.params.id
        }
      })
    .catch(function(error){
      console.log(error);
    })      
      res.redirect('/movies/' + req.params.id)
    },

  delete: function (req, res) {
    // devolver solo la pelicula especificada por el id
    db.Pelicula.destroy({
      where: {
        id: req.params.id
      }
    })
    
    .catch(function(error){
      console.log(error);
    })
      res.redirect('/movies')
    }

}

