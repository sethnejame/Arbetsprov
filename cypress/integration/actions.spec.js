import { isContext } from "vm";

describe("Action buttons work", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  context("Removes task", () => {
    it("removes task w/ Delete button", () => {
      cy.contains("X").click();
      cy.get(".task").should(
        "not.contain",
        "Complete Arbetsprov TaskList Challenge"
      );
    });
  });

  context("Updates task", () => {
    it("updates task upon clicking edit button", () => {
      cy.contains("Edit").click();
      cy.get(".taskForm.edit")
        .type("Testing the edit")
        .type("{enter}");
      cy.get(".task").should("contain", "Testing the edit");
    });
  });

  context("Toggle status", () => {
    it("task status changes when toggle status is clicked", () => {
      cy.contains("Active").click();
      cy.get(".btn.toggleStatus")
        .contains("Completed");
    });
  });
});
