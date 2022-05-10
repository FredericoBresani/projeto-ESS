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
    Given(/^o pedido é cadastrado com nome "fred - pedido" e a aplicação é redirecionada para a página de pedidos$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/#/correios/pedidos");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("Correios");
    }));
    When(/^o pedido é atualizado na página de rotas ao pressionar o botão "Atualizar Caminho"$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/#/correios/rota");
        yield protractor_1.element(protractor_1.by.name('botaoAtualizar')).click();
    }));
    Then(/^o pedido é atualizado na página de rotas e aparece um dialog informando que o pacote "([^\"]*)" agora está em Goias$/, (nome_pedido) => __awaiter(this, void 0, void 0, function* () {
        yield expect(protractor_1.element(protractor_1.by.name("dialog")).getText()).to.eventually.equal("Atualização sobre o seu pacote " + nome_pedido);
        yield expect(protractor_1.element(protractor_1.by.name("dialog")).getText()).to.eventually.equal("Seu pacote está na unidade de tratamento em Goias");
        //await expect(browser.getRoles()).to.equal("dialog");
    }));
    Then(/^o pedido é atualizado na página de rotas e aparece um dialog informando que o pacote "([^\"]*)" agora está em Bahia$/, (nome_pedido) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/#/correios/rota");
        yield protractor_1.element(protractor_1.by.name('botaoAtualizar')).click();
        yield expect(protractor_1.element(protractor_1.by.name("dialog")).getText()).to.eventually.equal("Atualização sobre o seu pacote " + nome_pedido);
        yield expect(protractor_1.element(protractor_1.by.name("dialog")).getText()).to.eventually.equal("Seu pacote está na unidade de tratamento em Bahia");
        //await expect(browser.getRoles()).to.equal("dialog");
    }));
    Then(/^o pedido é atualizado na página de rotas e aparece um dialog informando que o pacote "([^\"]*)" agora está em Pernambuco$/, (nome_pedido) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/#/correios/rota");
        yield expect(protractor_1.element(protractor_1.by.name("dialog")).getText()).to.eventually.equal("Atualização sobre o seu pacote " + nome_pedido);
        yield expect(protractor_1.element(protractor_1.by.name("dialog")).getText()).to.eventually.equal("Seu pacote está na unidade de tratamento em Pernambuco");
        //await expect(browser.getRoles()).to.equal("dialog");
    }));
});
