const express = require('express');
const router = express.Router();

const ursinhosController = require('../controllers/ursinhos.controller');

router.get('/ursinhos.service', ursinhosController.homeUrsinhosController);
router.get('/find-ursinhos', ursinhosController.findUrsinhosController);
router.get('/find-ursinhos/:id', ursinhosController.findUrsinhosByIdController);

router.post('/add',ursinhosController.addUrsinhosController);

router.delete('/delete',);

module.exports = router;
