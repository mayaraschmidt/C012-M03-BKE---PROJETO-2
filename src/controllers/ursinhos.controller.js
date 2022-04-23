const ursinhosService = require('../services/ursinhos.service');

const findUrsinhosController = (req,res) => {
    const allUrsinhos = ursinhosService.findUrsinhosService();
    res.send("allUrsinhos");
  };

  const findUrsinhosByIdController = (req, res) => {
    const idParam = req.params.id;
    const chosenUrsinhos = ursinhosService.findUrsinhosByIdService(idParam);
    res.send(chosenUrsinhos);
  };
  
  const createUrsinhosController = (req, res) => {
    const ursinhos = req.body;
    const newUrsinhos = ursinhosService.createUrsinhosService(ursinhos);
    res.send(newUrsinhos);
  };
  
  const updateUrsinhosController = (req, res) => {
    const idParam = +req.params.id;
    const ursinhosEdit = req.body;
    const updatedUrsinhos = ursinhosService.updateUrsinhosService(idParam, ursinhosEdit);
    res.send(updatedUrsinhos);
  };
  
  const deleteUrsinhosController = (req, res) => {
    const idParam = req.params.id;
    ursinhosService.deleteUrsinhosService(idParam);
    res.send({ message: 'O Coração Gelado deletou seu Ursinho com sucesso!' });
  };
  
  module.exports = {
    findUrsinhosController,
    findUrsinhosByIdController,
    createUrsinhosController,
    updateUrsinhosController,
    deleteUrsinhosController,
  };
