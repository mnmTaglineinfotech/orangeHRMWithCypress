const { describe } = require("mocha");

describe("test case for Login to orange Hrm website", () => {
  it("Login", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.xpath("//input[@placeholder='Username']").type("Admin");
    cy.xpath("//input[@placeholder='Password']").type("admin123");
    cy.xpath("//button[normalize-space()='Login']").click();
  });
});
