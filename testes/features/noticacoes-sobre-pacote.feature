Feature: Notificações sobre o pacote
		Cadastra o pedido e atualiza a rota
		Verificar informações no dialog
			

Scenario: Notificar atualização de pacote Distrito Federal para Pernambuco
	Given na pagina de login e efetuo meu login com nome: "pedro" e senha: "123"
	Given entro na página cadastro de pedido
	Given os não estão todos preenchidos
	When preencho todos os campos necessários, considerando nome do pedido como "Macbook para Monitor" e aperto em confirmar pedido
	When o pedido é cadastrado com nome "pedro - Macbook para monitor" e a aplicação é redirecionada para a página de pedidos
	When o pedido é atualizado na página de rotas ao pressionar o botão Atualizar Caminho
	Then o pedido é atualizado na página de rotas e aparece um dialog informando que o pacote "Macbook para Monitor" agora está em Pernambuco
