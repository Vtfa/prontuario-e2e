// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
  
    cy.fixture('user').then((userData) => { 
      
      const user = userData.validUser;
      
      cy.visit('/auth/signin'); 
      cy.url().should('include', '/auth/signin');
  
      cy.get('[data-cy="email"]').type(user.username);
      cy.get('[data-cy="password"]').type(user.password);
      cy.get('[data-cy="save-button"]').click();
  
      cy.url().should('not.include', '/auth/signin');
      cy.url().should('include', '/dashboard');
      
    });
  });