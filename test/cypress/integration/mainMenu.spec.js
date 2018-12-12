describe('Main Menu', () => {
  it('Should Home be selected', () => {
    cy.visit('/en-us/home');
    cy.contains('.nav-item', 'Home').should('have.class', 'selected');
    cy.contains('.nav-item', 'Register').should('not.have.class', 'selected');
  });
  it('Should Register be selected', () => {
    cy.visit('/en-us/home');
    cy.contains('.nav-item', 'Register').click();
    cy.contains('.nav-item', 'Home').should('not.have.class', 'selected');
    cy.contains('.nav-item', 'Register').should('have.class', 'selected');
  });
});
