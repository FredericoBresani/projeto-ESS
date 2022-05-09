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
    Given(/^eu estou na pagina de login e efetuo meu login$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/");
        yield protractor_1.$("input[name='login']").sendKeys('fred');
        yield protractor_1.$("input[name='senha']").sendKeys('fred');
        yield protractor_1.$("button[name='submit']").click();
        yield protractor_1.browser.get("http://localhost:4200/#/correios");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("Correios");
    }));
    Given(/^eu entro na página cadastro de pedido$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/#/correios/cadastrar-pedido");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("Correios");
    }));
    Given(/^os campos do cadastro, número do cartão, nome, código de segurança do cartão, CPF, CEP e etc não estão todos preenchidos$/, () => __awaiter(this, void 0, void 0, function* () {
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
    When(/^eu preencho todos os campos necessários e aperto em confirmar pedido$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("input[name='numero_cartao']").sendKeys('0568');
        yield protractor_1.$("input[name='nome']").sendKeys('fred');
        yield protractor_1.$("input[name='cod_seguranca']").sendKeys(133);
        yield protractor_1.$("input[name='cpf']").sendKeys('512410');
        yield protractor_1.$("input[name='cep']").sendKeys('65412');
        yield protractor_1.$("input[name='nome_pedido']").sendKeys('fred - pedido');
        yield protractor_1.$("input[name='peso']").sendKeys(10);
        yield protractor_1.$("input[name='endereco']").sendKeys('Rua fred');
        yield protractor_1.$("select[name='opcoes']").sendKeys('Entrega Rapida');
        yield protractor_1.element(protractor_1.by.name('submit')).click();
    }));
    Then(/^o pedido é devidamente cadastrado e a aplicação é redirecionada para a página de pedidos$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/#/correios/pedidos");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("Correios");
    }));
    Given(/^eu efetuo meu login$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/");
        yield protractor_1.$("input[name='login']").sendKeys('fred');
        yield protractor_1.$("input[name='senha']").sendKeys('fred');
        yield protractor_1.$("button[name='submit']").click();
        yield protractor_1.browser.get("http://localhost:4200/#/correios");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("Correios");
    }));
    Given(/^eu entro no cadastro de pedido$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/#/correios/cadastrar-pedido");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("Correios");
    }));
    Given(/^os campos do cadastro, número do cartão, nome, CPF, CEP e etc não estão todos preenchidos$/, () => __awaiter(this, void 0, void 0, function* () {
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
    When(/^eu preencho todos os campos necessários menos o de CEP e clico em confirmar$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("input[name='numero_cartao']").sendKeys('0568');
        yield protractor_1.$("input[name='nome']").sendKeys('fred');
        yield protractor_1.$("input[name='cod_seguranca']").sendKeys(133);
        yield protractor_1.$("input[name='cpf']").sendKeys('512410');
        yield protractor_1.$("input[name='nome_pedido']").sendKeys('fred - pedido');
        yield protractor_1.$("input[name='peso']").sendKeys(10);
        yield protractor_1.$("input[name='endereco']").sendKeys('Rua fred');
        yield protractor_1.$("select[name='opcoes']").sendKeys('Entrega Rapida');
        yield protractor_1.element(protractor_1.by.name('submit')).click();
    }));
    Then(/^o form não é enviado e eu continuo na mesma página de cadastro$/, () => __awaiter(this, void 0, void 0, function* () {
        yield expect(protractor_1.browser.getCurrentUrl()).to.eventually.equal("http://localhost:4200/#/correios/cadastrar-pedido");
    }));
});
