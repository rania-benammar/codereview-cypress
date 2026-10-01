describe('Test Login )', () => {

  beforeEach(() => {
    cy.visit('https://app.codereview.allence.cloud/auth/login')
  })

  // Pause de 1 seconde entre chaque test pour observer visuellement
  afterEach(() => {
    cy.wait(2000)
  })

  it('Connexion avec des identifiants valides', () => {
    cy.intercept('POST', '**/users').as('getUser')

    cy.get('input[type=email]').type('benammarrania420@gmail.com', { delay: 100 })
    cy.get('input[type=password]').type('1234566', { delay: 100 })
    cy.contains('button', 'Connexion').click()

    cy.wait('@getUser')

    cy.url({ timeout: 10000 }).should('include', '/client/teams')
  })

  it('Connexion avec email invalide', () => {
    cy.intercept('POST', '**cognito-idp**').as('loginFail')

    cy.get('input[type=email]').type('fake@gmail.com', { delay: 100 })
    cy.get('input[type=password]').type('123456', { delay: 100 })
    cy.contains('button', 'Connexion').click()

    cy.wait('@loginFail')
      .its('response.body')
      .should('have.property', 'message', 'User does not exist.')
  })

  it('Connexion avec mot de passe invalide', () => {
    cy.intercept('POST', '**cognito-idp**').as('loginFail')

    cy.get('input[type=email]').type('raniabenammar491@gmail.com', { delay: 100 })
    cy.get('input[type=password]').type('wrongpassword', { delay: 100 })
    cy.contains('button', 'Connexion').click()

    cy.wait('@loginFail')
      .its('response.body')
      .then(body => {
        expect(body).to.have.property('ChallengeName')
        expect(body.ChallengeName).to.eq('PASSWORD_VERIFIER')
      })
  })

  //it('Connexion avec email vide', () => {
   // cy.get('input[type=password]').type('123456', { delay: 100 })
   // cy.contains('button', 'Connexion').click()

   // cy.get('input[type=email]').then($input => {
   //   expect($input[0].validationMessage).to.eq('Veuillez renseigner ce champ.')
  //  })
 // })

 // it('Connexion avec mot de passe vide', () => {
   // cy.get('input[type=email]').type('raniabenammar491@gmail.com', { delay: 100 })
   // cy.contains('button', 'Connexion').click()

   // cy.get('input[type=password]').then($input => {
   //   expect($input[0].validationMessage).to.eq('Veuillez renseigner ce champ.')
  //  })
  //})

  //it('Connexion avec email et mot de passe vides', () => {
  //  cy.contains('button', 'Connexion').click()

  //  cy.get('input[type=email]').then($input => {
    //  expect($input[0].validationMessage).to.eq('Veuillez renseigner ce champ.')
   // })
 // })
})