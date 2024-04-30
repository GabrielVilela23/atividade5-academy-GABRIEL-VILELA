describe('Listar Usuários', () => {
    beforeEach(() => {
      cy.visit('/usuarios'); // Supondo que a página de usuários seja acessada através deste URL
    });
  
    it('Deve exibir todos os usuários cadastrados', () => {
      // Verifica se a lista de usuários está visível na página
      cy.get('.lista-usuarios').should('be.visible');
  
      // Verifica se há pelo menos um usuário na lista
      cy.get('.lista-usuarios .usuario').should('have.length.gt', 0);
    });
  
    it('Deve exibir uma mensagem de cadastro se não houver usuários cadastrados', () => {
      // Simula uma situação em que não há usuários cadastrados
      cy.intercept('/api/usuarios', { fixture: 'usuarios_vazia.json' });
  
      // Verifica se uma mensagem de cadastro é exibida
      cy.get('.lista-usuarios').should('not.exist');
      cy.contains('Nenhum usuário cadastrado.').should('be.visible');
    });
  
    it('Deve redirecionar para a página de cadastro ao clicar no botão para cadastrar usuário', () => {
      // Verifica se o botão para cadastrar usuário está presente
      cy.contains('Novo').click();
  
      // Verifica se a URL foi redirecionada para a página de cadastro de usuário
      cy.url().should('include', '/cadastro');
    });
  });
  