Feature: Notificações sobre o pacote
		Administrador gostaria de saber a posição que seu pacote está localizado
			

Scenario: Notificar atualização de pacote Distrito Federal para Goias
	Given Administrador verifica que o pacote 'x' está em 'DF'
	And Administrador atualiza o pacote em 'Atualizar caminho'
	When Pop-up aparece na tela informando que o pacote 'x' atualizou o caminho para 'Goias'
	Then Administrador clica em qualquer parte da tela
	And pop-up fecha

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
