import Listar from "../support/pages/listarUsuarios.page.js";
import Detalhes from "../support/pages/detalhes.page.js"

var listar = new Listar();
var detalhes = new Detalhes ();

beforeEach (()=>{
  cy.visit("/users");
});

describe ("Listar usuários", () => {
  it ("Deve mostrar as informações dos usuários cadastrados", () => {
      cy.intercept("GET", "/api/v1/users").as("exibirUsuario");
      cy.get(listar.listaUsuarios)
      .should("be.visible");

      cy.wait("@exibirUsuario").then( (lista) => {
        cy.get(listar.nomeUsuario)
          .contains("Nome")
          .should("be.visible");
        cy.get(listar.emailUsuario)
          .contains("E-mail")
          .should("be.visible");
        cy.get(listar.detalhesUsuario)
        .contains("Ver detalhes")
        .should("be.visible");
  })
})

it ("Deve exibir mais detalhes ao se clicar em 'Ver detalhes'", () =>{
  cy.get (detalhes.verDetalhes);
  //cy.get(detalhes.nomeDetalhe)
    //.contains("Nome")
    //.should("be.visible");
  //cy.get(detalhes.emailDetalhe)
    //.contains("E-mail")
    //.should("be.visible"); 
  //cy.get(detalhes.idDetalhe)
    //.contains("id")
    //.should("be.visible");
})

})