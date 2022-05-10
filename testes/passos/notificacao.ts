import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function({Given, When, Then}) {
  Given(/^o pedido é cadastrado com nome "fred - pedido" e a aplicação é redirecionada para a página de pedidos$/, async () => {
    await browser.get("http://localhost:4200/#/correios/pedidos");
    await expect(browser.getTitle()).to.eventually.equal("Correios");
  })
  When(/^o pedido é atualizado na página de rotas ao pressionar o botão "Atualizar Caminho"$/, async () => {
    await browser.get("http://localhost:4200/#/correios/rota");
    await element(by.name('botaoAtualizar')).click();
  })
  Then(/^o pedido é atualizado na página de rotas e aparece um dialog informando que o pacote "([^\"]*)" agora está em Goias$/, async (nome_pedido) => {
    await expect(element(by.name("dialog")).getText()).to.eventually.equal("Atualização sobre o seu pacote " + nome_pedido);
    await expect(element(by.name("dialog")).getText()).to.eventually.equal("Seu pacote está na unidade de tratamento em Goias");
    //await expect(browser.getRoles()).to.equal("dialog");
    })
   Then(/^o pedido é atualizado na página de rotas e aparece um dialog informando que o pacote "([^\"]*)" agora está em Bahia$/, async (nome_pedido) => {
    await browser.get("http://localhost:4200/#/correios/rota");
    await element(by.name('botaoAtualizar')).click();
    await expect(element(by.name("dialog")).getText()).to.eventually.equal("Atualização sobre o seu pacote " + nome_pedido);
    await expect(element(by.name("dialog")).getText()).to.eventually.equal("Seu pacote está na unidade de tratamento em Bahia");
    //await expect(browser.getRoles()).to.equal("dialog");
    })
   Then(/^o pedido é atualizado na página de rotas e aparece um dialog informando que o pacote "([^\"]*)" agora está em Pernambuco$/, async (nome_pedido) => {
    await browser.get("http://localhost:4200/#/correios/rota");
    await expect(element(by.name("dialog")).getText()).to.eventually.equal("Atualização sobre o seu pacote " + nome_pedido);
    await expect(element(by.name("dialog")).getText()).to.eventually.equal("Seu pacote está na unidade de tratamento em Pernambuco");
    //await expect(browser.getRoles()).to.equal("dialog");
    })
})