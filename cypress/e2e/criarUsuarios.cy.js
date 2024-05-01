import Cadastro from "../support/pages/cadastrar.page.js";

var cadastro = new Cadastro ();

beforeEach (()=>{
    cy.visit("/users");
  });

describe ("Criação de usuários", () => {
    it ("Deve conseguir cadastrar usuario com campos válidos", () => {
        cy.get(cadastro.getCadastro);
        cy.get(cadastro.digitarNome);
        cy.get(cadastro.digitarEmail);
        cy.get(cadastro.clicarSalvar);
    
    })
})