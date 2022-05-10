import request = require("request-promise");
import { closeServer } from '../server';
import { PedidoService } from '../cadastro-pedidos/pedido.service';
import { environment } from '../../correios/src/environments/environment';

const endPoint = environment.API_URL;

describe("O Cadastro de pedidos", () => {
  var cadastroPedido: PedidoService;

  var server: any;

  beforeAll(() => {
    server = require("../server")
  });

  afterAll(() => {server.closeServer()});

  beforeEach(() => cadastroPedido = new PedidoService())

  it("é inicialmente vazio", () => {
    return request.get(endPoint+'/pedidos').then(pedidos => expect(pedidos).toEqual("[]"));
  })

  it("cadastra pedidos corretamente", () => {
    var requestOptions:any = {
      method: 'POST', 
      uri: (endPoint+'/pedidos'), 
      body:{
        numero_cartao: '98765',
        nome: 'fred',
        nome_pedido: 'fred - pedido',
        cpf: '7894',
        cod_seguranca: 987,
        cep: '9874',
        peso_produto: 74,
        data_envio: new Date(),
        tempo_entrega: new Date(),
        preco_total: 100,
        estado_atual: ['PE'],
        endereco_entrega: 'minha rua',
        opcoes: ['rapida'],
      },
      json: true,
    }

    return request(requestOptions).then(body => expect(body.nome).toEqual(requestOptions.body.nome));
  })

  it("não aceita pedidos sem CPF", () => {
    var requestOptions:any = {
      method: 'POST', 
      uri: (endPoint+'/pedidos'), 
      body:{
        numero_cartao: '98765',
        nome: 'fred',
        nome_pedido: 'fred - pedido',
        cod_seguranca: 987,
        cep: '9874',
        peso_produto: 74,
        data_envio: new Date(),
        tempo_entrega: new Date(),
        preco_total: 100,
        estado_atual: ['PE'],
        endereco_entrega: 'minha rua',
        opcoes: ['rapida'],
      },
      json: true,
    }

    return request(requestOptions).then(body => expect(body).toEqual(null));
  })

})