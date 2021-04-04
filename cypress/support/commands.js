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

import createUUID from './createUUID';

Cypress.Commands.add(
    'login',
    ({
        username = undefined,
        password = undefined,
    }) => {
        const usernameForm = username || Cypress.env('keycloak_username');
        const passwordForm = password || Cypress.env('keycloak_password');
        const root = Cypress.env('keycloak_domain');
        const client_id = Cypress.env('keycloak_client_id');
        const realm = Cypress.env('keycloak_realm');
        const scope = Cypress.env('keycloak_scope');
        const redirect_uri = Cypress.env('keycloak_redirect_uri') || 'http://localhost:3000';

        cy
            .request({
                url: `${root}/auth/realms/${realm}/protocol/openid-connect/auth`,
                qs: {
                    client_id,
                    redirect_uri,
                    scope,
                    state: createUUID(),
                    nonce: createUUID(),
                    response_type: 'code',
                    response_mode: 'fragment',
                },
            })
            .then((response) => {
                const html = document.createElement('html');
                html.innerHTML = response.body;

                const form = html.getElementsByTagName('form');
                const isAuthorized = !form.length;

                if (!isAuthorized)
                    return cy.request({
                        form: true,
                        method: 'POST',
                        url: form[0].action,
                        followRedirect: false,
                        body: {
                            username: usernameForm,
                            password: passwordForm,
                        },
                    });
            })
        cy.visit('/');
        cy.get('#login').click();
        cy.get('form').submit();
    }
);