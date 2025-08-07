describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "input[placeholder='Username']",
    passwordField: "input[placeholder='Password']",
    submitLoginButton: "button[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "div[role='alert']",
    dashboardGrid: ".orangehrm-dashboard-grid",
  }

  const userData = {
    userSucess:{
      username: 'Admin',
      password: 'admin123'
    },

    userfail:{
      username: 'teste',
      password:'teste'
    }
  }
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.submitLoginButton).click()
    cy.location('pathname').should('equals', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userfail.username)
    cy.get(selectorsList.passwordField).type(userData.userfail.password)
    cy.get(selectorsList.submitLoginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)

  })

})



