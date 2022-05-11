import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;


defineSupportCode(function({Given, When, Then}) {
  Given(/^eu estou na pagina de login e efetuo meu login com nome: "([^\"]*)" e senha: "([^\"]*)"$/, async (nome, senha) => {
    await browser.get("http://localhost:4200/");
    await expect(browser.getTitle()).to.eventually.equal("Login");
    await $("input[name='login']").sendKeys(<string> nome);
    await $("input[name='senha']").sendKeys(<string> senha);
    await $("button[name='submit']").click();
  })

  Given(/^Estou na tela de entrega$/, async () => {
    await browser.get("http://localhost:4200/#/correios/entrega");
    await expect(browser.getTitle()).to.eventually.equal("Correios");
  })

  When(/^Adiciono os produtos a entrega$/, async () => {
    await expect(browser.getTitle()).to.eventually.equal("Correios");
    await $("button[name='adicionar']").click();
    await $("button[name='adicionar']").click();
    await $("button[name='adicionar']").click();
    
  })

  When(/^Remove um produto da entrega$/, async () => {
    await expect(browser.getTitle()).to.eventually.equal("Correios");
    await $("button[name='remover']").click();    
  })

  Given(/^Given Fecha a entrega$/, async () => {
    await expect(browser.getTitle()).to.eventually.equal("Correios");
    await $("button[name='remover']").click();    
  })

  
  
})
