// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("goToLogin", () => {
  cy.visit("/");
});

Cypress.Commands.add("goToBirthdays", () => {
  cy.goToLogin();
  cy.get("#user-input").type("user");
  cy.get("#login-button").click();
});

Cypress.Commands.add("goToGifts", () => {
  cy.goToBirthdays();
  cy.get(".see-gifts-button").first().click();
});

Cypress.Commands.add("goToAddBirthday", () => {
  cy.goToBirthdays();
  cy.get("#add-birthday-button").click();
});

Cypress.Commands.add("goToAddGift", () => {
  cy.goToGifts();
  cy.get("#add-gift-button").click();
});

Cypress.Commands.add("fillAddBirthdayForm", () => {
  cy.get("#date-input").type("01/01/2021");
  cy.get("#birthday-person-input").type("Eichiro Oda");
});

Cypress.Commands.add("fillAddGiftForm", () => {
  cy.get("#description-input").type("mochila");
});

Cypress.Commands.add("goToEditBirthday", () => {
  cy.goToBirthdays();
  cy.get(".edit-button").first().click();
});

Cypress.Commands.add("fillEditBirthdayForm", () => {
  cy.get("#date-input").type("12/01/2021");
  cy.get("#birthday-person-input").type("Eichiro Oda");
});

Cypress.Commands.add("goToEditGift", () => {
  cy.goToGifts();
  cy.get(".edit-button").first().click();
});

Cypress.Commands.add("fillEditGiftForm", () => {
  cy.get("#description-input").type("taladro");
});
