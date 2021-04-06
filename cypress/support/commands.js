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
        const usernameForm = username || Cypress.env('keycloak_username');
        const passwordForm = password || Cypress.env('keycloak_password');

        cy.request({
            url: `http://localhost:3000/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F`
        })
            .then((response) => {
                const html = document.createElement('html');
                html.innerHTML = response.body;

                const form = html.querySelector('form');
                const data = {};
                new FormData(form).forEach((value, key) => data[key] = value);

                return cy.request({
                    url: form.action,
                    method: form.method,
                    form: true,
                    body: data,
                    followRedirect: true
                });
            })
            .then(response => {
                const html = document.createElement('html');
                html.innerHTML = response.body;

                const form = html.getElementsByTagName('form');
                const isAuthorized = !form.length;

                if (!isAuthorized) {
                    return cy.request({
                        form: true,
                        method: 'POST',
                        url: form[0].action,
                        followRedirect: true,
                        body: {
                            username: usernameForm,
                            password: passwordForm,
                        },
                    });
                } else {
                    cy.log('already logged in');
                }
            })
    }
);