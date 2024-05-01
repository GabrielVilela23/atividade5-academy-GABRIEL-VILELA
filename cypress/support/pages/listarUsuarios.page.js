export default class Listar {

    pesquisaUsuario = ".sc-gsFSXq";
    listaUsuarios = ".sc-bXCLTC.jykigL";
    detalhesUsuario = "#userDataDetalhe";
    nomeUsuario = '[data-test="userDataName"]';
    emailUsuario = '[data-test="userDataEmail"]';
    paginaAtualUsuarios = "#paginacaoAtual";
    proximaPagina = "#paginacaoProximo";
    paginaAnterior = "#paginacaoVoltar";

    pesquisaNome () {
        cy.get (this.pesquisaUsuario).type(name);
    }
    pesquisaEmail (){
        cy.get (this.pesquisaUsuario).type(email);
    }
    passarPagina () {
        cy.get (this.proximaPagina).click();
    }
    voltarPagina() {
        cy.get (this.paginaAnterior).click();
    }

}