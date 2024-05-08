import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { faker } from '@faker-js/faker';
import Listar from '../listarUsuarios.page';
import Detalhes from '../detalhes.page';

const listar = new Listar();
const detalhes = new Detalhes();

Given('que existem usuários cadastrados no sistema', () => {
});

When('o usuário seleciona um usuário para atualizar', () => {
  listar.verDetalhes();
});

When('modifica o {string} do usuário', (campo) => {
  detalhes.modificarCampoUsuario(campo);
});

When('submete o formulário de atualização', () => {
  detalhes.submeterAtualizacao();
});

Then('o sistema atualiza o {string} do usuário corretamente', (campo) => {
  detalhes.verificarAtualizacao(campo);
});
