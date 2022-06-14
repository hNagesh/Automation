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
When('User clicks on Promotion tab', function () {
    cy.contains('Promotion').should('be.visible').click({ force: true })
    cy.wait(2000)
})
Then('User will be redirected to Promotion page', function () {
    cy.contains('Promotion').should('be.visible')
})
And('User verifies Promotion fields', function () {
    cy.contains('Engagement Materials').should('be.visible')
})
And('User verifies Engagement Materials cards', function () {
    cy.get(this.locator.Promotion.resourceCard).eq(0).should('contain.text','IWBI branding guidelines')
})