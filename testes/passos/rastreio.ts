import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;


let sameCPF = ((elem, cpf) => elem.element(by.name('cpflist')).getText().then(text => text === cpf));

async function assertTamanhoEqual(set,n) {
    await set.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(n));
}
async function assertElementsWithSameCPF(n,cpf) {
    var allalunos : ElementArrayFinder = element.all(by.name('alunolist'));
    var samecpfs = allalunos.filter(elem => sameCPF(elem,cpf));
    await assertTamanhoEqual(samecpfs,n); 
}

defineSupportCode(function({Given, When, Then}) {
    /*inicio feature um*/
    Given(/^eu efetuo meu login com nome: "([^\"]*)" e senha: "([^\"]*)" na pagina de login$/, async (nome, senha) => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal("Login");
        await $("input[name='login']").sendKeys(<string> nome);
        await $("input[name='senha']").sendKeys(<string> senha);
        await $("button[name='submit']").click();
      })

    Given (/^eu entrei em cadastro de pedido$/,async () => {
        await browser.get("http://localhost:4200/#/correios/cadastrar-pedido");
        await expect(browser.getTitle()).to.eventually.equal("Correios");
    })

    When(/^eu preencho todos os campos necessários, considerando nome do pedido como "([^\"]*)" e CPF como "([^\"]*)" aperto em confirmar pedido$/, async (nome_pedido,cpf) => {
        await $("input[name='numero_cartao']").sendKeys('3365');
        await $("input[name='nome']").sendKeys('weslley');
        await $("input[name='cod_seguranca']").sendKeys(124);
        await $("input[name='cpf']").sendKeys(<string> cpf);
        await $("input[name='cep']").sendKeys('75842');
        await $("input[name='nome_pedido']").sendKeys(<string> nome_pedido);
        await $("input[name='peso']").sendKeys(27);
        await $("input[name='endereco']").sendKeys('Rua cruzeiro');
        await $("select[name='opcoes']").sendKeys('Entrega Rapida');
        await element(by.name('submit')).click();
    })

    When(/^há um usuário logado com nome de cpf "([^\"]*)"$/, async (cpf) => {
        assertElementsWithSameCPF(0,cpf);
    });

    Then(/^vou para a pagina rastreamento-pacote$/, async () => {
        await browser.get("http://localhost:4200/#/correios/rastreamento-pacote");
        await expect(browser.getTitle()).to.eventually.equal('Correios');
    })
    
    Then(/^O usuario consegue visualizar o pedido$/, async () => {
        await browser.get("http://localhost:4200/#/correios/rastreamento-pacote");
    });
    /*Fim feature um*/
    /*inicio feature dois*/
    Given(/^eu estou na tela de login e efetuo meu login com nome: "([^\"]*)" e senha: "([^\"]*)"$/, async (nome, senha) => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal("Login");
        await $("input[name='login']").sendKeys(<string> nome);
        await $("input[name='senha']").sendKeys(<string> senha);
        await $("button[name='submit']").click();
    })

    Given (/^entrei em cadastro de pedido$/,async () => {
        await browser.get("http://localhost:4200/#/correios/cadastrar-pedido");
        await expect(browser.getTitle()).to.eventually.equal("Correios");
    })

    When(/^eu preencho os campos necessários, considerando nome do pedido como "([^\"]*)" e CPF como "([^\"]*)" aperto em confirmar pedido$/, async (nome_pedido,cpf) => {
        await $("input[name='numero_cartao']").sendKeys('3365');
        await $("input[name='nome']").sendKeys('weslley');
        await $("input[name='cod_seguranca']").sendKeys(124);
        await $("input[name='cpf']").sendKeys(<string> cpf);
        await $("input[name='cep']").sendKeys('75842');
        await $("input[name='nome_pedido']").sendKeys(<string> nome_pedido);
        await $("input[name='peso']").sendKeys(27);
        await $("input[name='endereco']").sendKeys('Rua cruzeiro');
        await $("select[name='opcoes']").sendKeys('Entrega Rapida');
        await element(by.name('submit')).click();
    })
    When(/^existe um usuário logado com nome de cpf "([^\"]*)"$/, async (cpf) => {
        assertElementsWithSameCPF(0,cpf);
    });

    Then(/^permaneco na pagina de pedidos$/, async () => {
        await browser.get("http://localhost:4200/#/correios/pedidos");
        await expect(browser.getTitle()).to.eventually.equal("Correios");
      })
    /*Fim feature dois*/
})