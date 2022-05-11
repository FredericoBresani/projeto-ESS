import request = require("request-promise");
import { closeServer } from '../server';
import { RastreioService } from '../rastreio-pacote/rastreio.service';
import { environment } from '../../correios/src/environments/environment';

const endPoint = environment.API_URL;

describe("o rastreio de pacote", () => {
  var RastreioPacote: RastreioService;
  var server: any;

  beforeAll(() => { server = require("../server") }); //executa antes de toda requisicao ao servidor
  afterAll(() => {server.closeServer()});

  beforeEach(() => RastreioPacote = new RastreioService());

  it("cadastra o pedido", () => {
    var requestOptions:any = {
    method: 'POST', 
    uri: (endPoint+'/pedidos'), 
    body:{
            numero_cartao: '654789',
            nome: 'weslley',
            nome_pedido: 'weslley - pedido',
            cpf: '123',
            cod_seguranca: 357,
            cep: '36655',
            peso_produto: 35,
            data_envio: new Date(),
            tempo_entrega: new Date(),
            preco_total: 100,
            estado_atual: ['PE'],
            endereco_entrega: 'Rua cruzeiro',
            opcoes: ['rapida'],
        },
      json: true,
    }

    return request(requestOptions).then(body => expect(body.nome).toEqual(requestOptions.body.nome));
  })

  it(" visualiza os pedidos", () => {
    return request.get(endPoint+'/rastreamento-pacote');
  })
})