/// <reference types="cypress" />

context("The edit birthday view", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:8000/birthdays*", {
      fixture: "get_birthdays_response.json",
    }).as("getBirthdays");
    cy.intercept("PUT", "http://localhost:8000/birthday*", {
      statusCode: 200,
    }).as("editBirthday");
  });

  it("has the necesary elements", () => {
    cy.goToEditBirthday();

    cy.get("#view-title");
    cy.get("#edit-birthday-form");
    cy.get("#edit-birthday-button");
  });

  it("goes to the birthdays view after the user fills the form correctly and presses the edit birthday button", () => {
    cy.goToEditBirthday();
    cy.fillEditBirthdayForm();
    cy.get("#edit-birthday-button").click();
    cy.get("#view-title").contains("Cumpleaños");
  });

  it("calls the birthday service correctly to add a birthday", () => {
    cy.goToEditBirthday();
    cy.fillEditBirthdayForm();
    cy.get("#edit-birthday-button").click();

    cy.wait("@editBirthday").then((interception) => {
      expect(interception.request.body["date"]).to.equal("2021-12-01");
      expect(interception.request.body["birthdayPerson"]).to.equal(
        "Andrés MuñozEichiro Oda"
      );
    });
  });
});
