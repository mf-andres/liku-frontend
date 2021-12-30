/// <reference types="cypress" />

context("The gifts view", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:8000/birthdays*", {
      fixture: "get_birthdays_response.json",
    }).as("getBirthdays");
    cy.intercept("GET", "http://localhost:8000/gifts*", {
      fixture: "get_gifts_response.json",
    }).as("getGifts");
    cy.intercept("DELETE", "http://localhost:8000/gift/*", {
      statusCode: 200,
    }).as("removeGift");
    cy.intercept("PUT", "http://localhost:8000/gift/*/mark-as-gifted", {
      statusCode: 200,
    }).as("markAsGifted");
    cy.intercept("PUT", "http://localhost:8000/gift/*/unmark-as-gifted", {
      statusCode: 200,
    }).as("unMarkAsGifted");
  });

  it("has the necesary elements", () => {
    cy.goToGifts();

    cy.get("#view-title");
    cy.get("#gifted-non-gifted-slide");
    cy.get("#gifts-list");
    cy.get("#add-gift-button");
  });

  it("goes to the add gift view when user presses the add gift button", () => {
    cy.goToGifts();

    cy.get("#add-gift-button").click();
    cy.get("#view-title").contains("Añadir regalo");
  });

  it("calls the gifts service correctly", () => {
    cy.goToGifts();

    cy.wait("@getGifts").then((interception) => {
      expect(interception.request.url).to.match(
        /\?userId=user&birthdayId=c74ef681-5b22-4049-b7df-41cc2b66a008/
      );
    });
  });

  it("calls the gift service correctly to remove a gift", () => {
    cy.goToGifts();

    cy.get(".remove-button").first().click();
    cy.wait("@removeGift").then((interception) => {
      expect(interception.request.url).to.match(
        /\/a05a3f69-7360-41e4-9360-67d961fba75a/
      );
    });
  });

  it("calls the gift service correctly to mark a gift as gifted", () => {
    cy.goToGifts();

    cy.get(".mark-as-gifted-button").first().click();
    cy.wait("@markAsGifted").then((interception) => {
      expect(interception.request.url).to.match(
        /\/a05a3f69-7360-41e4-9360-67d961fba75a/
      );
    });
  });

  it("calls the gift service correctly to mark a gift as gifted", () => {
    cy.goToGifts();

    cy.get("#gifted-non-gifted-slide").click();
    cy.get(".mark-as-gifted-button").first().click();
    cy.wait("@unMarkAsGifted").then((interception) => {
      expect(interception.request.url).to.match(
        /\/a05a3f69-7360-41e4-9360-67d961fba75a/
      );
    });
  });
});
