// Let's make multiple test for the same page.
describe('example 1', function() {
  // You can enter page before each
  beforeEach(() => {
    cy.visit('http://saatanaan.fi/')
  })

  it('Demo 1 - basic success', function() {
    cy.log("Let's verify url")
    cy.url().should('eq', 'http://saatanaan.fi/')
    cy.log('Success!')
  })

  it('Demo 1 - make it fail', function() {
    cy.log("Let's verify wrong url")
    // This should fail
    cy.url().should('eq', 'http://saatanaan.fi')
    cy.log('Success!')
  })
// End of tests  
})