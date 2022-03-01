Scenario: Multi pacotes para rastreamento
    Given: Usuário acessa a página de rastreamento usando suas credenciais cadastradas 
    And: usuário verifica seus pacotes em uma tabela
	When: alguns pacotes têm informações diferentes em relação ao seu estado
	Then: o usuário precisa aguardar novas atualizações sobre o pacotes

Scenario: Limitação do rastreio
	Given: Usuário acessa a página de rastreamento usando suas credenciais cadastradas 
	When: usuário verifica que seu pacote “Pacote 1” no endereço atual consta “Sem informação”
	Then: usuário visualiza que existe uma “obs” na parte inferior da página informando a situação do “Pacote 1” 

Scenario: Rastreamento fora do país
	Given: Usuário acessa a página de rastreamento usando suas credenciais cadastradas
	When: usuário visualiza que seu pacote “Pacote 1” está com o endereço local “Egito” que indica que o pacote ainda está fora do país
	And: a taxa de atualização é de forma mais lenta
    Then: o usuário precisa aguardar novas atualizações sobre os pacotes

Scenario: Contato com os responsáveis
	Given: Usuário acessa a página de rastreamento usando suas credenciais cadastradas
	When: usuário verifica que seu pacote “Pacote 1” no endereço atual consta “Sem informação”
    And: usuário vai na parte inferior esquerda em “Selecione o tipo de atendimento”
    Then: usuário escolhe o tipo de atendimento, “Reclamação”
    And: usuário seleciona na opção “Selecione o pacote” o “Pacote 1”
    And: aparece uma “Resposta Automática” informando a situação do determinado pacote 


Modificação letra "b"
