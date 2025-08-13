import userData from "../fixtures/users/user-data.json"
import LoginPage from "../pages/loginPage"
import DashboadPage from "../pages/dashboardPage"

const loginPage = new LoginPage()
const dashboardPage = new DashboadPage()


describe('LoginOrange HRM Tests', () => {
   it('Login - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username,userData.userSucess.password)
    dashboardPage.dashboardTrue()

  })

  it('Login - Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userfail.username,userData.userfail.password)
    loginPage.checkAcessInvalid()

  })

})



