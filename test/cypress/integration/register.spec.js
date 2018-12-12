describe('Register', () => {
  beforeEach(() => {
    cy.visit('/en-us/register-clinic');
    cy.wait(2000);
  });
  it('Display register form', () => {
    cy.contains('.nav-item', 'Register').should('have.class', 'selected');
    cy.contains('button', 'Register');
  });
  it('Should Clinic Name has 30 chars of max length', () => {
    cy.get('#clinicName').type('clinic test name');
  });
});
