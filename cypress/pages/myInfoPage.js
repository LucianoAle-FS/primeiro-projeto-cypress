class MyInfoPage {
    selectorList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericInput: ".oxd-input",
            genericComboBox: ".oxd-select-text--arrow",
            genericListBox: ".oxd-select-dropdown",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close"
        }
        return selectors
    }

    personalDetails(fistName, lastName, nickName) {
        cy.get(this.selectorList().firstNameField).clear().type(fistName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
        cy.get(this.selectorList().genericInput).eq(4).clear().type(nickName)
    }

    dateNationalityStatus(date) {
        cy.get(this.selectorList().dateField).eq(0).clear().type(date)
        cy.get(this.selectorList().genericComboBox).eq(0).click({ force: true })
        cy.get(this.selectorList().genericListBox).children().eq(2).click()
        cy.get(this.selectorList().genericComboBox).eq(1).click({ force: true })
        cy.get(this.selectorList().genericListBox).children().eq(1).click()
        cy.get('button[type="submit"]').first().click({ force: true })
        
    }
}

export default MyInfoPage