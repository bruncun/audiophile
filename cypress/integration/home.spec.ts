describe("home", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
  });

  it("loads", function () {
    cy.get('[data-cy="home"]').should("exist");
  });

  it("visits xx79 mark two headphones", function () {
    cy.get('[data-cy="xx99-mark-two-headphones-link"]').click({ force: true });
    cy.get('[data-cy="xx99-mark-two-headphones"]').should("exist");
  });

  it("visits headphones", function () {
    cy.get('[data-cy="headphones-link"]').click({ force: true });
    cy.get('[data-cy="headphones"]').should("exist");
  });

  it("visits zx9 speaker", function () {
    cy.get('[data-cy="zx9-speaker-link"]').click({ force: true });
    cy.get('[data-cy="zx9-speaker"]').should("exist");
  });

  it("visits zx7 speaker", function () {
    cy.get('[data-cy="zx7-speaker-link"]').click({ force: true });
    cy.get('[data-cy="zx7-speaker"]').should("exist");
  });

  it("visits yx1 earphones", function () {
    cy.get('[data-cy="yx1-earphones-link"]').click({ force: true });
    cy.get('[data-cy="yx1-earphones"]').should("exist");
  });
});
