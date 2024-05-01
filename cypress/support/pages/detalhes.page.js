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
}