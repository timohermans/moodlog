describe('dashboard', () => {
    it('link to several utility pages', () => {
        cy.visit('/dashboard');

        cy.get('[data-cy=triple-column]')
            .should('have.attr', 'href')
            .and('equal', '/triple-column');
    });
})