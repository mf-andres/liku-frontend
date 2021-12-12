/// <reference types="cypress" />

context("The gifts view", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:8000/birthdays*", {
      fixture: "get_birthdays_response.json",
    }).as("getBirthdays");
    cy.intercept("GET", "http://localhost:8000/gifts*", {
      fixture: "get_gifts_response.json",
    }).as("getGifts");
  });

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

  it("calls the gifts service correctly", () => {
    cy.goToGifts();

    cy.wait("@getGifts").then((interception) => {
      expect(interception.request.url).to.match(
        /\?userID=user&birthdayId=c74ef681-5b22-4049-b7df-41cc2b66a008/
      );
    });
  });
});
