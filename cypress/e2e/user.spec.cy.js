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

  it('user Info Update - Sucess ', () => {
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
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userfail.username,userData.userfail.password)
    loginPage.checkAcessInvalid()

  })

})



