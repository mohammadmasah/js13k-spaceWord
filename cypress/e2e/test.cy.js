describe('Index', () => {
  it('Show index page' ,() => {
    cy.visit('/');
    cy.get('body').should('be.visible');
  });
  it('Get page content', () => {
    cy.visit('/');
    cy.get('body').contains('PLAY');
    cy.get('body').contains('QUIT');
  });
  it('Start the game when PLAY is clicked', () => {
    cy.visit('/');
    cy.contains('PLAY').click();
    cy.contains('PLAY').should('not.be.visible');
  });
});