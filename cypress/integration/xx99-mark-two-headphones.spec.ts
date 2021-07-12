describe("xx99-mark-two-headphones", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/products/xx99-mark-two-headphones");
  });

  it("loads", function () {
    cy.get('[data-cy="xx99-mark-two-headphones"]').should("exist");
  });

  it("goes back", function () {
    cy.get('[data-cy="go-back-link"]').click({ force: true });
    cy.get('[data-cy="headphones"]').should("exist");
  });

  it("increments quantity", function () {
    cy.get('[data-cy="increment-quantity"]').click({ force: true });
    cy.get('[data-cy="quantity"]').contains("2");
  });

  it("decrements quantity", function () {
    cy.get('[data-cy="increment-quantity"]').click({ force: true });
    cy.get('[data-cy="increment-quantity"]').click({ force: true });
    cy.get('[data-cy="decrement-quantity"]').click({ force: true });
    cy.get('[data-cy="quantity"]').contains("2");
  });

  it("prevents quantities less than 1", function () {
    cy.get('[data-cy="decrement-quantity"]').click({ force: true });
    cy.get('[data-cy="quantity"]').contains("1");
  });

  it("visits xx99 mark one headphones", function () {
    cy.get('[data-cy="xx99-mark-one-headphones-link"]').click({ force: true });
    cy.get('[data-cy="xx99-mark-one-headphones"]').should("exist");
  });
});
