import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import CadastroPage from '../pages/cadastro.page';
import { faker } from '@faker-js/faker';

const paginaCadastro = new CadastroPage();
let novoNome;
let novoEmail;

Given('que o usuário acessa a página de cadastro', () => {
    paginaCadastro.getCadastro();
});

When('o usuário preenche os campos obrigatórios com dados válidos', () => {
    novoNome = faker.name.findName();
    novoEmail = faker.internet.email();
    paginaCadastro.digitarNome(novoNome);
    paginaCadastro.digitarEmail(novoEmail);
});

When('o usuário preenche o campo de email com um formato inválido', () => {
    novoEmail = 'emailinvalido';
    paginaCadastro.digitarEmail(novoEmail);
});

When('o usuário preenche o campo de nome com mais de 100 caracteres', () => {
    novoNome = faker.lorem.words(101);
    paginaCadastro.digitarNome(novoNome);
});

When('o usuário preenche o campo de email com mais de 60 caracteres', () => {
    novoEmail = faker.lorem.words(31) + '@example.com';
    paginaCadastro.digitarEmail(novoEmail);
});

When('o usuário tenta submeter o cadastro sem preencher os campos obrigatórios', () => {
});

Then('o novo usuário é cadastrado corretamente no sistema', () => {
    paginaCadastro.clicarSalvar();
});

Then('o sistema impede o cadastro e exibe uma mensagem de erro', () => {
    paginaCadastro.clicarSalvar();
});

Then('o sistema impede o cadastro e exibe mensagens de erro para cada campo vazio', () => {
    paginaCadastro.clicarSalvar();
});
