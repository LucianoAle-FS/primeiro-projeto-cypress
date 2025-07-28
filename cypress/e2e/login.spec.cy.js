describe('Orange HRM Tests', () => {
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']").type('Admin')
    cy.get("input[placeholder='Password']").type('admin123')
    cy.get("button[type='submit']").click()
    cy.location('pathname').should('equals','/web/index.php/dashboard/index')
    //quando damos somente um get, verificamos se tudo está ocorrendo bem 
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']").type('Test')
    cy.get("input[placeholder='Password']").type('Test')
    cy.get("button[type='submit']").click()
    cy.get("div[role='alert']")
    //quando damos somente um get, verificamos se tudo está ocorrendo bem 
  })

})

// colocando no it.skip vc pula o texte


