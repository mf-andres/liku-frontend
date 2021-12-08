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

  it("goes to the birthdays view after the user fills the form correctly and presses the add birthday button", () => {
    cy.goToAddBirthday();
    // TODO deal with the date and the birthday person
    cy.get("#add-birthday-button").click();
  });
});
