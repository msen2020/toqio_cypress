describe('Toqio Website Interaction', () => {
  it('declines the cookie banner and verifies main heading', () => {
    cy.visit('https://toqio.co/');

    // Wait for the cookie banner button to be visible and clickable
    cy.get("button[aria-label='Decline all']", { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled')
      .click();

    // Wait for a short period to allow any animations or transitions to complete
    cy.wait(2000);
    
    // Verify the main heading text
    cy.get('h1')
      .should('be.visible')
      .and('contain.text', 'Rethink finance.')
      .and('contain.text', 'Rediscover growth.');

    // Verify specific styling
    cy.get('h1')
      .should('have.css', 'font-size', '60px')
      .find('span')
      .should('have.css', 'color', 'rgb(9, 68, 107)'); // This is the hex color #09446b in RGB
  });
});