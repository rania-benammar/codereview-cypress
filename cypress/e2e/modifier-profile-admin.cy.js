describe('Modifier profile', () => {

  const url = 'https://app.codereview.allence.cloud/admin/licences';
  const email = 'raniabenammar36@gmail.com';
  const password = '1234566';

  it('Modifier profil utilisateur après load complet', () => {

    const newFirstName = 'Rania';
    const newLastName = 'Ben Ammar';
    const newPhone = '26023212';

    cy.visit(url);

    cy.intercept('GET', '**/licenses*').as('getLicences');
    cy.intercept('GET', '**/team-members*').as('getTeamMembers');
    cy.intercept('GET', '**/users*').as('getUsers');

    cy.get('input[type="email"]', { timeout: 20000 })
      .should('be.visible')
      .clear()
      .type(email, { delay: 100 });

    cy.get('input[type="password"]')
      .should('be.visible')
      .clear()
      .type(password, { delay: 100, log: false });

    cy.get('button[type="submit"]')
      .should('be.enabled')
      .click();

    cy.wait('@getLicences');
    cy.wait('@getTeamMembers');
    cy.wait('@getUsers');

    cy.get('table, .mat-table, [class*="licence"]', { timeout: 30000 })
      .should('be.visible');

    cy.get('button.avatar.mat-mdc-menu-trigger', { timeout: 20000 })
      .should('be.visible')
      .should('not.be.disabled')
      .click({ force: true });

    cy.contains('Profile', { timeout: 10000 })
      .should('be.visible')
      .click();

    cy.url({ timeout: 20000 })
      .should('include', '/admin');

    cy.get('input', { timeout: 20000 })
      .should('have.length.at.least', 3);

    cy.contains('Prénom')
      .parent()
      .find('input')
      .click({ force: true })
      .clear()
      .type(newFirstName, { delay: 100 });

    cy.contains('Nom')
      .parent()
      .find('input')
      .click({ force: true })
      .clear()
      .type(newLastName, { delay: 100 });

    cy.contains('Numéro de téléphone')
      .parent()
      .find('input')
      .click({ force: true })
      .clear()
      .type(newPhone, { delay: 100 });

    cy.contains('button', 'Enregistrer')
      .should('be.visible')
      .click();

  });

});