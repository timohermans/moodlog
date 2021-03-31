describe('Home', () => {
    it('Visits the home page', () => {
        cy.visit('http://localhost:3000');

        cy.contains('Welcome to Moodlog');
    })
});