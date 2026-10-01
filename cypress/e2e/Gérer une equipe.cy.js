//describe('CRUD équipe', () => {
 // const url = 'https://app-uat.codereview.allence.cloud/client/teams';
 // const nomEquipe = 'rania ben ammar';
 // const nomEquipeModifie = 'rania ben ammar modifiée';
 // const email = 'raniabenammar491@gmail.com';
 // const password = '123456';

  //beforeEach(() => {
    // Intercepts (plus fiable que le DOM)
   // cy.intercept('GET', '**/teams*').as('getTeams');
   // cy.intercept('GET', '**/team-members*').as('getMembers');
  //});

 // it('Créer, modifier et supprimer une équipe', () => {
    //cy.visit(url);

    // =========================
    // 🔐 LOGIN
    // =========================
   // cy.get('input[type="email"]', { timeout: 20000 })
    //  .type(email, { delay: 100 });

   // cy.get('input[type="password"]')
   //   .type(password, { delay: 100 });

   // cy.get('button[type="submit"]').click();

   // cy.url({ timeout: 30000 }).should('include', '/client/teams');

    // attendre les appels API
   // cy.wait('@getTeams');
   // cy.wait('@getMembers');

    // attendre disparition loader
   // cy.get('.spinner-overlay', { timeout: 20000 }).should('not.exist');

    // =========================
    // ➕ CRÉATION
    // =========================
   // cy.contains('button', /Créer une équipe/i)
    //  .should('be.visible')
    //  .click();

    //cy.contains(/créer une équipe/i).should('be.visible');

   // cy.get('input:visible')
    //  .first()
    //  .clear()
     // .type(nomEquipe, { delay: 100 });

   // cy.contains('button', /Sauvegarder/i)
    //  .should('be.enabled')
    //  .click();

   // cy.wait('@getTeams');
   // cy.contains(nomEquipe, { timeout: 15000 }).should('exist');

    // =========================
    // ✏️ MODIFICATION
    // =========================
   // cy.contains('tr', nomEquipe, { timeout: 15000 })
     // .should('exist')
     // .within(() => {
      //  cy.get('button:visible, svg, [aria-label]')
       //   .last()
      //    .click();
     // });

    //cy.contains("Modifier l'équipe")
    //  .should('be.visible')
    //  .click();

   // cy.contains(/Modifier une équipe/i).should('be.visible');

    //cy.get('input:visible')
     // .first()
     // .clear()
     // .type(nomEquipeModifie, { delay: 100 });

    //cy.contains('button', /Sauvegarder/i).click();

   // cy.wait('@getTeams');
   // cy.contains(nomEquipeModifie, { timeout: 15000 }).should('exist');

    // =========================
    // 🗑️ SUPPRESSION
    // =========================
    //cy.contains('tr', nomEquipeModifie, { timeout: 15000 })
     // .should('exist')
     // .within(() => {
       // cy.get('button:visible, svg, [aria-label]')
        //  .last()
        //  .click();
     // });

   // cy.contains("Supprimer l'équipe")
    //  .should('be.visible')
    //  .click();

   // cy.contains('button', /Confirmer|Oui|Supprimer/i)
     // .should('be.visible')
    //  .click();

   // cy.wait('@getTeams');

  //  cy.contains(nomEquipeModifie, { timeout: 15000 }).should('not.exist');
//  });
//});