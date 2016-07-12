var express = require('express');
var router = express.Router();

var mdController = require('../controllers/md_controller');
var pacController = require('../controllers/pac_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* Rutas para medicos */
router.get('/mds', mdController.index);
router.get('/mds/newMD', mdController.newMD);
router.post('/mds/newMD', mdController.createMD);
router.get('/mds/delete/:medId', mdController.deleteMD);
router.get('/mds/update/:medId', mdController.updateMD);
router.post('/mds/update/:medId', mdController.saveMDupdate);

/* Rutas para pacientes */
router.get('/patients', pacController.index);
router.get('/patients/newPac', pacController.newPac);
router.post('/patients/newPac', pacController.createPac);
router.get('/patients/delete/:pacId', pacController.deletePac);
router.get('/patients/update/:pacId', pacController.updatePac);
router.post('/patients/update/:pacId', pacController.savePacUpdate);

module.exports = router;
