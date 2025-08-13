class LoginPage{
    selectorsList(){
        const selectors = {
            usernameField: "input[placeholder='Username']",
            passwordField: "input[placeholder='Password']",
            submitLoginButton: "button[type='submit']",
            wrongCredentialAlert: "div[role='alert']",
        }
        return selectors
    }
    acessLoginPage(){
        cy.visit('/auth/login')
    }

    loginWithUser(username,password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().submitLoginButton).click({ force: true })
    }

    checkAcessInvalid(){
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
}

export default LoginPage