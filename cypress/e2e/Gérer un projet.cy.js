//describe('CRUD projet - plateforme XYZ', () => {

  //const url = 'https://app-uat.codereview.allence.cloud/client/teams';
  //const email = 'raniabenammar491@gmail.com';
  //const password = '123456';

  //const platformUrl = 'https://gitlab.allence.cloud/';
  //const projectId = '2240';
  //const accessToken = 'glpat-kAU_giiVM0T2CzISdS0_L286MQp1Ojg5CA.01.0y0d0fkw1';

  //const language = 'Angular';
  //const framework = 'Angular Material';
  //const teamName = 'Équipe Rania';

  // =========================
  // HELPER DROPDOWN ANGULAR
  // =========================
 // const selectMat = (index, value) => {
    //cy.get('mat-select', { timeout: 15000 })
   ////   .eq(index)
    //  .should('be.visible')
      //.click({ force: true });

    //cy.get('div.cdk-overlay-container mat-option', { timeout: 15000 })
     // .contains(value, { matchCase: false })
      //.click();
  //};

 // it('Créer un projet via Equipes → Projet', () => {

    // ================= INTERCEPTIONS =================
   // cy.intercept('GET', '**/project*').as('getProjects');
  //  cy.intercept('POST', '**/project*').as('createProject');
   // cy.intercept('GET', '**/team-members*').as('getTeams');

    // ================= VISIT =================
   // cy.visit(url);

    // ================= LOGIN =================
   // cy.get('input[type="email"]', { timeout: 20000 })
    //  .should('be.visible')
    //  .type(email, { delay: 100 });

   // cy.get('input[type="password"]')
    //  .should('be.visible')
    //  .type(password, { delay: 100 });

    //cy.get('button[type="submit"]').click();

   // cy.location('pathname', { timeout: 30000 })
     // .should('include', '/client');

    // ================= NAVIGATION =================

    // Aller vers "Équipes"
    //cy.contains(/Équipes/i, { timeout: 15000 })
     // .should('be.visible')
     // .click();

    // Attendre chargement des équipes
    //cy.wait('@getTeams');

    // Cliquer sur "Projet"
    //cy.contains(/Projet/i, { timeout: 15000 })
     // .should('be.visible')
     // .click({ force: true });

    // Attendre chargement projets
    //cy.wait('@getProjects');

    // Cliquer sur "Créer un projet"
    //cy.contains(/Créer un projet/i, { timeout: 15000 })
      //.should('be.visible')
      //.click();

    // ================= INPUTS =================
    //cy.get('input[formcontrolname="gitUrl"]', { timeout: 15000 })
      //.click({ force: true })
     // .clear({ force: true })
      //.type(platformUrl, { delay: 100 });

    //cy.get('input:visible').then(inputs => {

     // cy.wrap(inputs[1])
      //  .click({ force: true })
       // .clear({ force: true })
       // .type(projectId, { delay: 100 });

      //cy.wrap(inputs[2])
       // .click({ force: true })
       // .clear({ force: true })
       // .type(accessToken, { delay: 100 });

    //});

    // ================= DROPDOWNS =================
    //selectMat(0, language);
    //selectMat(1, framework);
    //selectMat(2, teamName);

    // ================= SUBMIT =================
    //cy.contains('button', /Enregistrer/i)
     // .should('be.enabled')
    //  .click();

    // ================= VERIFY =================
    //cy.contains(projectId, { timeout: 20000 })
    //  .should('exist');

  //});

//});