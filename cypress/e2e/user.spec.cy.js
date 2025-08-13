import userData from "../fixtures/users/user-data.json"
import myInfo from "../fixtures/users/my-info.json"
import LoginPage from "../pages/loginPage"
import DashboadPage from "../pages/dashboardPage"
import MenuPage from "../pages/menuPage"
import MyInfoPage from "../pages/myInfoPage"

const loginPage = new LoginPage()
const dashboardPage = new DashboadPage()
const menuPage = new MenuPage()
const infoPage = new MyInfoPage()

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
    infoPage.personalDetails(myInfo.changeDetails.firstName,myInfo.changeDetails.lastName,myInfo.changeDetails.nickName)
    infoPage.dateNationalityStatus(myInfo.changeDetails.dateOne)
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



