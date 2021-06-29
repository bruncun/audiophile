describe("earphones", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/category/earphones");
  });

  it("loads", function () {
    cy.get('[data-cy="earphones"]').should("exist");
  });

  it("loads products", function () {
    cy.get('[data-cy="product"]').should("have.length", 1);
  });
});
