//describe('CRUD profile', () => {

  //const url = 'https://app.codereview.allence.cloud/client/teams';
  //const email = 'benammarrania420@gmail.com';
 /// const password = '1234566';

  /*it('Modifier profil utilisateur après load complet', () => {

    const newFirstName = 'rania';
    const newLastName = 'ben ammar';
    const newPhone = '26023212';

    // =========================
    // 🔐 LOGIN
    // =========================
    cy.visit(url);

    // Intercept API réelle
    cy.intercept('GET', '**///team-members*').as('getTeamMembers');

    /*cy.get('input[type="email"]', { timeout: 20000 })
      .should('be.visible')
      .clear()
      .type(email);

    cy.get('input[type="password"]')
      .should('be.visible')
      .clear()
      .type(password, { log: false });

    cy.get('button[type="submit"]')
      .should('be.enabled')
      .click();

    // =========================
    // ⏳ ATTENDRE QUE LA PAGE CLIENT/TEAMS SOIT CHARGÉE
    // =========================
    cy.url({ timeout: 20000 }).should('include', '/client/teams');
    cy.wait('@getTeamMembers');

    // =========================
    // 👤 OUVRIR LE MENU AVATAR APRÈS LOAD
    // =========================
    cy.get('button.avatar.mat-mdc-menu-trigger', { timeout: 20000 })
      .should('be.visible')
      .click({ force: true });

    // =========================
    // 👤 CLIQUER SUR PROFILE
    // =========================
    cy.contains('Profile', { timeout: 10000 })
      .should('be.visible')
      .click();

    // =========================
    // ⏳ ATTENDRE PAGE PROFILE
    // =========================
    cy.url({ timeout: 20000 })
      .should('include', '/client/manage-account/edit-profile');

    cy.get('input', { timeout: 20000 })
      .should('have.length.at.least', 3);

    // =========================
    // ✍️ MODIFIER LES CHAMPS
    // =========================
    cy.contains('Prénom')
      .parent()
      .find('input')
      .click({ force: true })
      .clear()
      .type(newFirstName);

    cy.contains('Nom')
      .parent()
      .find('input')
      .click({ force: true })
      .clear()
      .type(newLastName);

    cy.contains('Numéro de téléphone')
      .parent()
      .find('input')
      .click({ force: true })
      .clear()
      .type(newPhone);

    // =========================
    // 💾 ENREGISTRER
    // =========================
    cy.contains('button', 'Enregistrer')
      .should('be.visible')
      .click();

  });

});*/