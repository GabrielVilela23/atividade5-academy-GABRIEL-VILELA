export default class Pesquisa {

    mensagemUsuarioNEcontrado = ".sc-koXPp";
    sugestaoCadastro = ".sc-bmzYkS";

verificarResultadosPesquisa(tipo) {
    if (tipo === 'nome') {
      cy.get(this.listaUsuarios).should('contain.text', termo);
    } else if (tipo === 'email') {
      cy.get(this.listaUsuarios).should('contain.text', termo);
    } else if (tipo === 'ID') {
      cy.get(this.listaUsuarios).should('contain.text', termo);
    } else if (tipo === 'sem resultados') {
      cy.get(this.mensagemSemResultados).should('be.visible');
    }
  }
}