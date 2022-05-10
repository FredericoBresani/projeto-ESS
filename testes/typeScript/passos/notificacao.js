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
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    Given(/^na pagina de login e efetuo meu login com nome: "([^\"]*)" e senha: "([^\"]*)"$/, (nome, senha) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("Login");
        yield protractor_1.$("input[name='login']").sendKeys(nome);
        yield protractor_1.$("input[name='senha']").sendKeys(senha);
        yield protractor_1.$("button[name='submit']").click();
    }));
    Given(/^na página cadastro de pedido$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/#/correios/cadastrar-pedido");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("Correios");
    }));
    Given(/^os campos não estão preenchidos$/, () => __awaiter(this, void 0, void 0, function* () {
        yield expect(protractor_1.$("input[name='numero_cartao']").getAttribute('value')).to.eventually.equal("");
        yield expect(protractor_1.$("input[name='nome']").getAttribute('value')).to.eventually.equal("");
        yield expect(protractor_1.$("input[name='cod_seguranca']").getAttribute('value')).to.eventually.equal('0');
        yield expect(protractor_1.$("input[name='cpf']").getAttribute('value')).to.eventually.equal("");
        yield expect(protractor_1.$("input[name='cep']").getAttribute('value')).to.eventually.equal("");
        yield expect(protractor_1.$("input[name='nome_pedido']").getAttribute('value')).to.eventually.equal("");
        yield expect(protractor_1.$("input[name='peso']").getAttribute('value')).to.eventually.equal('0');
        yield expect(protractor_1.$("select[name='opcoes']").getAttribute('value')).to.eventually.equal("");
        yield expect(protractor_1.$("input[name='endereco']").getAttribute('value')).to.eventually.equal("");
    }));
    When(/^preencho todos os campos necessários, considerando nome do pedido como "([^\"]*)" e aperto em confirmar pedido$/, (nome_pedido) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("input[name='numero_cartao']").sendKeys('0000');
        yield protractor_1.$("input[name='nome']").sendKeys('pedro');
        yield protractor_1.$("input[name='cod_seguranca']").sendKeys(133);
        yield protractor_1.$("input[name='cpf']").sendKeys('51241');
        yield protractor_1.$("input[name='cep']").sendKeys('6541');
        yield protractor_1.$("input[name='nome_pedido']").sendKeys(nome_pedido);
        yield protractor_1.$("input[name='peso']").sendKeys(10);
        yield protractor_1.$("input[name='endereco']").sendKeys('PE');
        yield protractor_1.$("select[name='opcoes']").sendKeys('Entrega Rapida');
        yield protractor_1.element(protractor_1.by.name('submit')).click();
    }));
    Then(/^o pedido é devidamente cadastrado com nome "pedro - pedido" e a aplicação é redirecionada para a página de pedidos$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/#/correios/pedidos");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("Correios");
    }));
    Then(/^o pedido é atualizado na página de rotas ao pressionar o botão "Atualizar Caminho"$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/#/correios/rota");
        yield protractor_1.element(protractor_1.by.name('Atualizar Caminho')).click();
    }));
    Then(/^o pedido é atualizado na página de rotas e aparece um dialog informando que o pacote "([^\"]*)" agora está em "Goias"$/, (nome_pedido) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/#/correios/rota");
        yield expect(protractor_1.browser.getDocument.querySelector("#mat-dialog-0").getTitle()).to.eventually.equal("Atualização sobre o seu pacote " + nome_pedido);
        yield expect(protractor_1.browser.getDocument.querySelector("#mat-dialog-0").getContent()).to.eventually.equal("Seu pacote está na unidade de tratamento em Goias");
        yield expect(protractor_1.browser.getRoles()).to.equal("dialog");
    }));
    Then(/^o pedido é atualizado na página de rotas e aparece um dialog informando que o pacote "([^\"]*)" agora está em "Bahia"$/, (nome_pedido) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/#/correios/rota");
        yield protractor_1.element(protractor_1.by.name('Atualizar Caminho')).click();
        yield expect(protractor_1.browser.getDocument.querySelector("#mat-dialog-1").getTitle()).to.eventually.equal("Atualização sobre o seu pacote " + nome_pedido);
        yield expect(protractor_1.browser.getDocument.querySelector("#mat-dialog-1").getContent()).to.eventually.equal("Seu pacote está na unidade de tratamento em Bahia");
        yield expect(protractor_1.browser.getRoles()).to.equal("dialog");
    }));
    Then(/^o pedido é atualizado na página de rotas e aparece um dialog informando que o pacote "([^\"]*)" agora está em "Pernambuco"$/, (nome_pedido) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/#/correios/rota");
        yield expect(protractor_1.browser.getDocument.querySelector("#mat-dialog-2").getTitle()).to.eventually.equal("Atualização sobre o seu pacote " + nome_pedido);
        yield expect(protractor_1.browser.getDocument.querySelector("#mat-dialog-2").getContent()).to.eventually.equal("Seu pacote está na unidade de tratamento em Goias");
        yield expect(protractor_1.browser.getRoles()).to.equal("dialog");
    }));
});
