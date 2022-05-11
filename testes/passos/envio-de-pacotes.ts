import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function({Given, When, Then}) {
  Given(/^wilson - eu estou na pagina de login e efetuo meu login com nome: "([^\"]*)" e senha: "([^\"]*)"$/, async (nome, senha) => {
    await browser.get("http://localhost:4200/");
    await expect(browser.getTitle()).to.eventually.equal("Login");
    await $("input[name='login']").sendKeys(<string> nome);
    await $("input[name='senha']").sendKeys(<string> senha);
    await $("button[name='submit']").click();
  })

  Given(/^wilson - eu entro na página cadastro de pedido$/,async () => {
    await browser.get("http://localhost:4200/#/correios/cadastrar-pedido");
    await expect(browser.getTitle()).to.eventually.equal("Correios");
  })

  Given(/^wilson - os campos do cadastro, número do cartão, nome, código de segurança do cartão, CPF, CEP e etc não estão todos preenchidos$/, async () => {
    await expect($("input[name='numero_cartao']").getAttribute('value')).to.eventually.equal("");
    await expect($("input[name='nome']").getAttribute('value')).to.eventually.equal("");
    await expect($("input[name='cod_seguranca']").getAttribute('value')).to.eventually.equal('0');
    await expect($("input[name='cpf']").getAttribute('value')).to.eventually.equal("");
    await expect($("input[name='cep']").getAttribute('value')).to.eventually.equal("");
    await expect($("input[name='nome_pedido']").getAttribute('value')).to.eventually.equal("");
    await expect($("input[name='peso']").getAttribute('value')).to.eventually.equal('0');
    await expect($("select[name='opcoes']").getAttribute('value')).to.eventually.equal("");
    await expect($("input[name='endereco']").getAttribute('value')).to.eventually.equal("");
  })

  When(/^wilson - eu preencho todos os campos necessários, considerando nome do pedido como "([^\"]*)" e aperto em confirmar pedido$/, async (nome_pedido) => {
    await $("input[name='numero_cartao']").sendKeys('0568');
    await $("input[name='nome']").sendKeys('wilson - pedido');
    await $("input[name='cod_seguranca']").sendKeys(133);
    await $("input[name='cpf']").sendKeys('512410');
    await $("input[name='cep']").sendKeys('65412');
    await $("input[name='nome_pedido']").sendKeys(<string> nome_pedido);
    await $("input[name='peso']").sendKeys(10);
    await $("input[name='endereco']").sendKeys('PE');
    await $("select[name='opcoes']").sendKeys('Entrega Rapida');
    await element(by.name('submit')).click();
  })

  Then(/^wilson - o pedido é devidamente cadastrado com nome "wilson - pedido" e a aplicação é redirecionada para a página de pedidos$/, async () => {
    await expect(browser.getTitle()).to.eventually.equal("Correios");
  })
  When(/^eu me redireciono para a pagina de entregas e clico para remover uma entrega$/, async () => {
    await browser.get("http://localhost:4200/#/correios/envio-de-pacote");
    await expect(browser.getCurrentUrl()).to.eventually.equal("http://localhost:4200/#/correios/envio-de-pacote");
    await element(by.name('cancelaEntrega')).click();
  })
  Then(/^a entrega é devidamente cancelada e eu continuo na mesma página de entregas$/, async () => {
    await expect(browser.getCurrentUrl()).to.eventually.equal("http://localhost:4200/#/correios/envio-de-pacote");
  })
})