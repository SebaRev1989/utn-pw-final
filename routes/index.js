var express = require('express');
var router = express.Router();

var mdController = require('../controllers/md_controller');
var pacController = require('../controllers/pac_controller');
var chController = require('../controllers/ch_controller');
var shiftController = require('../controllers/shift_controller');

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

/* Rutas para historias clinicas */
router.get('/ch/index/:pacId', chController.index);
router.get('/ch/newCH/:pacId', chController.newCH);
router.post('/ch/newCH/:pacId', chController.createCH);

/* Rutas para turnos */
router.get('/shifts', shiftController.index);
router.post('/shifts/enableShifts', shiftController.enableShifts);
router.get('/shifts/listShifts/:fecha', shiftController.listShifts);

module.exports = router;
