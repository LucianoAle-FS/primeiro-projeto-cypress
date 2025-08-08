import userData from "../fixtures/users/user-data.json"
import myInfo from "../fixtures/users/my-info.json"

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "input[placeholder='Username']",
    passwordField: "input[placeholder='Password']",
    submitLoginButton: "button[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "div[role='alert']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    nickNameField: ".oxd-input--active:nth-of-type(5)",
    saveButton1: ".oxd-button--secondary:nth-of-type(1)"
  }

  
  it('Login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.submitLoginButton).click()
    cy.location('pathname').should('equals', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).type(myInfo.changeDetails.fristName)
    cy.get(selectorsList.firstNameField).type(myInfo.changeDetails.lastName)
    cy.get(selectorsList.firstNameField).type(myInfo.changeDetails.nickName)
    cy.get('button[type="submit"]').first().click()
    cy.reload()
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userfail.username)
    cy.get(selectorsList.passwordField).type(userData.userfail.password)
    cy.get(selectorsList.submitLoginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)

  })

})



