describe('Update MDP', () => {

  const url = 'https://app.codereview.allence.cloud/admin/licences';
  const email = 'raniabenammar36@gmail.com';
  const password = '1234566';
  const newPassword = '123456';

  // 🔥 PAUSE ENTRE CHAQUE TEST
  afterEach(() => {
    cy.wait(1000);
  });

  const goToChangePassword = () => {

    cy.intercept('GET', '**/licenses**').as('getLicences');
    cy.intercept('GET', '**/team-members**').as('getTeamMembers');
    cy.intercept('GET', '**/users**').as('getUsers');

    cy.visit(url);

    cy.get('input[type="email"]', { timeout: 20000 })
      .should('be.visible')
      .clear()
      .type(email, { delay: 100 });

    cy.get('input[type="password"]')
      .should('be.visible')
      .clear()
      .type(password, { log: false, delay: 100 });

    cy.get('button[type="submit"]')
      .should('be.enabled')
      .click();

    cy.url({ timeout: 20000 })
      .should('include', '/admin');

    cy.wait('@getLicences');

    cy.get('button.avatar.mat-mdc-menu-trigger')
      .should('be.visible')
      .click({ force: true });

    cy.contains('Modifier mot de passe')
      .should('be.visible')
      .click();

    cy.url()
      .should('include', '/admin/manage-account/change-password');
  };

  const typePassword = (selector, value) => {

    cy.get(selector)
      .parents('mat-form-field')
      .click();

    cy.get(selector)
      .clear()
      .type(value, { log: false, delay: 100 });
  };

  // =========================
  it('Erreur ancien mot de passe incorrect', () => {

    goToChangePassword();

    typePassword('input[formcontrolname="oldPassword"]', 'wrongPassword');
    typePassword('input[formcontrolname="newPassword"]', newPassword);

    cy.contains('button', 'Enregistrer').click();

    cy.contains(/incorrect|mot de passe|invalid/i, { timeout: 20000 })
      .should('be.visible');
  });

  // =========================
  it('Erreur mot de passe invalide', () => {

    goToChangePassword();

    typePassword('input[formcontrolname="oldPassword"]', password);
    typePassword('input[formcontrolname="newPassword"]', '123');

    cy.contains('button', 'Enregistrer').click();

    cy.contains(/invalide|faible|mot de passe|error/i, { timeout: 20000 })
      .should('be.visible');
  });

  // =========================
  it('Champs vides → champs en rouge', () => {

    goToChangePassword();

    cy.contains('button', 'Enregistrer').click();

    cy.get('input[formcontrolname="oldPassword"]')
      .should('have.class', 'ng-invalid');

    cy.get('input[formcontrolname="newPassword"]')
      .should('have.class', 'ng-invalid');
  });

  // =========================
  it('Changer mot de passe avec succès', () => {

    goToChangePassword();

    typePassword('input[formcontrolname="oldPassword"]', password);
    typePassword('input[formcontrolname="newPassword"]', newPassword);

    cy.contains('button', 'Enregistrer').click();

    cy.contains(/mot de passe|succès|success|updated/i, { timeout: 20000 })
      .should('be.visible');
  });

});