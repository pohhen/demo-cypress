describe('empty', function() {
  it('Demo 3 - request', function() {
    // Request something from internet and expect response to be 200 OK
    cy.request('https://skyfire.vimeocdn.com/1562520898-0x775ca0e22c9ca3dc5b6f21c575764a82dbb591b3/237527670/sep/video/847285070,847284772,847284175,847284173,847284171/master.json')
    .then((resp) => {
      expect(resp.status).to.eq(200)})
  })
})