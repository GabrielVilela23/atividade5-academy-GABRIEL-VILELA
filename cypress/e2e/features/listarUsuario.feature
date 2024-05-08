# language: pt

Cenário: Consulta da lista de usuários
Dado: que xistem usuários cadastrados no sistema
Quando: o usuário acessa a lista de usuários
E: navega até a página de listagem
Então: a lista de usuários é exibida corretamente

Cenário: Cadastro de usuário quando não há usuários cadastrados
Dado: que não existem usuários cadastrados no sistema
Quando: o usuário tenta cadastrar um novo usuário
E: preenche os campos necessários
E: submete o formulário de cadastro
Então: o sistema permite o cadastro sem erros

Cenário: Exibição da paginação com mais de 6 usuários cadastrados
Dado: que existem mais de 6 usuários cadastrados no sistema
Quando: o usuário acessa a lista de usuários
E: navega até a última página
Então: a paginação é exibida corretamente

Cenário: Tentativa de avançar para a próxima página sem usuários suficientes
Dado: que existem menos de 6 usuários cadastrados no sistema
Quando: o usuário tenta avançar para a próxima página
E: não há usuários suficientes para preencher outra página
Então: o sistema impede a navegação para a próxima página

Cenário: Avançar e voltar entre as páginas da lista de usuários
Dado: que existem várias páginas de usuários cadastrados.
Quando: o usuário navega entre as páginas
E: clica nos botões de próxima e anterior
Então: o sistema permite a navegação corretamente

Cenário: Opção para exibir detalhes de um usuário
Dado: que existem usuários cadastrados no sistema
Quando: o usuário seleciona a opção para exibir detalhes de um usuário
E: clica no usuário desejado para ver os detalhes
Então: os detalhes do usuário selecionado são exibidos corretamente

Cenário: Opção para excluir um usuário
Dado: que existem usuários cadastrados no sistema
Quando: o usuário seleciona a opção para excluir um usuário
E: confirma a exclusão na caixa de diálogo
Então: o usuário é excluído corretamente do sistema