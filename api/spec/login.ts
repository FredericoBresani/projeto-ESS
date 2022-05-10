import request = require("request-promise");
import { closeServer } from '../server';
import { PedidoService } from '../cadastro-pedidos/pedido.service';
import { environment } from '../../correios/src/environments/environment';
import { LoginService } from "../../correios/src/app/login/login.service";

const endPoint = environment.API_URL;

describe("O Login", () => {
  var cadastroPedido: PedidoService;

  var server: any;

  beforeAll(() => {
    server = require("../server")
  });

  afterAll(() => {server.closeServer()});

  beforeEach(() => cadastroPedido = new PedidoService())

  it("Login correto", () =>{
    var requestLogin:any = {
        method: 'POST', 
        uri: (endPoint+'/login'), 
        body:{
          nick: 'pedro',
          senha: '123',
          auth: false,
          token: '',
          role: '',                   
        },
        json: true,
      }
      return request(requestLogin).then(body => expect(body.token).toEqual(!""));
  })

  it("Login incorreto", () =>{   
    
    var requestLogin:any = {
        method: 'POST', 
        uri: (endPoint+'/login'), 
        body:{
          nick: 'pedro',
          senha: '12343',
          auth: false,
          token: '',
          role: '',                   
        },
        json: true,
    }    
    return request(requestLogin).then(body => expect(body.token).toEqual(""));
  })

  

})