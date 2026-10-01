//describe('Ajouter un membre', () => { 

  //const url = 'https://app-uat.codereview.allence.cloud/client/teams';
  //const email = 'raniabenammar491@gmail.com';
  //const password = '123456';

  //it("Inviter un membre avec rôle DEV", () => {

    // =========================
    // 🔗 INTERCEPTS (AVANT VISIT)
    // =========================
    //cy.intercept('GET', '**/teams?*').as('getTeams');
    //cy.intercept('POST', '**/team-members*').as('invite');

    // =========================
    // 🌐 VISIT
    // =========================
    //cy.visit(url);

    // =========================
    // 🔐 LOGIN
    // =========================
    //cy.get('input[type="email"]', { timeout: 20000 })
      //.should('be.visible')
     // .clear()
     // .type(email, { delay: 100 });

   // cy.get('input[type="password"]')
     // .should('be.visible')
     // .clear()
     // .type(password, { delay: 100 });

   // cy.get('button[type="submit"]').click();

    // =========================
    // ✅ VERIFY REDIRECT
    // =========================
    //cy.url({ timeout: 30000 })
     // .should('include', '/client/teams');

    // =========================
    // ⏳ WAIT TEAMS LOAD
    // =========================
    //cy.wait('@getTeams');

    // =========================
    // 👇 WAIT UI INSTEAD (PLUS STABLE)
    // =========================
    //cy.contains('Équipe Rania', { timeout: 20000 })
     // .should('be.visible');

    // =========================
    // ⚙️ OPEN TEAM MENU
    // =========================
    //cy.contains('Équipe Rania')
      //.parent()
     // .within(() => {
     //   cy.get('button').last().click({ force: true });
     // });

    // =========================
    // 📂 NAVIGATION
    // =========================
    //cy.contains('Gérer').click();
   // cy.contains('Invitations').click();
   // cy.contains('Ajouter un membre').click();

    // =========================
    // 📧 EMAIL INPUT
    // =========================
    //cy.get('input[type="email"]', { timeout: 10000 })
     // .should('be.visible')
     // .clear()
      //.type('benammarrania420@gmail.com', { delay: 100 });

    // =========================
    // 🎯 ROLE SELECTION (Angular Material FIX)
    // =========================
    //cy.get('mat-form-field')
     // .contains('Rôle')
     // .parents('mat-form-field')
     // .find('.mat-mdc-select-trigger')
     // .click({ force: true });

    //cy.get('.cdk-overlay-pane')
     // .should('be.visible')
     // .contains('mat-option', 'DEV')
     // .click({ force: true });

    // =========================
    // 📦 MODAL CHECK
    // =========================
   // cy.get('mat-dialog-container')
     // .should('be.visible');

    // =========================
    // 🚀 SEND INVITATION
    // =========================
   // cy.get('button.send-btn')
     // .should('be.visible')
      //.click({ force: true });

    // =========================
    // ✅ ASSERT API RESPONSE
    // =========================
    //cy.wait('@invite')
     // .its('response.statusCode')
     // .should('eq', 201);

  //});

///});