# language: pt

Cenário: Cadastrar um novo usuário
Dado: que o usuário preenche os campos obrigatórios com dados válidos
Quando: o usuário tenta cadastrar um novo usuário
E: todos os campos são preenchidos corretamente
E: clica no botão de cadastro
Então: o novo usuário é cadastrado corretamente no sistema

Cenário: Tentativa de cadastrar usuário com email inválido
Dado: que o usuário tenta cadastrar um usuário com um email inválido
Quando: o usuário preenche o campo de email com um formato inválido
E: tenta submeter o formulário de cadastro
Então: o sistema impede o cadastro e exibe uma mensagem de erro

Cenário: Tentativa de cadastrar usuário com nome com mais de 100 caracteres
Dado: que o usuário tenta cadastrar um usuário com um nome com mais de 100 caracteres
Quando: o usuário preenche o campo de nome com mais de 100 caracteres
E: tenta submeter o formulário de cadastro
Então: o sistema impede o cadastro e exibe uma mensagem de erro

Cenário: Tentativa de cadastrar usuário com email com mais de 60 caracteres
Dado: que o usuário tenta cadastrar um usuário com um email com mais de 60 caracteres
Quando: o usuário preenche o campo de email com mais de 60 caracteres
E: tenta submeter o formulário de cadastro
Então: o sistema impede o cadastro e exibe uma mensagem de erro

Cenário: Tentativa de cadastrar usuário com campos de nome e email vazios
Dado: que o usuário tenta cadastrar um usuário com os campos de nome e email vazios
Quando: o usuário tenta submeter o cadastro sem preencher os campos obrigatórios
E: deixa os campos de nome e email em branco
Então: o sistema impede o cadastro e exibe mensagens de erro para cada campo vazio