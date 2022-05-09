// import { defineSupportCode } from 'cucumber';
let { Given, When, Then } = require("cucumber");
let { browser, $, element, ElementArrayFinder, by } = require('protractor');
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let request = require("request-promise");

var base_url = "http://localhost:3000/";

//teste Rastreio de pacotes (tentando fazer funcionar)

async function assertTamanhoEqual(set,n) {
    await set.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(n));
}
// defineSupportCode(({ Given, When, Then }) => {
    Given(/^que estou na pagina rastreamento-pacote$/, async () => {
        await browser.get("http://localhost:4200/#/correios/rastreamento-pacote");
        await expect(browser.getTitle()).to.eventually.equal('Correios');
    })

	Given(  
	/^há um usuário logado com nome de usuário "([^\"]*)", seja ela admin ou não admin$/,	async (name) => {
        var allPessoas = element.all(by.name('nome'));
        await assertTamanhoEqual(allPessoas,name);
	});

    When(/^Tento o pedido com nome de "([^\"]*)"$/, async (pedido) => {
        var allPedidos = element.all(by.name('nomePedidoRastreado'));
        await assertTamanhoEqual(allPedidos,pedido);
    });

    Then(/^O usuario consegue visualizar o pedido "(\d*)"$/, async () => {
        await request()
        .then(body => 
             expect(JSON.stringify(body)).to.equal(
                 '{"success":"O pedido foi visualizado com sucesso"}'));
    });
// })

//fim rastreio de pacotes