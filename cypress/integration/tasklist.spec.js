/// <reference types="Cypress" />

context("TaskList", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should have a title", () => {
    cy.get(".title").contains("Task List");
  });
});
