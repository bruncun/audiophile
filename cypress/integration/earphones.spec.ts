describe("earphones", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/earphones");
  });

  it("loads", function () {
    cy.get('[data-cy="earphones"]').should("exist");
  });

  it("visits yx1 earphones", function () {
    cy.get('[data-cy="yx1-earphones-link"]').click({ force: true });
    cy.get('[data-cy="yx1-earphones"]').should("exist");
  });
});
