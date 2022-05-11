Feature: Como usuario
        eu quero conseguir visualizar meu pedidos,
        e quero ver a data de envio e entrega


  Scenario: Visualização de rastreio de pedidos bem sucedida
    Given eu efetuo meu login com nome: "weslley" e senha: "654321" na pagina de login
    Given eu entrei em cadastro de pedido
    When eu preencho todos os campos necessários, considerando nome do pedido como "weslley - pedido" e CPF como "123" aperto em confirmar pedido
    When há um usuário logado com nome de cpf "123"
    Then vou para a pagina rastreamento-pacote
    Then  O usuario consegue visualizar o pedido

  Scenario: Erro na Visualização de rastreio de pedidos
    Given eu estou na tela de login e efetuo meu login com nome: "weslley" e senha: "654321"
    Given entrei em cadastro de pedido
    When eu preencho os campos necessários, considerando nome do pedido como "weslley - pedido" e CPF como "123" aperto em confirmar pedido
    When existe um usuário logado com nome de cpf "123456"
    Then permaneco na pagina de pedidos