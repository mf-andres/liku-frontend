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
    cy.get("#login-button");
  });

  it("goes to the birthdays view when user inputs his credentials", () => {
    cy.goToLogin();

    cy.get("#user-input").type("example-user");
    cy.get("#login-button").click();

    cy.get("#view-title").contains("Cumpleaños");
  });
});
