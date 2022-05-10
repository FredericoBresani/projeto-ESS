import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function({Given, When, Then}) {
  Given(/^na pagina de login e efetuo meu login com nome: "([^\"]*)" e senha: "([^\"]*)"$/, async (nome, senha) => {
    await browser.get("http://localhost:4200/");
    await expect(browser.getTitle()).to.eventually.equal("Login");
    await $("input[name='login']").sendKeys(<string> nome);
    await $("input[name='senha']").sendKeys(<string> senha);
    await $("button[name='submit']").click();
  })

  Given(/^na página cadastro de pedido$/,async () => {
    await browser.get("http://localhost:4200/#/correios/cadastrar-pedido");
    await expect(browser.getTitle()).to.eventually.equal("Correios");
  })

  Given(/^os campos não estão preenchidos$/, async () => {
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

  When(/^preencho todos os campos necessários, considerando nome do pedido como "([^\"]*)" e aperto em confirmar pedido$/, async (nome_pedido) => {
    await $("input[name='numero_cartao']").sendKeys('0000');
    await $("input[name='nome']").sendKeys('pedro');
    await $("input[name='cod_seguranca']").sendKeys(133);
    await $("input[name='cpf']").sendKeys('51241');
    await $("input[name='cep']").sendKeys('6541');
    await $("input[name='nome_pedido']").sendKeys(<string> nome_pedido);
    await $("input[name='peso']").sendKeys(10);
    await $("input[name='endereco']").sendKeys('PE');
    await $("select[name='opcoes']").sendKeys('Entrega Rapida');
    await element(by.name('submit')).click();
  })

  Then(/^o pedido é devidamente cadastrado com nome "pedro - TV LCD" e a aplicação é redirecionada para a página de pedidos$/, async () => {
    await browser.get("http://localhost:4200/#/correios/pedidos");
    await expect(browser.getTitle()).to.eventually.equal("Correios");
  })
  Then(/^o pedido é atualizado na página de rotas ao pressionar o botão "Atualizar Caminho"$/, async () => {
    await browser.get("http://localhost:4200/#/correios/rota");
    await element(by.name('botaoAtualizar')).click();
  })
  Then(/^o pedido é atualizado na página de rotas e aparece um dialog informando que o pacote "([^\"]*)" agora está em "Goias"$/, async (nome_pedido) => {
    await expect(element(by.name("dialog")).getText()).to.eventually.equal("Atualização sobre o seu pacote " + nome_pedido);
    await expect(element(by.name("dialog")).getText()).to.eventually.equal("Seu pacote está na unidade de tratamento em Goias");
    //await expect(browser.getRoles()).to.equal("dialog");
    })
   Then(/^o pedido é atualizado na página de rotas e aparece um dialog informando que o pacote "([^\"]*)" agora está em "Bahia"$/, async (nome_pedido) => {
    await browser.get("http://localhost:4200/#/correios/rota");
    await element(by.name('botaoAtualizar')).click();
    await expect(element(by.name("dialog")).getText()).to.eventually.equal("Atualização sobre o seu pacote " + nome_pedido);
    await expect(element(by.name("dialog")).getText()).to.eventually.equal("Seu pacote está na unidade de tratamento em Bahia");
    //await expect(browser.getRoles()).to.equal("dialog");
    })
   Then(/^o pedido é atualizado na página de rotas e aparece um dialog informando que o pacote "([^\"]*)" agora está em "Pernambuco"$/, async (nome_pedido) => {
    await browser.get("http://localhost:4200/#/correios/rota");
    await expect(element(by.name("dialog")).getText()).to.eventually.equal("Atualização sobre o seu pacote " + nome_pedido);
    await expect(element(by.name("dialog")).getText()).to.eventually.equal("Seu pacote está na unidade de tratamento em Pernambuco");
    //await expect(browser.getRoles()).to.equal("dialog");
    })
})