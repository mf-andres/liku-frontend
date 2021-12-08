/// <reference types="cypress" />

context("The birthdays view", () => {
  // beforeEach(() => {
  //   cy.visit("https://example.cypress.io/commands/connectors");
  // });

  it("has the necesary elements", () => {
    cy.goToBirthdays();

    cy.get("#view-title");
    cy.get("#birthdays-list");
    cy.get("#add-birthday-button");
  });
});
