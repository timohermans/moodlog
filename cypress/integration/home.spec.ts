describe('Home', () => {
    it('Shows a hero page', () => {
        cy.visit('/');

        cy.get('[data-cy=title]');
        cy.get('[data-cy=sub-title]');
        cy.get('[data-cy=description]')
    });

    it('automatically redirects to the dashboard after logging in', () => {
        cy.login({});
        cy.visit('/');
        cy.url().should('include', '/dashboard');
    });
});