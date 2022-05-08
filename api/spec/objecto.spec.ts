import request = require("request-promise");
import { closeServer } from '../server';

var localHost = "http://localhost:3003/";

describe("Server",() => {
  var server:any;
  
  var teste = 1
  beforeAll(() => {
    server = require("../server")
  });
  
  afterAll(() => {server.closeServer()});

  it("teste do teste", () => {
      return expect(teste).toEqual(1);
  });
  


});

