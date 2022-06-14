const myEnv = Cypress.env("Enviroment")

class CommonMethod{
    static beforeTest()
     {
        
        cy.fixture(myEnv).then(function (data) {
            this.data = data
       })
        cy.fixture('Locators').then(function (locator) {
            this.locator = locator
        })
     }
}
export default CommonMethod;