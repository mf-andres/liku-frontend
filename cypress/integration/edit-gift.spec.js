/// <reference types="cypress" />

context("The edit gift view", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:8000/birthdays*", {
      fixture: "get_birthdays_response.json",
    }).as("getBirthdays");
    cy.intercept("GET", "http://localhost:8000/gifts*", {
      fixture: "get_gifts_response.json",
    }).as("getGifts");
    cy.intercept("PUT", "http://localhost:8000/gift*", {
      statusCode: 200,
    }).as("editGift");
  });

  it("has the necesary elements", () => {
    cy.goToEditGift();

    cy.get("#view-title");
    cy.get("#edit-gift-form");
    cy.get("#edit-gift-button");
  });

  it("goes to the gifts view after the user fills the form correctly and presses the edit gift button", () => {
    cy.goToEditGift();
    cy.fillEditGiftForm();
    cy.get("#edit-gift-button").click();
    cy.get("#view-title").contains("Lista de regalos");
  });

  it("calls the gift service correctly to edit a gift", () => {
    cy.goToEditGift();
    cy.fillEditGiftForm();
    cy.get("#edit-gift-button").click();

    cy.wait("@editGift").then((interception) => {
      expect(interception.request.body["description"]).to.equal(
        "bicicletataladro"
      );
    });
  });
});
