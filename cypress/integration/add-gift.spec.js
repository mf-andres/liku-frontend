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

  it("goes to the gifts view after the user fills the form correctly and presses the add gift button", () => {
    cy.goToAddGift();
    cy.get("#description-input").type("mochila");
    cy.get("#add-gift-button").click();
  });
});
