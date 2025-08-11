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
    genericInput: ".oxd-input",
    genericComboBox: ".oxd-select-text--arrow",
    genericListBox: ".oxd-select-dropdown",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close"
  }


  it.only('Login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.submitLoginButton).click()
    cy.location('pathname').should('equals', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type(myInfo.changeDetails.firstName)
    cy.get(selectorsList.lastNameField).clear().type(myInfo.changeDetails.lastName)
    cy.get(selectorsList.genericInput).eq(4).clear().type(myInfo.changeDetails.nickName)
    cy.get(selectorsList.dateField).eq(0).type(myInfo.changeDetails.dateOne)
    cy.get(selectorsList.genericComboBox).eq(0).click({ force: true })
    cy.get(selectorsList.genericListBox).eq(2).click()
    cy.get(selectorsList.genericComboBox).eq(1).click({ force: true })
    cy.get(selectorsList.genericListBox).eq(1).click()
    cy.get('button[type="submit"]').first().click({ force: true })
    cy.get('body').should('contain', 'Successfully Updated')
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



