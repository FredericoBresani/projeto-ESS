Feature: Como usuário 
         eu quero registrar pedidos,
         eu quero visualizar meus pedidos,
         e eu quero poder cancelar pedidos;
         para que eu consiga adiministrar minhas compras

Scenario: Cadastrar pedido
  Given eu estou na pagina de login e efetuo meu login com nome: "fred" e senha: "123456"
  Given eu entro na página cadastro de pedido
  Given os campos do cadastro, número do cartão, nome, código de segurança do cartão, CPF, CEP e etc não estão todos preenchidos
  When eu preencho todos os campos necessários, considerando nome do pedido como "fred - pedido" e aperto em confirmar pedido
  Then o pedido é devidamente cadastrado com nome "fred - pedido" e a aplicação é redirecionada para a página de pedidos

Scenario: Cadastrar pedido sem CEP
  Given eu efetuo meu login com nome: "fred" e senha: "fred123"
  Given eu entro no cadastro de pedido
  Given os campos do cadastro, número do cartão, nome, CPF, CEP e etc não estão todos preenchidos
  When eu preencho todos os campos necessários menos o de CEP e clico em confirmar
  Then o form não é enviado e eu continuo na mesma página de cadastro
