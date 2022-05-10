Feature: Notificações sobre o pacote
		Cadastra o pedido e atualiza a rota
		Verificar informações no dialog
			

Scenario: Notificar atualização de pacote Distrito Federal para Goias
	Given o pedido é devidamente cadastrado com nome "fred - pedido" e a aplicação é redirecionada para a página de pedidos
	When o pedido é atualizado na página de rotas ao pressionar o botão Atualizar Caminho
	Then o pedido é atualizado na página de rotas e aparece um dialog informando que o pacote "pedido" agora está em Goias
	Then o pedido é atualizado na página de rotas e aparece um dialog informando que o pacote "pedido" agora está em Bahia
	Then o pedido é atualizado na página de rotas e aparece um dialog informando que o pacote "pedido" agora está em Pernambuco
