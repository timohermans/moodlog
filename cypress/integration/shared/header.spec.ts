describe('Header', () => {
    it('Shows a brand, nav to different pages and a login section', () => {
        cy.visit('/');
        cy.contains('Triple column').should('not.exist');
        cy.get('[data-cy=login]');
        
        cy.login({});
        cy.visit('/');

        cy.contains('Welcome, Timo Tester');
        cy.contains('Triple column')
            .should('have.attr', 'href')
            .and('equal', '/triple-column');
    });
});