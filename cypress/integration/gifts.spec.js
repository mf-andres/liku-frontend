/// <reference types="cypress" />

context("The gifts view", () => {
  // beforeEach(() => {
  //   cy.visit("https://example.cypress.io/commands/connectors");
  // });

  it("has the necesary elements", () => {
    cy.goToGifts();

    cy.get("#view-title");
    cy.get("#gifted-non-gifted-slide");
    cy.get("#gifts-list");
    cy.get("#add-gift-button");
  });

  it("goes to the add gift view when user presses the add gift button", () => {
    cy.get("#add-gift-button").click();

    cy.get("#view-title").contains("Añadir regalo");
  });
});
