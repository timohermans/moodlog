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

Cypress.Commands.add(
    'login',
    ({
        username = undefined,
        password = undefined,
    }) => {
        cy.visit('/');
        cy.get('[data-cy=login]').click();

        cy.url().then(url => {
            if (url.indexOf(Cypress.config().baseUrl) !== -1) return;

            cy.get('#username').type(username || Cypress.env('keycloak_username'));
            cy.get('#password').type(password || Cypress.env('keycloak_password'));
            cy.get('form').submit();
        });
    }
);