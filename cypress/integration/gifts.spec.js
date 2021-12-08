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
});
