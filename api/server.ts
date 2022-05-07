import express = require('express');
import { json } from 'stream/consumers';

import { Objeto } from '../Common/Objeto';
import { ObjetoService } from './Objeto/objetoService';

var objetoService : ObjetoService = new ObjetoService();

var allowCrossDomain = function (req: any, res: any, next: any) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

var taserver = express();
taserver.use(allowCrossDomain);
taserver.use(express.json());

taserver.get('/Objetos', function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify(objetoService.buscarTodos()));
})

taserver.post('/Objeto',function(req: express.Request, res: express.Response){
  var objeto  : Objeto; 
  try{
    objeto = <Objeto>req.body;  
   }catch(error){
    res.status(400).send({ "mensagem": error.message });
   }

   try{
     objetoService.cadastrar(objeto);
     res.send({ "mensagem": "Cadastro realizado com sucesso." });
   }catch(error){
    res.status(400).send({ "mensagem": error.message });
   }

})


function stubAllObjects(): void{
  objetoService.cadastrar(new Objeto("123"));
  objetoService.cadastrar(new Objeto("123abc"));
  objetoService.cadastrar(new Objeto("Julio123")); 
}

var server = taserver.listen(3003, function () { 
  stubAllObjects();
  console.log('Correios 3003!');
})


