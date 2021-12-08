/// <reference types="cypress" />

context("The add gift view", () => {
  // beforeEach(() => {
  //   cy.visit("https://example.cypress.io/commands/connectors");
  // });

  it("has the necesary elements", () => {
    cy.goToAddGift();

    cy.get("#view-title");
    cy.get("#add-gift-form");
    cy.get("#add-gift-button");
  });
});
