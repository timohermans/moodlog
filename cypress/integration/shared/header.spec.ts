describe('Header', () => {
    it('has an option to log in', () => {
        cy.visit('/');
        cy.get('#login');

        // figure out a way to mock the call to different server
    });


    it('shows a welcome text for logged in user', () => {
        cy.login({});
        cy.visit('/');

        cy.contains('Welcome, Timo Tester');
    });
});