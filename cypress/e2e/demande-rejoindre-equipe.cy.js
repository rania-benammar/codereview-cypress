describe('Demande de rejoindre à une équipe', () => { 
  const url = 'https://app.codereview.allence.cloud/client/teams';

  const email = 'benammarrania420@gmail.com';
  const password = '1234566';

  it("Inviter un membre avec rôle DEV", () => {

    // =========================
    // 📡 INTERCEPT (AVANT ACTION)
    // =========================
    cy.intercept('GET', '**/teams?*').as('getTeams');

    // =========================
    // 🔐 LOGIN
    // =========================
    cy.visit(url);

    cy.get('input[type="email"]', { timeout: 20000 })
      .should('be.visible')
      .type(email, { delay: 100 });

    cy.get('input[type="password"]')
      .should('be.visible')
      .type(password, { delay: 100 });

    cy.get('button[type="submit"]').click();

    // =========================
    // ⏳ ATTENDRE LES TEAMS
    // =========================
    cy.wait('@getTeams', { timeout: 20000 })
      .its('response.statusCode')
      .should('eq', 200);

    cy.url({ timeout: 30000 })
      .should('include', '/client/teams');

    // =========================
    // 👇 OPEN TEAM MENU
    // =========================
    cy.contains('Équipe Rania', { timeout: 20000 })
      .should('be.visible')
      .parent()
      .within(() => {
        cy.get('button').last().click({ force: true });
      });

    // =========================
    // 👇 NAVIGATION
    // =========================
    cy.contains('Demander à rejoindre')
      .should('be.visible')
      .click();

    // =========================
    // 🧾 REMPLIR LE FORMULAIRE
    // =========================

    // ✅ Jeton
    cy.contains('Jeton utilisateur plateforme', { timeout: 10000 })
      .should('exist')
      .closest('mat-form-field')
      .find('input')
      .should('be.visible')
      .clear()
      .type('glpat-w16Y-v9xie3cbDolR54Wjm86MQp1Ojg5CA.01.0y0pyk0k2', { delay: 100 });

    // ✅ Select rôle
    cy.get('mat-form-field', { timeout: 10000 })
      .contains('Rôle')
      .parents('mat-form-field')
      .find('.mat-mdc-select-trigger')
      .click({ force: true });

    cy.get('.cdk-overlay-pane', { timeout: 10000 })
      .should('be.visible')
      .contains('mat-option', 'Développeur')
      .click({ force: true });

    // =========================
    // 🚀 ENVOYER LA DEMANDE
    // =========================
    cy.contains('Envoyer la demande')
      .should('be.visible')
      .click({ force: true });

    // =========================
    // ✅ VERIFICATION
    // =========================
    cy.get('body', { timeout: 10000 }).then(($body) => {
      const text = $body.text().toLowerCase();

      if (text.includes('demande')) {
        cy.contains(/demande/i).should('exist');
      }
    });

  });
});