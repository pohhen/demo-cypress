// First test, load the page
describe('example 0', function() {
  // Basic visit
  it('Demo 0 - open web page', function() {
    cy.log("Let's verify url")
    cy.visit('http://saatanaan.fi/')
    cy.url().should('eq', 'http://saatanaan.fi/')
    cy.log('Success!')
  })
})