//describe('Switch Équipe → Projet → MR workflow', () => {

 // const url = 'https://app-uat.codereview.allence.cloud/client/teams';
  //const email = 'raniabenammar491@gmail.com';
 // const password = '123456';
 // const projectID = '2137';

 // const waitForSpinnerToDisappear = () => {
   // cy.get('body').then(($body) => {
    //  if ($body.find('.spinner-overlay').length > 0) {
   //     cy.get('.spinner-overlay', { timeout: 20000 })
    //      .should('not.exist');
  //    }
  //  });
  //};

  //const openProjectMenu = (value) => {

   // cy.contains('tr', value, { timeout: 20000 })
     // .scrollIntoView()
     // .should('exist')
      //.within(() => {

      //  cy.get('button')
      //    .first()
      //    .click({ force: true });
     // });

    //waitForSpinnerToDisappear();
  //};

  //it('Login → Équipes → Projet → MR → menu 3 points', () => {

    // =========================
    // INTERCEPTS
    // =========================
   // cy.intercept('GET', '**/project*').as('getProjects');
    //cy.intercept('GET', '**/merge_requests*').as('getMRs');
    //cy.intercept('GET', '**/team*').as('getTeams');

    // =========================
    // LOGIN
    // =========================
    //cy.visit(url);

    //cy.get('input[type="email"]', { timeout: 20000 })
    //  .should('be.visible')
    //  .type(email, { delay: 100 });

    //cy.get('input[type="password"]')
    //  .should('be.visible')
     // .type(password, { delay: 100 });

    //cy.get('button[type="submit"]').click();

   // cy.location('pathname', { timeout: 30000 })
   //   .should('include', '/client/teams');

    // =========================
    // ÉQUIPES
    // =========================
   // cy.contains(/Équipes/i, { timeout: 15000 })
      //.should('be.visible')
     // .click();

   // cy.wait('@getTeams');

   // cy.get('table, mat-table', { timeout: 15000 })
     // .should('be.visible');

    // =========================
    // PROJETS
    // =========================
   // cy.contains(/Projet/i, { timeout: 15000 })
    //  .should('be.visible')
     // .click({ force: true });

   // cy.wait('@getProjects');

    //waitForSpinnerToDisappear();

   // cy.get('mat-row, tr[role="row"]')
    //  .should('have.length.greaterThan', 0);

    // =========================
    // OPEN PROJECT
    // =========================
   // openProjectMenu(projectID);

    // =========================
    // SELECT FIRST MR
    // =========================
    //cy.get('mat-row, tr[role="row"]', { timeout: 15000 })
     // .first()
     // .as('mrRow')
      //.scrollIntoView()
     // .should('exist');

    //cy.contains('tr', "maycenebf", { timeout: 15000 })
      //.should('exist')
     // .within(() => {
        //cy.get('button:visible, svg, [aria-label]')
       //   .last()
         // .click();
     // });

    // =========================
    // ACTION MENU
    // =========================
  //  cy.get('.cdk-overlay-pane', { timeout: 10000 })
     // .should('be.visible')
     // .contains(/examiner.*fusion/i)
     // .click({ force: true });

    // =========================
    // FINAL CHECK
    // =========================
   // waitForSpinnerToDisappear();

   // cy.url().should('include', 'open-mrs');
   // cy.get('body').should('contain.text', 'MR');

 // });

//});