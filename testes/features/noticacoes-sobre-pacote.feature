Feature: Notificações sobre o pacote
		Cadastra o pedido e atualiza a rota
		Verificar informações no dialog
			

Scenario: Notificar atualização de pacote Distrito Federal para Goias
	Given na pagina de login e efetuo meu login com nome: "pedro" e senha: "1234"
	Given na página cadastro de pedido
	Given os campos não estão preenchidos
	When preencho todos os campos necessários, considerando nome do pedido como "TV LCD" e aperto em confirmar pedido
	Then o pedido é devidamente cadastrado com nome "pedro - pedido" e a aplicação é redirecionada para a página de pedidos
	Then o pedido é atualizado na página de rotas ao pressionar o botão "Atualizar Caminho"
	Then o pedido é atualizado na página de rotas e aparece um dialog informando que o pacote "TV LCD" agora está em "Goias"
	Then o pedido é atualizado na página de rotas e aparece um dialog informando que o pacote "TV LCD" agora está em "Bahia"
	Then o pedido é atualizado na página de rotas e aparece um dialog informando que o pacote "TV LCD" agora está em "Pernambuco"

Scenario: Notificar atualização de pacote Goias para Bahia
	Given Administrador verifica que o pacote 'x' está em 'GO'
	And Administrador atualiza o pacote em 'Atualizar caminho'
	When Pop-up aparece na tela informando que o pacote 'x' atualizou o caminho para 'Bahia'
	Then Administrador clica em qualquer parte da tela
	And pop-up fecha

Scenario: Notificar atualização de pacote Bahia para Pernambuco
	Given Administrador verifica que o pacote 'x' está em 'BA'
	And Administrador atualiza o pacote em 'Atualizar caminho'
	When Pop-up aparece na tela informando que o pacote 'x' atualizou o caminho para 'Pernambuco'
	Then Administrador clica em qualquer parte da tela
	And pop-up fecha
