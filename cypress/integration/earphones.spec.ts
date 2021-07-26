describe("earphones", function () {
  beforeEach(function () {
    cy.visit("/earphones");
  });

  it("loads", function () {
    cy.get('[data-cy="earphones"]').should("exist");
  });

  it("visits yx1 earphones", function () {
    cy.get('[data-cy="yx1-earphones-link"]').click({ force: true });
    cy.get('[data-cy="yx1-earphones"]').should("exist");
  });
});
