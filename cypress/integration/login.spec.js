/// <reference types="cypress" />

context("The login view", () => {
  // beforeEach(() => {
  //   cy.visit("https://example.cypress.io/commands/connectors");
  // });

  it("has the necesary elements", () => {
    cy.goToLogin();

    cy.get("#toolbar");
    cy.get("#view-title");
    cy.get("#login-form");
  });
});
