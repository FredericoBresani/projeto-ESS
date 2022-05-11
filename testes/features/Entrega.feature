Feature: Como admin 
         vou entrar na área de gerar entrega
         

Scenario: cadastrar objetos nos pedidos
    Given eu estou na pagina de login e efetuo meu login com nome: "jeff" e senha: "123456"
    Given Estou na tela de entrega
    when Adiciono os produtos a entrega
    when Remove um produto da entrega
    Given Fecha a entrega


Scenario: Finalizar sem produtos
   Given eu estou na pagina de login e efetuo meu login com nome: "jeff" e senha: "123456"
   Given Estou na tela de entrega
   When Vejo que não existe objetos na entrega
   Then Aparece uma mensagem de erro




