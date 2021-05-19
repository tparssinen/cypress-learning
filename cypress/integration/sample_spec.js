describe('My First Test', () => {
  it('Visits the test site', () => {
    cy.visit('http://localhost:3000')

    cy.contains('Click me!').click()
  })
})
