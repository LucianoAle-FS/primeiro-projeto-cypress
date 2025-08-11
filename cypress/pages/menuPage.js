class MenuPage{
    selectorList(){
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
        }
        return selectors 
    }

    clickMyInfo(){
        cy.get(this.selectorsList().myInfoButton).click()
    }
    
}

export default MenuPage