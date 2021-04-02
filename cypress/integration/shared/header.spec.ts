describe('Header', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('has an option to log in', () => {
        cy.contains('button#login');
    });
});