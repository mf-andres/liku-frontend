/// <reference types="cypress" />

context("The add birthday view", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:8000/birthdays*", {
      fixture: "get_birthdays_response.json",
    }).as("getBirthdays");
    cy.intercept("POST", "http://localhost:8000/birthday", {
      statusCode: 200,
    }).as("addBirthday");
  });

  it("has the necesary elements", () => {
    cy.goToAddBirthday();

    cy.get("#view-title");
    cy.get("#add-birthday-form");
    cy.get("#add-birthday-button");
  });

  it("goes to the birthdays view after the user fills the form correctly and presses the add birthday button", () => {
    cy.goToAddBirthday();
    cy.fillAddBirthdayForm();
    cy.get("#add-birthday-button").click();
    cy.get("#view-title").contains("Cumpleaños");
  });

  it("calls the birthday service correctly to add a birthday", () => {
    cy.goToAddBirthday();
    cy.fillAddBirthdayForm();
    cy.get("#add-birthday-button").click();

    cy.wait("@addBirthday").then((interception) => {
      expect(interception.request.body["date"]).to.equal("2021-01-01");
      expect(interception.request.body["birthdayPerson"]).to.equal(
        "Eichiro Oda"
      );
    });
  });
});
