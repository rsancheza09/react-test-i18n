describe('Home Page', () => {
  it('Should load home page', () => {
    cy.visit('/en-us/home');
    cy.contains('h1 > span', 'Test App');
  });
});
