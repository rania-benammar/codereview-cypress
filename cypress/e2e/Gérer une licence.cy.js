//describe('CRUD licence + envoi email + cancel + delete', () => {

 // const url = 'https://app-uat.codereview.allence.cloud/admin/licences';
 // const email = 'raniabenammar36@gmail.com';
 // const password = '1234566';
  //const nbJetons = '54261';
  //const model = 'GPT';
  //const emailUser = 'benammarrania420@gmail.com';
//it('Create licence + send email + cancel + delete', () => {

    // =========================
    // 🔐 LOGIN
    // =========================
  //  cy.visit(url);

   // cy.get('input[type="email"]', { timeout: 20000 })
     // .should('be.visible')
     // .type(email, { delay: 100 });

   // cy.get('input[type="password"]')
     // .should('be.visible')
    //  .type(password, { delay: 100 });

  //  cy.get('button[type="submit"]')
     // .should('be.enabled')
  //   .click();

   // cy.url({ timeout: 30000 })
     // .should('include', '/admin/licences');

    // =========================
    // 📡 WAIT LIST
    // =========================
   // cy.intercept('GET', '**/licenses*').as('getLicenses');
    //cy.wait('@getLicenses');

   // cy.get('tr', { timeout: 20000 })
   //   .should('have.length.greaterThan', 1);

    // =========================
    // ➕ CREATE LICENCE
    // =========================
   // cy.contains('button', 'Ajouter une licence')
     // .click();

  //  cy.get('mat-dialog-container')
    //  .should('be.visible')
    //  .within(() => {

     //   cy.get('input[type="number"]')
       //   .clear()
       //   .type(nbJetons, { delay: 100 });

      //  cy.get('mat-select').click();
   //   });

   // cy.contains('mat-option', model).click();

   // cy.intercept('POST', '**/licenses').as('createLicense');

   // cy.contains('button', 'Ajouter la licence').click();

    //cy.wait('@createLicense');

    // =========================
    // 🔍 VERIFY ROW
    // =========================
    //cy.contains('tr', nbJetons, { timeout: 20000 })
   //   .should('be.visible');

    // =========================
    // 📬 OPEN MENU
    // =========================
    //cy.contains('tr', nbJetons)
    //  .within(() => {
   //     cy.get('button').filter(':visible').last().click();
     // });

   // cy.get('.cdk-overlay-pane', { timeout: 10000 })
   //   .should('be.visible');

    // =========================
    // 📩 SEND EMAIL (optionnel)
    // =========================
  //  cy.get('.cdk-overlay-pane')
    //  .should('be.visible');

    
   // cy.get('.cdk-overlay-pane')
   //   .contains(/mail|email|send/i)
    //  .should('be.visible')
    //  .click();

   // cy.contains('mat-dialog-container', /envoyer la licence/i)
     // .should('be.visible')
    //  .within(() => {

      //  cy.contains("E-mail de l'utilisateur")
       //   .parents('mat-form-field')
       //   .find('input')
        //  .should('be.visible')
        //  .clear()
        //  .type(emailUser, { delay: 100 });

       // cy.contains('button', /^Envoyer$/i)
        //  .should('be.visible')
        //  .click();
      //});

   // cy.contains(/envoyé|succès|sent/i, { timeout: 15000 })
     // .should('be.visible');
    

    // =========================
    // ❌ CANCEL LICENCE
    // =========================
   // cy.contains('tr', nbJetons)
    //  .within(() => {
     //   cy.get('button').filter(':visible').last().click();
     // });

    //cy.get('.cdk-overlay-pane')
     // .should('be.visible')
     // .as('menuCancel');

   // cy.get('@menuCancel')
    //  .contains(/annuler|cancel/i)
    //  .should('be.visible')
    //  .click();

   // cy.contains(/annulé|canceled|succès/i, { timeout: 15000 })
    //  .should('be.visible');

    // =========================
    // 🗑️ DELETE LICENCE
    // =========================
    //cy.contains('tr', nbJetons)
     // .within(() => {
     //   cy.get('button').filter(':visible').last().click();
     // });

    //cy.get('.cdk-overlay-pane')
    //  .should('be.visible')
    //  .as('menuDelete');

    //cy.get('@menuDelete')
     // .contains(/supprimer|delete/i)
     // .should('be.visible')
      //.click();

   // cy.contains('mat-dialog-container', /confirmer|supprimer/i)
    //  .should('be.visible')
     // .within(() => {
     //   cy.contains('button', /confirmer|oui|supprimer/i)
     //     .should('be.visible')
     //     .click();
     // });

    // =========================
    // ✅ VERIFY DELETE
    // =========================
  //  cy.contains('tr', nbJetons).should('not.exist');

  //});

//});