const db = require('../database/models')

const { Op } = require('sequelize')


module.exports = {
  index: function(req, res, next) {
      res.render('index', { title: 'DH Movies' });
    }
}