// Create test case here

describe('example 2', function() {

  it('Demo 2 - mobile view', function() {
    // Set viewport size
    cy.viewport('iphone-6')
    cy.wait(200)
    cy.log("Let's verify url")
    cy.visit('http://saatanaan.fi/')
    cy.url().should('eq', 'http://saatanaan.fi/')
    cy.log('Success!')
  })
})