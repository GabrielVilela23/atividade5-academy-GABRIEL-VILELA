export default class Detalhes {

    detalhes = "#userDataDetalhe";
    remover = ".scfUnMCh";
    nomeDetalhe = "#userName";
    emailDetalhe = "userEmail";
    idDetalhe =  ".sc-dLMFU";

    verDetalhes () {
        cy.get (this.detalhes).click();
    }
    removerUsuario () {
        cy.get (this.remover).click();
    }

modificarCampoUsuario(campo) {
    if (campo === 'nome') {
      cy.get(this.nomeDetalhe).clear().type(faker.name.firstName());
    } else if (campo === 'email') {
      cy.get(this.emailDetalhe).clear().type(faker.internet.email());
    }
  }

  submeterAtualizacao() {
    cy.get(this.salvarAtualizacao).click(); 
  }

  verificarAtualizacao(campo) {
    cy.get(this.mensagemSucesso).should('contain.text', `O ${campo} foi atualizado com sucesso`);
    
  }
}