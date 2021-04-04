/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        loginByKeycloak(): Chainable<any>;
        login({
            username,
            password,
        }: Login): Chainable;
    }

    interface Login {
        username?: string;
        password?: string;
    }
}