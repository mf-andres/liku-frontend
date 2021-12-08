/// <reference types="cypress" />

context("The add birthday view", () => {
  // beforeEach(() => {
  //   cy.visit("https://example.cypress.io/commands/connectors");
  // });

  it("has the necesary elements", () => {
    cy.goToAddBirthday();

    cy.get("#view-title");
    cy.get("#add-birthday-form");
    cy.get("#add-birthday-button");
  });
});
