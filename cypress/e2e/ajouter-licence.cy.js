describe('Ajouter une licence', () => {

  const baseUrl = 'https://app.codereview.allence.cloud';
  const email = 'benammarrania420@gmail.com';
  const password = '1234566';
  const licenceId = '6a6a199a21af2d2bf35e4503'
  beforeEach(() => {

    cy.intercept('GET', '**/licenses*').as('getLicences');
    cy.intercept('POST', '**/licenses*').as('createLicence');

  });

  it('Login + ajout licence', () => {

    // =========================
    // 🔐 LOGIN
    // =========================
    cy.visit(`${baseUrl}/client/licences/login`);

    cy.get('input[type="email"]', { timeout: 20000 })
      .should('be.visible')
      .type(email, { delay: 100 });

    cy.get('input[type="password"]')
      .should('be.visible')
      .type(password, { delay: 100 });

    cy.get('button[type="submit"]')
      .should('be.visible')
      .click();

    // =========================
    // 🔁 REDIRECTION STABLE
    // =========================
    cy.url({ timeout: 30000 })
      .should('include', '/client/licences');

    // =========================
    // 📄 CHARGEMENT PAGE
    // =========================
    cy.wait('@getLicences');

    cy.get('.spinner-overlay', { timeout: 20000 })
      .should('not.exist');

    // =========================
    // ➕ OUVRIR MODAL
    // =========================
    cy.contains('button', 'Ajouter la licence', { timeout: 30000 })
      .should('be.visible')
      .click();

    // =========================
    // 🧾 INPUT LICENCE
    // =========================
    cy.get('mat-dialog-container', { timeout: 15000 })
      .should('be.visible')
      .within(() => {

        cy.contains('ID de la licence')
          .should('exist');

        cy.get('input')
          .should('be.visible')
          .clear()
          .type(licenceId, { delay: 100 });

        // =========================
        // 💾 SAVE
        // =========================
        cy.contains('button', 'Enregistrer')
          .should('not.be.disabled')
          .click();

      });

  });

});