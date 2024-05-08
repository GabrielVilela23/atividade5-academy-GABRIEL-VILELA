import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { faker } from '@faker-js/faker';
import Listar from "../support/pages/listarUsuarios.page.js";
import Detalhes from "../support/pages/detalhes.page.js";

var listar = new Listar();
var detalhes = new Detalhes();

Given('que existem usuários cadastrados no sistema', () => {
});

Given('que não existem usuários cadastrados no sistema', () => {
});

When('o usuário acessa a lista de usuários e navega até a página de listagem', () => {
});

When('o usuário tenta cadastrar um novo usuário preenchendo os campos necessários e submete o formulário de cadastro', () => {
});

When('o usuário acessa a lista de usuários e navega até a última página', () => {
});

When('o usuário tenta avançar para a próxima página e não há usuários suficientes para preencher outra página', () => {
});

When('o usuário navega entre as páginas e clica nos botões de próxima e anterior', () => {
});

When('o usuário seleciona a opção para exibir detalhes de um usuário e clica no usuário desejado para ver os detalhes', () => {
});

When('o usuário seleciona a opção para excluir um usuário e confirma a exclusão na caixa de diálogo', () => {
});

Then('a lista de usuários é exibida corretamente', () => {
});

Then('o sistema permite o cadastro sem erros', () => {
});

Then('a paginação é exibida corretamente', () => {
});

Then('o sistema impede a navegação para a próxima página', () => {
});

Then('o sistema permite a navegação corretamente', () => {
});

Then('os detalhes do usuário selecionado são exibidos corretamente', () => {
});

Then('o usuário é excluído corretamente do sistema', () => {
});
