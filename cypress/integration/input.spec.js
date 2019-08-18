import { isContext } from "vm";

describe("Input form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("focuses input on load", () => {
    cy.focused().should("have.class", "taskForm");
  });

  it("accepts input", () => {
    const typedTask = "Reset the Flux Capacitor";

    cy.get(".taskForm")
      .type(typedTask)
      .should("have.value", typedTask);
  });

  context("Form submission", () => {
    it("Adds new task on submit", () => {
      const addedTask = "Tune up the MegaCondenser";

      cy.get(".taskForm")
        .type(addedTask)
        .type("{enter}");
      cy.get(".task").should("contain", addedTask);
    });
  });

});
