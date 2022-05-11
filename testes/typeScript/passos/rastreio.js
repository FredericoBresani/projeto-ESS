"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let sameCPF = ((elem, cpf) => elem.element(protractor_1.by.name('cpflist')).getText().then(text => text === cpf));
function assertTamanhoEqual(set, n) {
    return __awaiter(this, void 0, void 0, function* () {
        yield set.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(n));
    });
}
function assertElementsWithSameCPF(n, cpf) {
    return __awaiter(this, void 0, void 0, function* () {
        var allalunos = protractor_1.element.all(protractor_1.by.name('alunolist'));
        var samecpfs = allalunos.filter(elem => sameCPF(elem, cpf));
        yield assertTamanhoEqual(samecpfs, n);
    });
}
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    /*inicio feature um*/
    Given(/^eu efetuo meu login com nome: "([^\"]*)" e senha: "([^\"]*)" na pagina de login$/, (nome, senha) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("Login");
        yield protractor_1.$("input[name='login']").sendKeys(nome);
        yield protractor_1.$("input[name='senha']").sendKeys(senha);
        yield protractor_1.$("button[name='submit']").click();
    }));
    Given(/^eu entrei em cadastro de pedido$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/#/correios/cadastrar-pedido");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("Correios");
    }));
    When(/^eu preencho todos os campos necessários, considerando nome do pedido como "([^\"]*)" e CPF como "([^\"]*)" aperto em confirmar pedido$/, (nome_pedido, cpf) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("input[name='numero_cartao']").sendKeys('3365');
        yield protractor_1.$("input[name='nome']").sendKeys('weslley');
        yield protractor_1.$("input[name='cod_seguranca']").sendKeys(124);
        yield protractor_1.$("input[name='cpf']").sendKeys(cpf);
        yield protractor_1.$("input[name='cep']").sendKeys('75842');
        yield protractor_1.$("input[name='nome_pedido']").sendKeys(nome_pedido);
        yield protractor_1.$("input[name='peso']").sendKeys(27);
        yield protractor_1.$("input[name='endereco']").sendKeys('Rua cruzeiro');
        yield protractor_1.$("select[name='opcoes']").sendKeys('Entrega Rapida');
        yield protractor_1.element(protractor_1.by.name('submit')).click();
    }));
    When(/^há um usuário logado com nome de cpf "([^\"]*)"$/, (cpf) => __awaiter(this, void 0, void 0, function* () {
        assertElementsWithSameCPF(0, cpf);
    }));
    Then(/^vou para a pagina rastreamento-pacote$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/#/correios/rastreamento-pacote");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal('Correios');
    }));
    Then(/^O usuario consegue visualizar o pedido$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/#/correios/rastreamento-pacote");
    }));
    /*Fim feature um*/
    /*inicio feature dois*/
    Given(/^eu estou na tela de login e efetuo meu login com nome: "([^\"]*)" e senha: "([^\"]*)"$/, (nome, senha) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("Login");
        yield protractor_1.$("input[name='login']").sendKeys(nome);
        yield protractor_1.$("input[name='senha']").sendKeys(senha);
        yield protractor_1.$("button[name='submit']").click();
    }));
    Given(/^entrei em cadastro de pedido$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/#/correios/cadastrar-pedido");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("Correios");
    }));
    When(/^eu preencho os campos necessários, considerando nome do pedido como "([^\"]*)" e CPF como "([^\"]*)" aperto em confirmar pedido$/, (nome_pedido, cpf) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("input[name='numero_cartao']").sendKeys('3365');
        yield protractor_1.$("input[name='nome']").sendKeys('weslley');
        yield protractor_1.$("input[name='cod_seguranca']").sendKeys(124);
        yield protractor_1.$("input[name='cpf']").sendKeys(cpf);
        yield protractor_1.$("input[name='cep']").sendKeys('75842');
        yield protractor_1.$("input[name='nome_pedido']").sendKeys(nome_pedido);
        yield protractor_1.$("input[name='peso']").sendKeys(27);
        yield protractor_1.$("input[name='endereco']").sendKeys('Rua cruzeiro');
        yield protractor_1.$("select[name='opcoes']").sendKeys('Entrega Rapida');
        yield protractor_1.element(protractor_1.by.name('submit')).click();
    }));
    When(/^existe um usuário logado com nome de cpf "([^\"]*)"$/, (cpf) => __awaiter(this, void 0, void 0, function* () {
        assertElementsWithSameCPF(0, cpf);
    }));
    Then(/^permaneco na pagina de pedidos$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/#/correios/pedidos");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("Correios");
    }));
    /*Fim feature dois*/
});
