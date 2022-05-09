Feature: visualizar rastreio

  Scenario: Visualização de rastreio de pedidos bem sucedida
    Given há um usuário logado com nome de usuário "aline", seja ela admin ou não admin
    When  Tento o pedido com nome de "pedido 1"
    Then  O usuario consegue visualizar o pedido


# Scenario: Visualização de pacote
# Given que estou logada como ‘julia matins’
# And estou na tela ‘tela de visualização de rastreio’
# When visualiso a divisão dos pedidos ‘enviado’ ‘recebendo’
# Then consigo vem informaçoes dos meu itens

# Scenario: Localização de depósitos
# Given que estou na tela ‘tela de visualização de rastreio’
# When Clico em algum ponto da time line
# Then consigo ver a localização dos depositos

# Scenario: Armazenamento de dados de rastreamento
# Given que estou na tela ‘tela de visualização de rastreio’
# When clico na opção ‘historico de pedidos’
# Then sou direcionado à uma tela com todos os pedidos já recebidos e enviados

# Scenario: Limitar acesso de usuário
# Given que estou na tela ‘tela de visualização de rastreio’
# When quero ter permisão para algum dado
# Then é necessario que esteja logada
# And tenha realizado algum envio ou esteja esperendo algo

# mudandça teste diff

# Scenario: Erro no rastreio
# Given Que estou em 'tela de visualização de rastreio'
# When tento visualizar dados sobre a localização
# And nao consigo
# Then é exibida uma mensagem de erro na tela

# Scenario: Erro no historico de rastreio
# Given Que estou em 'tela de visualização de rastreio'
# When Clico no botão 'historico de ratreio'
# And não é possivel visualizar os dados
# Then é exibido uma mensagem (Main)