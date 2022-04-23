const express = require('express');
const { get } = require('express/lib/response');
const router = express.Router();

const ursinhosController = require('../controllers/ursinhos.controller');

get('/find-ursinhos', ursinhosController.findUrsinhoByIdController);
get('/find-ursinhos/:id', ursinhosController.findUrsinhoByIdController);
post('/create', ursinhosController.createUrsinhosController);
Put('/update/:id', ursinhosController.updateUrsinhoController);
delete('/delete/:id', ursinhosController.deleteUrsinhoController);

module.exports = router;
