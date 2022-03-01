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

Scenario: Cadastrar pedido
  Given que eu estou na página “cadastro de pedido”
  And os campos do cadastro, "número do cartão”, “nome”, “código de segurança do cartão”, “CPF”, “CEP” e etc não estão todos preenchidos
  When eu preencho todos os campos necessários e aperto em “confirmar pedido”
  Then o pedido é devidamente cadastrado e enviado para a feature de envio de pedido

Scenario: cancelar pedido
  Given que eu estou na página “Pedidos”
  And Há pelo menos um pedido feito
  When Eu seleciono um determinado pedido e pressiono em “Cancelar pedido”
  Then O pedido deixa de ser apresentado na tela “Pedidos”
  And O pedido sai do processo de envio

Scenario: Cadastrar pedido para entrega rápida
  Given que eu estou na página “cadastro de pedido”
  And os campos do cadastro, "número do cartão”, “nome”, “código de segurança do cartão”, “CPF” e etc não estão todos preenchidos
  And existe a opção de entrega rápida para o envelope
  When eu preencho todos os campos necessários, seleciono a opção de entrega rápida e aperto em “confirmar pedido”
  Then o pedido é devidamente cadastrado e enviado para a feature de envio de pedido

Scenario: Adicionar produtos ao carrinho
  Given que eu estou na página “produtos”
  And existem produtos disponíveis na lista de produtos”
  When eu seleciono um ou mais produtos e aperto na opção “adicionar ao carrinho”
  Then os produtos são adicionados ao carrinho
  And eu continuo na página “produtos”
  And eu posso adicionar mais produtos
  And os produtos do carrinho podem ser cadastrados na página de cadastro de pedido

Scenario: Cadastrar pedido
  Given que eu estou na página “cadastro de pedido”
  And os campos do cadastro, "número do cartão”, “nome”, “código de segurança do cartão”, “CPF”, “CEP” e etc não estão todos preenchidos
  When eu preencho todos os campos necessários, menos o CEP e aperto em “confirmar pedido”
  Then a aplicação não processa o pedido
  And eu continuo na mesma página de cadastro
  And a aplicação indica que um dos campos não foi preenchido

Scenario: Cadastrar pedido
  Given que eu estou na página “cadastro de pedido”
  And eu não estou logado na plataforma
  When eu tento preencher os campos de cadastro
  Then aplicação me redireciona para a página de login