describe('Mot de passe oublié', () => {

  const url = 'https://app.codereview.allence.cloud/auth/reset-password';
  const email = 'raniabenammar36@gmail.com';

  it('Envoyer le code de réinitialisation', () => {

    cy.visit(url);

    cy.get('input[formcontrolname="email"]', { timeout: 20000 })
      .should('be.visible')
      .clear()
      .type(email, { delay: 100 }); 

    cy.contains('button', 'Envoyer code', { timeout: 10000 })
      .should('be.visible')
      .click();

  });

});