describe("speakers", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/speakers");
  });

  it("loads", function () {
    cy.get('[data-cy="speakers"]').should("exist");
  });

  it.only("loads products", function () {
    cy.get('[data-cy="product"]').should("have.length", 2);
  });
});
