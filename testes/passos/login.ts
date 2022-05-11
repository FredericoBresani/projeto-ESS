import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function({Given, When, Then}) {

    Given(/^estou na tela de login$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal("Login");
      })

    When(/^preencho os campos de login com nome: "([^\"]*)" e senha: "([^\"]*)"$/, async (nome, senha) => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal("Login");
        await $("input[name='login']").sendKeys(<string> nome);
        await $("input[name='senha']").sendKeys(<string> senha);
        await $("button[name='submit']").click();
    })

    Then(/^sou autenticado e entro no sistema$/, async () => {
        await browser.get("http://localhost:4200/#/correios");
        await expect(browser.getTitle()).to.eventually.equal("Correios");
    })

    Given(/^estou na tela para fazer login$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal("Login");
      })

    When(/^preencho os campos de com nome: "([^\"]*)" e senha: "([^\"]*)"$/, async (nome, senha) => {
        await $("input[name='login']").sendKeys(<string> nome);
        await $("input[name='senha']").sendKeys(<string> senha);
        await $("button[name='submit']").click();
    })

    Then(/^informacoes do login estao erradas$/, async () => {        
        await expect(browser.getTitle()).to.eventually.equal("Login");
    })
})