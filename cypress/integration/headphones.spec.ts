describe("home", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/headphones");
  });

  it("loads", function () {
    cy.get('[data-cy="home"]').should("exist");
  });

  it.only("loads headphone products", function () {
    cy.get('[data-cy="headphones-nav-link"]').click();
    cy.get('[data-cy="headphones"]').should("exist");
  });
});
