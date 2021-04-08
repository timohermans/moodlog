describe('dashboard', () => {
    it('links to several utility pages', () => {
        cy.visit('/dashboard');

        cy.get('[data-cy=nav-user-picture]').should('exist');
        cy.contains('Timo');

        cy.get('[data-cy=nav-dashboard]').should('have.attr', 'href').and('equal', '/dashboard');
        cy.get('[data-cy=nav-triple-column]').should('have.attr', 'href').and('equal', '/triple-column');

        cy.get('[data-cy=nav-logout]').click();
        cy.url().should('equal', `${Cypress.config().baseUrl}/`);
        cy.get('[data-cy=login]').should('exist');
    });
})