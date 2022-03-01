Feature: Autenticacao do Usuario
    As usuario do sistema
    I want to autenticar no sistema
   
Scenario: Login
    Given estou na tela de login
    And preencho os campos de login
    When submeto as informações 
    Then sou autenticado e entro no sistema.

Scenario: Logout o usuário 
	Given estou dentro do sistema
    When clico na opção logout
    Then saiu do sistema

Scenario: Verificação o usuário
	Given estou logado 
    And tento acessar uma funcionalidade
    When o sitema verifica a autenticação
    Then Autenticação confirmada     

Scenario: Autenticação inválida ou expirada
	Given estou logado mas o token expirou
    And tento acessar uma funcionalidade
    When o sitema verifica a autenticação
    Then sou redirecionado para a tela de login
    And e sou solicitado a preencher novamente os dados

Scenario: Dados do Login errados
    Given estou na tela de login
    And preencho os campos de login
    When submeto as informações 
    Then informações de login erradas

