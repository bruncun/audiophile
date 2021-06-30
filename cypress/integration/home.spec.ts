describe("home", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
  });

  it("loads", function () {
    cy.get('[data-cy="home"]').should("exist");
  });

  it("visits xx99 mark two headphones", function () {
    cy.get('[data-cy="xx99-mark-two-headphones-link"]').click({ force: true });
    cy.get('[data-cy="xx99-mark-two-headphones"]').should("exist");
  });
});
