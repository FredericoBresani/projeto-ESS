Feature: Notificações sobre o pacote
		Cadastra o pedido e atualiza a rota
		Verificar informações no dialog
			

Scenario: Notificar atualização de pacote Distrito Federal para Goias
	Given na pagina de login e efetuo meu login com nome: "pedro" e senha: "1234"
	Given na página cadastro de pedido
	Given os campos não estão preenchidos
	When preencho todos os campos necessários, considerando nome do pedido como "TV LCD" e aperto em confirmar pedido
	Then o pedido é devidamente cadastrado com nome "pedro - TV LCD" e a aplicação é redirecionada para a página de pedidos
	Then o pedido é atualizado na página de rotas ao pressionar o botão "Atualizar Caminho"
	Then o pedido é atualizado na página de rotas e aparece um dialog informando que o pacote "TV LCD" agora está em "Goias"
	Then o pedido é atualizado na página de rotas e aparece um dialog informando que o pacote "TV LCD" agora está em "Bahia"
	Then o pedido é atualizado na página de rotas e aparece um dialog informando que o pacote "TV LCD" agora está em "Pernambuco"
