RQ1: O sistema deve possibilitar ao usuário, o cadastro de pedidos, tanto para envelopes normais
quanto para envelopes de entrega rápida
RQ2: O sistema deve possibilitar o cancelamento de pedidos já feitos
RQ3: O sistema deve possibilitar a adição de produtos ao carrinho, os quais poderão ser cadastrados
na página de cadastro de pedidos
RQ4: O sistema deve garantir que o usuário esteja logado para que possa fazer um pedido
RQ5: O sistema deve garantir que os dados como, número do cartão, nome, código de segurança do cartão, 
CPF, CEP e etc estejam corretos para que o pedido seja cadastrado corretamente
RQ6: O sistema deve garantir o tipo de envelope que está sendo cadastrado, padrão (entrega normal) ou
entrega rápida

Feature: Como usuário 
         eu quero registrar pedidos,
         eu quero visualizar meus pedidos,
         e eu quero poder cancelar pedidos;
         para que eu consiga adiministrar minhas compras

Scenario: Cadastrar pedido
  Given que eu estou na página cadastro de pedido
  And os campos do cadastro, número do cartão, nome, código de segurança do cartão, CPF, CEP e etc não estão todos preenchidos
  When eu preencho todos os campos necessários e aperto em confirmar pedido
  Then o pedido é devidamente cadastrado e a aplicação é redirecionada para a página de pedidos

Scenario: cancelar pedido
  Given que eu estou na página Pedidos
  And Há pelo menos um pedido feito
  When Eu pressiono em Cancelar no respectivo pedido
  Then O pedido deixa de ser apresentado na tela Pedidos
  And O pedido é retirado do banco de dados

Scenario: Cadastrar pedido para entrega rápida
  Given que eu estou na página cadastro de pedido
  And os campos do cadastro, número do cartão, nome, código de segurança do cartão, CPF e etc não estão todos preenchidos
  And existe a opção de entrega rápida para o envelope
  When eu preencho todos os campos necessários, seleciono a opção de entrega rápida e aperto em confirmar pedido
  Then o pedido é devidamente cadastrado e a aplicação é redirecionada para a pagina de pedidos

Scenario: Cadastrar pedido sem CEP
  Given que eu estou na página “cadastro de pedido”
  And os campos do cadastro, número do cartão, nome, código de segurança do cartão, CPF, CEP e etc não estão todos preenchidos
  When eu preencho todos os campos necessários, menos o CEP e aperto em confirmar pedido
  Then a aplicação não processa o pedido
  And eu continuo na mesma página de cadastro
  And o botão de confirmar continua desativado

Scenario: Cadastrar pedido sem estar logado
  Given que eu estou na página principal
  And eu clico no menu lateral
  When eu clico em cadastrar pedido
  Then aplicação me redireciona para a página de login
  Then eu posso realizar o login na plataforma

Scenario: Cadastrar pedido com nome repetido
  Given que eu estou na página cadastro de pedido
  And os campos do cadastro, número do cartão, nome, código de segurança do cartão, CPF, CEP e etc não estão todos preenchidos
  When eu preencho todos os campos necessários, menos o nome e clico em confirmar pedido
  Then a aplicação não processa o pedido
  And eu continuo na mesma página de cadastro
  And o botão de confirmar continua desativado

Scenario: Cadastrar pedido com nome do pedido repetido
  Given que eu estou na página cadastro de pedido
  And os campos do cadastro, número do cartão, nome, código de segurança do cartão, CPF, CEP e etc não estão todos preenchidos
  When eu preencho todos os campos necessários, menos o nome e clico em confirmar pedido
  Then a aplicação não processa o pedido
  And eu continuo na mesma página de cadastro
  And o botão de confirmar continua desativado
