describe("navbar", function () {
  beforeEach(function () {
    cy.visit("/");
  });

  it("visits headphones", function () {
    cy.get('[data-cy="headphones-nav-link"]').click();
    cy.get('[data-cy="headphones"]').should("exist");
  });

  it("visits earphones", function () {
    cy.get('[data-cy="earphones-nav-link"]').click();
    cy.get('[data-cy="earphones"]').should("exist");
  });

  it("visits speakers", function () {
    cy.get('[data-cy="speakers-nav-link"]').click();
    cy.get('[data-cy="speakers"]').should("exist");
  });

  it("opens cart", function () {
    cy.get('[data-cy="cart-toggler"]').first().click();
    cy.get('[data-cy="cart-modal"]').should("exist");
  });

  it.only("goes to checkout", function () {
    cy.visit("/products/xx99-mark-two-headphones");
    cy.get('[data-cy="add-to-cart"]').click({ force: true });
    cy.get('[data-cy="cart-checkout"]').click();
    cy.get('[data-cy="checkout"]').should("exist");
  });
});
