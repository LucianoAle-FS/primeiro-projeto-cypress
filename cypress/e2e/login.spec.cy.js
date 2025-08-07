describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "input[placeholder='Username']",
    passwordField: "input[placeholder='Password']",
    submitLoginButton: "button[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "div[role='alert']",
  }
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.submitLoginButton).click()
    cy.location('pathname').should('equals', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Test')
    cy.get(selectorsList.passwordField).type('Test')
    cy.get(selectorsList.submitLoginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)

  })

})



