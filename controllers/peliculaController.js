const db = require('../database/models')

const { Op } = require('sequelize')


module.exports = {
    index: function(req, res, next) {
        res.render('index', { title: 'DH Movies' });
      },
    
    show: function (req, res) {
        // devolver todas las peliculas
        db.Pelicula.findAll()
          .then((resultado) => {
            res.render('movies/index', { movies: resultado })
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
      },

    search: function (req, res) {
  
        db.Pelicula.findOne({
          where: {
            title:{
              [Op.like]: '%' + req.query.keywords + '%'
            }
          }   
        }).then((resultado) => {
          res.render('movies/search', {movie: resultado})
        }) 
      },

    create: function (req, res) {

    },

    store: function (req, res) {

    },

    detail: function (req, res) {
        // devolver solo la pelicula especificada por el id
        db.Pelicula.findByPk(req.params.id)
        .then((resultado) => {
          res.render('movies/show', { movie: resultado })
        })  
      },
    
    edit: function (req, res) {

        db.Pelicula.findByPk(req.params.id)
            .then((resultado) => {
                res.render('movies/edit', {
                    genres : [],
                    movie : resultado,
                  })
            })        
      },

    update: function (req, res) {
        res.redirect('/movies')
      },

    delete: function (req, res) {
        // devolver solo la pelicula especificada por el id
      }

}

