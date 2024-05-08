# language: pt

Cenário: atualização do nome de um usuário
Dado: que existem usuários cadastrados no sistema
Quando: o usuário seleciona um usuário para atualizar
E: modifica o nome do usuário
E: submete o formulário de atualização
Então: o sistema atualiza o nome do usuário corretamente

Cenário: atualização do email de um usuário
Dado: que existem usuários cadastrados no sistema
Quando: o usuário seleciona um usuário para atualizar
E: modifica o email do usuário
E: submete o formulário de atualização
Então: o sistema atualiza o email do usuário corretamente

Cenário: Tentativa de atualização com dados inválidos
Dado: que existem usuários cadastrados no sistema
Quando: o usuário seleciona um usuário para atualizar
E: insere dados inválidos nos campos de atualização
E: tenta submeter o formulário de atualização
Então: o sistema impede a atualização e exibe mensagens de erro adequadas