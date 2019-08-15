/// <reference types="Cypress" />

context("TaskList", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should have a title", () => {
    cy.get(".title").contains("Task List");
  });

  it("should have multiple list items", () => {
    cy.get("div").contains("Complete Arbetsprov TaskList Challenge");
    cy.get("div").contains("Get a job offer");
    cy.get("div").contains("Drink beer");
  });
});
