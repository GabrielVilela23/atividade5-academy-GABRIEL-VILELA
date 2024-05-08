# language: pt

Cenário: Pesquisa de usuário pelo nome
Dado: que existem usuários cadastrados no sistema
Quando: o usuário insere um nome na barra de pesquisa
E: pressiona o botão de pesquisa
Então: o sistema exibe os usuários cujos nomes correspondem à pesquisa

Cenário: Pesquisa de usuário pelo email
Dado: que existem usuários cadastrados no sistema
Quando: o usuário insere um email na barra de pesquisa
E: pressiona o botão de pesquisa
Então: o sistema exibe os usuários cujos emails correspondem à pesquisa

Cenário: Pesquisa de usuário pelo ID
Dado: que existem usuários cadastrados no sistema
Quando: o usuário insere um ID na barra de pesquisa
E: pressiona o botão de pesquisa
Então: o sistema exibe o usuário cujo ID corresponde à pesquisa

Cenário: Pesquisa sem resultados
Dado: que existem usuários cadastrados no sistema
Quando: o usuário insere um termo de pesquisa que não corresponde a nenhum usuário
E: pressiona o botão de pesquisa
Então: o sistema exibe uma mensagem indicando que não foram encontrados resultados para a pesquisa