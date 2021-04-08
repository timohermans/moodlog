describe('Home', () => {
    it('Shows a hero page', () => {
        cy.visit('/');

        cy.get('[data-cy=title]').should('exist');
        cy.get('[data-cy=sub-title]').should('exist');
        cy.get('[data-cy=description]').should('exist');
        cy.get('[href="/dashboard"]').should('exist');
    });

    it('Shows a login button when not logged in', () => {
        cy.clearCookie('next-auth.session-token'); // please don't execute this too often, thanks. It will slow down tests immensely
        cy.visit('/');
        cy.get('[data-cy=login]').should('exist');
    });
});