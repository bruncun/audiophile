describe("checkout", function () {
  beforeEach(function () {
    cy.visit("/products/xx99-mark-two-headphones");
    cy.get('[data-cy="add-to-cart"]').click();
    cy.visit("/products/zx9-speaker");
    cy.get('[data-cy="add-to-cart"]').click();
    cy.visit("/checkout");
  });

  it("validates form", function () {
    cy.get('[data-cy="checkout-pay"]').click();
    cy.contains("Required field");
  });

  it("calculates grand total", function () {
    cy.get('[data-cy="grand-total"]').contains("$9,059");
  });

  it("shows confirmation on successful purchase", function () {
    cy.get('[data-cy="name"]').type("john doe");
    cy.get('[data-cy="email"]').type("john.doe@yahoo.com");
    cy.get('[data-cy="phoneNumber"]').type("1234567890");
    cy.get('[data-cy="address"]').type("123 river lane");
    cy.get('[data-cy="zipCode"]').type("12345");
    cy.get('[data-cy="city"]').type("miami");
    cy.get('[data-cy="country"]').type("usa");
    cy.get('[data-cy="cash-on-delivery"]').check();
    cy.get('[data-cy="checkout-pay"]').click();
    cy.get('[data-cy="confirmation-modal"]').should("exist");
  });
});
