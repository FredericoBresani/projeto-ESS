import request = require("request-promise");
import { closeServer } from '../server';
import { environment } from '../../correios/src/environments/environment';

const endPoint = environment.API_URL;

describe("Cadastrar Produto e finalizar entrega", () => {
  var server: any;
  beforeAll(() => {
    server = require("../server")
  });

  afterAll(() => {server.closeServer()});

  it("Cadastrar Objeto", () =>{
    var requestLogin:any = {
      method: 'POST', 
      uri: (endPoint+'/Objeto/Aberto'), 
      body:{
       codigo:"123"             
      },
      json: true,
    }
      return request(requestLogin).then(body => expect(body.mensagem).toEqual("Obj Empacotado."));
  })

  
  it("Finalizar Entrega", () =>{
    var requestLogin:any = {
      method: 'POST', 
      uri: (endPoint+'/Objeto/Aberto'), 
      body:{},
      json: true,
    }
      return request(requestLogin).then(body => expect(body.mensagem).toEqual("Entrega criada com sucesso."));
  })

})



describe("Finalizar entrega sem nenhum produto", () => {
  var server: any;
  beforeAll(() => {
    server = require("../server")
  });

  afterAll(() => {server.closeServer()});
   
  it("Finalizar Entrega", () =>{
    var requestLogin:any = {
      method: 'POST', 
      uri: (endPoint+'/Objeto/Aberto'), 
      body:{},
      json: true,
    }
      return request(requestLogin).then(body => expect(body.mensagem).toEqual("Não é possível finalizar entrega sem produtos"));
  })

})