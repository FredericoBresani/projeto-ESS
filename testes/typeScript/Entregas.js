let { Given, When, Then } = require("cucumber");
let { browser, $, element, ElementArrayFinder, by } = require('protractor');
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let request = require("request-promise");
var base_url = "http://localhost:3000/";
