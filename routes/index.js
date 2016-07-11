var express = require('express');
var router = express.Router();

var mdController = require('../controllers/md_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* Rutas para medicos */
router.get('/mds', mdController.index);
router.get('/mds/newMD', mdController.newMD);
router.post('/mds/newMD', mdController.createMD);
router.get('/mds/delete/:medId', mdController.deleteMD);

module.exports = router;
