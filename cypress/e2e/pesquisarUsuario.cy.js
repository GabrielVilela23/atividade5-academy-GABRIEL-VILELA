import Cadastro from "../support/pages/cadastrar.page.js";
import Listar from "../support/pages/listarUsuarios.page.js";
import Pesquisar from "../support/pages/pesquisar.page.js";

var listar = new Listar();
var cadastro = new Cadastro ();
var pesquisar = new Pesquisar ();

beforeEach (()=>{
    cy.visit("/users");
  });

describe ("Pesquisa de usuario", () =>{
    it ("Deve ser possivel pesquisar pelo usuario usando seu e-mail", () =>{
        cy.get(listar.pesquisaUsuario)
        .should("be.visible")
        .click()
        .type(cadastro.email)
        .wait(10000)
        .should("contain", pesquisar.mensagemUsuarioNaoEncontrado)
        .should("be.visible");
    })
})