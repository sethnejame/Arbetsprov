describe('Input form', () => {
  it('focuses input on load', () => {
    cy.visit('http://localhost:3000')

    cy.focused()
      .should('have.class', 'taskForm')
  })

  it.only('accepts input', () => {
    const typedTask = 'Reset the Flux Capacitor'
    cy.visit('http://localhost:3000')

    cy.get('.taskForm')
      .type(typedTask)
      .should('have.value', typedTask)
  })
})