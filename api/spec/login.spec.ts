import request = require("request-promise");
import { closeServer } from '../server';
import { PedidoService } from '../cadastro-pedidos/pedido.service';
import { environment } from '../../correios/src/environments/environment';


const endPoint = environment.API_URL;

describe("O Login", () => {
  

  var server: any;

  beforeAll(() => {
    server = require("../server")
  });

  afterAll(() => {server.closeServer()});

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