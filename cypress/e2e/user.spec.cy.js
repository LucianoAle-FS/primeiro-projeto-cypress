import userData from "../fixtures/users/user-data.json"
import myInfo from "../fixtures/users/my-info.json"
import LoginPage from "../pages/loginPage"
import DashboadPage from "../pages/dashboardPage"
import MenuPage from "../pages/menuPage"

const loginPage = new LoginPage()
const dashboardPage = new DashboadPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericInput: ".oxd-input",
    genericComboBox: ".oxd-select-text--arrow",
    genericListBox: ".oxd-select-dropdown",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close"
  }


  it.only('Login - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username,userData.userSucess.password)    
    dashboardPage.dashboardTrue()
    menuPage.clickMyInfo()
    
    cy.get(selectorsList.firstNameField).clear().type(myInfo.changeDetails.firstName)
    cy.get(selectorsList.lastNameField).clear().type(myInfo.changeDetails.lastName)
    cy.get(selectorsList.genericInput).eq(4).clear().type(myInfo.changeDetails.nickName)
    cy.get(selectorsList.dateField).eq(0).clear().type(myInfo.changeDetails.dateOne)
    cy.get(selectorsList.genericComboBox).eq(0).click({ force: true })
    cy.get(selectorsList.genericListBox).children().eq(2).click()
    cy.get(selectorsList.genericComboBox).eq(1).click({ force: true })
    cy.get(selectorsList.genericListBox).children().eq(0).click()
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



