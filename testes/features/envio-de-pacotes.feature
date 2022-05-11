Feature: Como admin 
         eu quero visualizar as entregas,
         eu quero visualizar o estado atual das rotas,
         e eu quero poder atualizar a posição da entrega;
         para que eu consiga adiministrar os envios de pacotes

Scenario: Cancelar uma entrega
  Given wilson - eu estou na pagina de login e efetuo meu login com nome: "wilson" e senha: "123"
  Given wilson - eu entro na página cadastro de pedido
  Given wilson - os campos do cadastro, número do cartão, nome, código de segurança do cartão, CPF, CEP e etc não estão todos preenchidos
  When wilson - eu preencho todos os campos necessários, considerando nome do pedido como "wilson - pedido" e aperto em confirmar pedido
  Then wilson - o pedido é devidamente cadastrado com nome "wilson - pedido" e a aplicação é redirecionada para a página de pedidos
  When eu me redireciono para a pagina de entregas e clico para remover uma entrega
  Then a entrega é devidamente cancelada e eu continuo na mesma página de entregas