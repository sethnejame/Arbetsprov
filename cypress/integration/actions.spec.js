import { isContext } from "vm";

describe("Action buttons work", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  context("Delete task", () => {
    it("removes task w/ Delete button", () => {
      cy.contains("Delete").click();
      cy.get(".task").should(
        "not.contain",
        "Complete Arbetsprov TaskList Challenge"
      );
    });
  });

  context("Update task", () => {
    it("updates task upon clicking edit button", () => {
      cy.contains("Edit").click();
      cy.get(".editTaskForm")
        .type("Testing the edit")
        .type("{enter}");
      cy.get(".task").should("contain", "Testing the edit");
    });
  });

  context("Marks complete", () => {
    it("task has linethrough upon clicking complete", () => {
      cy.contains("Complete").click();
      cy.get(".task")
        .first()
        .should("have.css", "textDecoration", "line-through solid rgb(255, 255, 255)");
    });
  });

  // context("Delete task", () => {
  //   it.("removes task w/ Delete button", () => {
  //     cy.contains("Delete").click();
  //     cy.get(".task").should(
  //       "not.contain",
  //       "Complete Arbetsprov TaskList Challenge"
  //     );
  //   });
  // });
});
