import express = require('express');
import { json } from 'stream/consumers';
const jwt = require('jsonwebtoken');
const SECRET = "%3sut&*asd23%$";
const usuarios = [{nick:"wilson", senha:"123", role:"admin"},
                  {nick:"pedro", senha:"123", role:"client"},
                  {nick:"fred", senha:"123456", role:"client"}
                ]


// classes
import { Objeto } from '../Common/Objeto';
import { Pedido } from '../Common/pedido';
import { Usuario } from '../Common/Usuario'

// services
import { ObjetoService } from './Objeto/objetoService';
import { PedidoService } from './cadastro-pedidos/pedido.service';
// import { LoginService } from './login/login.service';

var objetoService : ObjetoService = new ObjetoService();
var pedidoService: PedidoService = new PedidoService();
// var loginService: LoginService = new LoginService();

var allowCrossDomain = function (req: any, res: any, next: any) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

var taserver = express();
taserver.use(allowCrossDomain);
taserver.use(express.json());

// Objetos

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

//Login
taserver.post('/login',function(req: express.Request, res: express.Response){ 
  
  var userLogin = req.body.nick;  
  var userSenha = req.body.senha;
  var user = usuarios.find(x => x.nick === userLogin && x.senha === userSenha)
  //36.000 = 10 horas

  if(user != null){
    
    const token = jwt.sign({role : user.role}, SECRET, {expiresIn: 90} )    
    const usuario = new Usuario(user.nick, "", true, token, user.role);
    return res.send(JSON.stringify(usuario)) 
    
  }
  else{
    const retornoFail = new Usuario("", "", false, "", "");
    return res.send(JSON.stringify(retornoFail)); 
  }

})

taserver.post('/logout',function(req: express.Request, res: express.Response){  
  res.end;
})

//End Login

function stubAllObjects(): void{
  objetoService.cadastrar(new Objeto("123"));
  objetoService.cadastrar(new Objeto("123abc"));
  objetoService.cadastrar(new Objeto("Julio123")); 
}

var server = taserver.listen(3003, function () { 
  stubAllObjects();
  console.log('Correios 3003!');
})


function closeServer(): void {
  server.close();
}


export { taserver, server, closeServer }
