describe("headphones", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/category/headphones");
  });

  it("loads", function () {
    cy.get('[data-cy="headphones"]').should("exist");
  });

  it("loads products", function () {
    cy.get('[data-cy="product"]').should("have.length", 3);
  });
});
