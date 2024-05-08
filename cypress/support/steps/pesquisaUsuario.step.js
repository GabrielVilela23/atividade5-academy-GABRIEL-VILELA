import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Listar from '../listarUsuarios.page';
import Pesquisa from '../pesquisar.page';

const listar = new Listar();
const pesquisa = new Pesquisa();

Given('que existem usuários cadastrados no sistema', () => {
});

When('o usuário insere um {string} na barra de pesquisa', (termo) => {
  listar.pesquisarUsuario(termo);
});

When('pressiona o botão de pesquisa', () => {
  listar.executarPesquisa();
});

Then('o sistema exibe os usuários cujos {string} correspondem à pesquisa', (tipo) => {
  pesquisa.verificarResultadosPesquisa(tipo);
});
