describe('triple-column', () => {
  it('can jot down your automatic thoughts', () => {
    cy.visit('/triple-column')

    cy.get('[data-cy=automatic-thought]').type('I never do anything right')
    cy.get('[data-cy=cognitive-distortion]').type('Overgeneralization')
    cy.get('[data-cy=rationale-response]').type(
      'Nonsense! I do a lot of things right!{enter}test'
    )
    cy.get('[data-cy=triple-submit]').click()

    cy.get('[data-cy=thought-list]').should('have.length', 1)
    cy.get('[data-cy=automatic-thought]').should('have.value', '')
    cy.get('[data-cy=cognitive-distortion]').should('have.value', '')
    cy.get('[data-cy=rationale-response]').should('have.value', '')
  })
})
