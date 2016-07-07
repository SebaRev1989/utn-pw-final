var express = require('express');
var router = express.Router();

var mdController = require('../controllers/md_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sistema de Turnos' });
});

/* Rutas para medicos */
router.get('/mds', mdController.index);

module.exports = router;
