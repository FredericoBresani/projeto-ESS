import express = require('express');
import { json } from 'stream/consumers';

// classes
import { Objeto } from '../Common/Objeto';
import { Pedido } from '../Common/pedido';
import {RetornoApi} from "../Common/RetornoApi"

// services
import { ObjetoService } from './Objeto/objetoService';
import { PedidoService } from './cadastro-pedidos/pedido.service';

var objetoService : ObjetoService = new ObjetoService();
var pedidoService: PedidoService = new PedidoService();

var allowCrossDomain = function (req: any, res: any, next: any) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
}

var taserver = express();
taserver.use(allowCrossDomain);
taserver.use(express.json());

// Objetos

taserver.get('/Objeto', function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify(objetoService.buscarTodos()));
})

taserver.post('/Objeto',function(req: express.Request, res: express.Response){
  var objeto  : Objeto; 
  var retornoApi :RetornoApi;

  try{
    objeto = <Objeto>req.body;  
   }catch(error){
     retornoApi.Status= "ERROR"
     retornoApi.Mensagem = error.message
    res.status(400).send( JSON.stringify(retornoApi) );
   }

   try{
     objetoService.cadastrar(objeto);
     retornoApi.Status= "sucesso"
     res.send({ "mensagem": "Cadastro realizado com sucesso." });
   }catch(error){
    res.status(400).send({ "mensagem": error.message });
   }
})


taserver.post('/Objeto/Empacotar',function(req: express.Request, res: express.Response){ 
  var  codigo = req.body.codigo;  
  var obj =  objetoService.trocarStatus(codigo,"EMPACOTANDO");
  res.send(JSON.stringify(obj));
    
})

taserver.post('/Objeto/Aberto',function(req: express.Request, res: express.Response){
  var  codigo = req.body.codigo; 
  console.log(codigo);
  objetoService.trocarStatus(codigo,"ABERTO");
  res.send({ "mensagem": "Obj Empacotado." });
})

taserver.post('/Objeto/fecharEntrega',function(req: express.Request, res: express.Response){
  objetoService.fecharEntrega();
  res.send({ "mensagem": "Entrega criada com sucesso." });
})


taserver.get('/Objeto/Empacotado',function(req: express.Request, res: express.Response){ 
  res.send(JSON.stringify(objetoService.buscarEmpacotados()));
})



taserver.get('/Objeto/Aberto',function(req: express.Request, res: express.Response){
  res.send(JSON.stringify(objetoService.buscarAbertos()));
})





// end Objetos


// Pedidos
taserver.get('/pedidos', function(req: express.Request, res: express.Response) {
  res.send(JSON.stringify(pedidoService.buscarTodos()));
});

taserver.get('/pedidos/pedido', function(req: express.Request, res: express.Response) {
  const pedido = <unknown>req.query as Pedido;
  try {
    const pedidoEncontrado = pedidoService.buscar(pedido);
    res.send(JSON.stringify(pedidoEncontrado));
  } catch(error) {
    res.status(400).send({"error": error.message });
  }
});

taserver.post('/pedidos', function(req: express.Request, res: express.Response) {
  console.log('pedido');
  try {
    const pedido = <Pedido>req.body;
    const pedidoRegistrado = pedidoService.cadastrar(pedido);
    res.send(JSON.stringify(pedidoRegistrado));
  } catch(error){
    res.status(400).send({ "error": error.message });
  }
});

taserver.put('/pedidos', function(req: express.Request, res: express.Response) {
  const pedido = <Pedido>req.body;
  try {
    const pedidoAtualizado = pedidoService.atualizar(pedido);
    res.send(JSON.stringify(pedidoAtualizado));
  } catch(error){
    res.status(400).send({ "error": error.message });
  }
});

taserver.delete('/pedidos', function(req: express.Request, res: express.Response) {
  try {
    const pedido = <unknown>req.query as Pedido;
    const pedidosRestantes = pedidoService.deletar(pedido);
    res.send(JSON.stringify(pedidosRestantes));
  } catch(error) {
    res.status(400).send({ "error": error.message });
  }
});

// end Pedidos


function stubAllObjects(): void{
  objetoService.cadastrar(new Objeto("123","ABERTO"));
  objetoService.cadastrar(new Objeto("123abc","ABERTO"));
  objetoService.cadastrar(new Objeto("Julio123","ABERTO")); 
}

var server = taserver.listen(3003, function () { 
  stubAllObjects();
  console.log('Correios 3003!');
})


function closeServer(): void {
  server.close();
}


export { taserver, server, closeServer }
