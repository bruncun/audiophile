describe("cart", function () {
  beforeEach(function () {
    cy.visit("/products/xx99-mark-two-headphones");
    cy.get('[data-cy="add-to-cart"]').click();
    cy.visit("/products/zx9-speaker");
    cy.get('[data-cy="add-to-cart"]').click();
  });

  it("shows each product", function () {
    cy.visit("/products/xx99-mark-two-headphones");
    cy.get('[data-cy="add-to-cart"]').click();
    cy.visit("/products/zx9-speaker");
    cy.get('[data-cy="add-to-cart"]').click();
    cy.get('[data-cy="cart-product"]').should("have.length", 2);
  });

  it("totals shows each product", function () {
    cy.get('[data-cy="cart-total"]').contains("$7,499");
  });

  it("removes all products", function () {
    cy.get('[data-cy="remove-all"]').click();
    cy.get('[data-cy="cart"]').should("not.exist");
  });

  it("goes to checkout", function () {
    cy.get('[data-cy="cart-checkout"]').click();
    cy.get('[data-cy="checkout"]').should("exist");
  });
});
