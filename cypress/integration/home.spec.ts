describe("home", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
  });

  it("loads", function () {
    cy.get('[data-cy="home"]').should("exist");
  });

  it.only("visits headphones", function () {
    cy.get('[data-cy="headphones-nav-link"]').click();
    cy.get('[data-cy="headphones"]').should("exist");
  });

  it.only("visits earphones", function () {
    cy.get('[data-cy="earphones-nav-link"]').click();
    cy.get('[data-cy="earphones"]').should("exist");
  });
});
