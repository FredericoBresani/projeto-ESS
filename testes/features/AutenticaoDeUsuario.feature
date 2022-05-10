Feature: Autenticacao do Usuario
    entrando usuario do sistema
    buscando autenticar no sistema
   
Scenario: Login Correto
    Given estou na tela de login
    When preencho os campos de login com nome: "pedro" e senha: "123"    
    Then sou autenticado e entro no sistema

Scenario: Dados de Login errados
    Given estou na tela para fazer login
    When preencho os campos de com nome: "julio" e senha: "12as3"    
    Then informações do login estão erradas