describe('Cookie Banner Interaction', () => {
  it('successfully declines the cookie banner', () => {
    cy.visit('https://toqio.co/');

    // Wait for the cookie banner button to be visible and clickable
    cy.get("button[aria-label='Decline all']", { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled')
      .click();

    // Wait for a short period to allow any animations or transitions to complete
    cy.wait(2000);
    
    // Optionally, you could log a message to indicate that the button was clicked
    cy.log('Clicked on Decline all button');
  });
});