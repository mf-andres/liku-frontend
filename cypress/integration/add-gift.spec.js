/// <reference types="cypress" />

context("The add gift view", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:8000/birthdays*", {
      fixture: "get_birthdays_response.json",
    }).as("getBirthdays");
    cy.intercept("GET", "http://localhost:8000/gifts*", {
      fixture: "get_gifts_response.json",
    }).as("getGifts");
    cy.intercept("POST", "http://localhost:8000/gift", {
      statusCode: 200,
    }).as("addGift");
  });

  it("has the necesary elements", () => {
    cy.goToAddGift();

    cy.get("#view-title");
    cy.get("#add-gift-form");
    cy.get("#add-gift-button");
  });

  it("goes to the gifts view after the user fills the form correctly and presses the add gift button", () => {
    cy.goToAddGift();
    cy.fillAddGiftForm();
    cy.get("#add-gift-button").click();
    cy.get("#view-title").contains("Lista de regalos");
  });

  it("calls the gift service correctly to add a gift", () => {
    cy.goToAddGift();
    cy.fillAddGiftForm();
    cy.get("#add-gift-button").click();

    cy.wait("@addGift").then((interception) => {
      expect(interception.request.body["description"]).to.equal("mochila");
    });
  });
});
