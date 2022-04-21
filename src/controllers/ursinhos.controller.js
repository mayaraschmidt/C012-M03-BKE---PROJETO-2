const ursinhosService = require('../services/ursinhos.service');

const homeursinhosController = (req,res) =>{
    res.send("home ursinhos");
  };

const findUrsinhosController = (req, res) => {
    const allUrsinhos = ursinhosService.findUrsinhosService();
    res.send(allUrsinhos);
  };

  const findUrsinhosByIdController = (req, res) => {
    const idParam = req.params.id;
    const chosenUrsinhos = ursinhosService.findUrsinhosByIdService(idParam);
    res.send(chosenUrsinhos);
  };

  const addUrsinhosController = (req,res) => {
    let retorno;
  
    if(req.body.id){
      retorno = ursinhosService.addUrsinhosService(req.body);
    }else{
      res.send({erro: 'id é obrigatório'});
    }
    if(retorno == 'ok'){
      res.send({message:'Ursinho cadastrado com sucesso!'});
    }else{
      res.send('ops, houve um erro, Ursinho nao foi cadastrado');
    }
  };

  module.exports = {
    homeUrsinhoController,
    findUrsinhoController,
    findUrsinhoByIdController,
    addUrsinhoController,
  };
