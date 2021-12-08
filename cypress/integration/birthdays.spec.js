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

  it("goes to the gifts view when user clicks over the first birthday person name", () => {
    cy.goToBirthdays();

    cy.get("#birthdays-list").first().get(".birthday-person").click();

    cy.get("#view-title").contains("Lista de regalos");
  });
});
