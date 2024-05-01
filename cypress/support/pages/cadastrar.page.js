export default class Cadastro {

    novoCadastro = '[href= /users/novo"]';
    inputNome = "#name";
    inputEmail = "#email";
    Salvar = ".sc-dAlyuH";
    nome = "blasblas";
    email = "blasblas@blas.com";

    getCadastro (){
        cy.get (this.novoCadastro).click();
    }
    digitarNome (){
        cy.get(this.inputNome).type(nome);
    }
    digitarEmail (){
        cy.get(this.inputEmail).type(email);
    }
    clicarSalvar (){
        cy.get(this.Salvar).click();
    }
}