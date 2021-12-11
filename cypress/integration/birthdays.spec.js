/// <reference types="cypress" />

context("The birthdays view", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:8000/birthdays*", {
      fixture: "get_birthdays_response.json",
    }).as("getBirthdays");
  });

  it("has the necesary elements", () => {
    cy.goToBirthdays();

    cy.get("#view-title");
    cy.get("#birthdays-list");
    cy.get("#add-birthday-button");
  });

  it("goes to the gifts view when user clicks over the first birthday person name", () => {
    cy.goToBirthdays();

    cy.get(".birthday-person").first().click();

    cy.get("#view-title").contains("Lista de regalos");
  });

  it("goes to the add birthday view when user clicks over the add birthday button", () => {
    cy.goToBirthdays();

    cy.get("#add-birthday-button").click();

    cy.get("#view-title").contains("Añadir cumpleaños");
  });

  it("calls the birthdays", () => {
    cy.goToBirthdays();

    cy.wait("@getBirthdays").then((interception) => {
      expect(interception.request.url).to.match(/\?userID=user/);
    });
  });
});
