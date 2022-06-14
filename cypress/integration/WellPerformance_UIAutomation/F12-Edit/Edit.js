import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'

beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User navigate to the Edit page by logging in to wellcertified', function () {
    Login.loginpage()
cy.fixture('ProjectId').then(function (projectid) {
    this.projectid = projectid
    cy.xpath(this.locator.wellperformance).contains('WELL Performance').click({ force: true })
    cy.xpath(this.locator.pid).click({ force: true })
    cy.xpath(this.locator.pid).type(this.projectid.WellV2Project)
    cy.contains('Apply').click({ force: true })
    cy.wait(2000)
    cy.contains(this.projectid.WellV2Project).click({ force: true })
    cy.wait(3000)
})
})
When('User clicks on Edit tab', function () {
    cy.contains('Edit').should('be.visible').click({ force: true })
    cy.wait(2000)
})
Then('User will be redirected to the WELL Performance Edit page successfully', function () {
    cy.contains('Edit Project').should('be.visible')
})
////////////////Verifies Project Information fields for WELL Performance Project////////////////////////////
Given('User is on Edit Project page by logging in to wellcertified', function () {
    cy.contains('Edit Project').should('be.visible')
})
And('User verifies project Information fields', function () {
    cy.contains('Organization Information').should('be.visible')
    cy.contains('Project Information').should('be.visible')
    cy.xpath(this.locator.EditprojectName).should('be.visible')
    cy.xpath(this.locator.grossArea).should('be.visible')
    cy.xpath(this.locator.projectlocation).should('be.visible')
})
When('User update project Information fields', function () {
    cy.xpath(this.locator.projectlocation).click({ force: true }).clear().type(this.data.NumberofLocation)
})
And('User verifies Owner Information fields', function () {
    cy.xpath(this.locator.Editownerorganization).scrollIntoView().should('be.visible') 
    cy.xpath(this.locator.Editownername).scrollIntoView().should('be.visible') 
    cy.xpath(this.locator.Editemail).scrollIntoView().should('be.visible') 
    cy.xpath(this.locator.Editphone).scrollIntoView().should('be.visible') 
    cy.xpath(this.locator.Editindusrty).scrollIntoView().should('be.visible') 
    cy.xpath(this.locator.Editwebsite).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.Editoverview).should('be.visible')
})
And('User update Owner Information fields', function () {
    cy.wait(2000)
    cy.xpath(this.locator.Editownername).click({ force: true }).clear().type(this.data.Editownername)
    cy.xpath(this.locator.Editemail).click({ force: true }).clear().type(this.data.Editemail)
    cy.xpath(this.locator.Editphone).click({ force: true }).clear().type(this.data.Editphone)
    cy.xpath(this.locator.Editoverview).click({ force: true }).clear().type(this.data.Editoverview)
})

And('User verifies Owner Address fields', function () {
    cy.xpath(this.locator.Editlocation).should('be.visible')
    cy.xpath(this.locator.Editstreet).should('be.visible')
    cy.xpath(this.locator.Editcity).should('be.visible')
    cy.xpath(this.locator.Editpostal).scrollIntoView().should('be.visible') 
})
And('User update  Owner Address fields', function () {
    cy.wait(2000)
    cy.xpath(this.locator.Editstreet).click({ force: true }).clear().type(this.data.Editownername)
    cy.xpath(this.locator.Editcity).click({ force: true }).clear().type(this.data.Editemail)
    cy.xpath(this.locator.Editpostal).click({ force: true }).clear().type(this.data.Editphone)
})
And('User update WELL Performance scope & premises, WELL Performance goals and vision fields', function () {
    cy.wait(2000)
    cy.xpath(this.locator.Editpremises).click({ force: true }).clear().type(this.data.Editpremises)
    cy.xpath(this.locator.Editvision).click({ force: true }).clear().type(this.data.Editemail)
})
And('User clicks on Save Changes button', function () {
    cy.xpath(this.locator.savebtn).click({ force: true })
})
Then('User will be redirected to the WELL WELL Performance Rating Dashboard page successfully', function () {
    cy.contains('WELL Performance Rating').should('be.visible')
})