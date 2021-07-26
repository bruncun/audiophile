describe("headphones", function () {
  beforeEach(function () {
    cy.visit("/headphones");
  });

  it("loads", function () {
    cy.get('[data-cy="headphones"]').should("exist");
  });

  it("loads products", function () {
    cy.get('[data-cy="product"]').should("have.length", 3);
  });
});
