describe("speakers", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/category/speakers");
  });

  it("loads", function () {
    cy.get('[data-cy="speakers"]').should("exist");
  });

  it("loads products", function () {
    cy.get('[data-cy="product"]').should("have.length", 2);
  });
});
