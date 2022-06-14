import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'


beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User navigate to Alternatives page by logging in to wellcertified', function () {
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
    cy.contains('Alternatives').should('be.visible').click({ force: true })
})
})
Then('User verifies the Alternatives page fields', function () {
    cy.contains('Alternatives').should('be.visible')
})
And('User verifies the Alternatives count list', function () {
    cy.xpath(this.locator.CountAlternativelist).invoke('text').then((CountAlternativelist) => {
        expect(CountAlternativelist.trim()).to.equal("0")
    })
})
/////////////////////////////////////////Verifying the Alternative Adherence Path Proposals (AAPs) page///////////
Given('User navigates to Alternative Adherence Path page', function () {
    cy.contains('Alternative Adherence Path Proposals (AAPs)').should('be.visible')
})
When('User clicks on submit AAP button and verfies the fields', function () {
    cy.xpath(this.locator.submitAAP).click({ force: true })
    cy.contains('Alternative Adherence Path').should('be.visible')
})
And('User select the feature', function (){
    cy.xpath(this.locator.feature).select(this.data.feature, { force: true })
})
And('User enter the Reason for Alternative Means and Methods field', function (){
    cy.xpath(this.locator.reasonforAlternative).type(this.data.reason)
})
And('User enter the Proposed Alternative Means of Compliance field', function (){
    cy.xpath(this.locator.Proposed).type(this.data.reason)
})
And('User upload document for AAP', function (){
    cy.xpath(this.locator.alternativesupload).attachFile(this.data.Uploadfile, { force: true })
})
And('User clicks on submit button', function (){
    cy.wait(3000)
    cy.xpath(this.locator.alternativeSubmit).click({ force: true })
})
Then('User will be redirected to Alternative List successfully', function (){
    cy.contains('Alternative Adherence Path Proposals (AAPs)').should('be.visible')
})
And('User verifies feature name', function (){
    cy.contains('PA1 Meet Thresholds for Particulate Matter').should('be.visible')
})
And('User verifies status', function (){
    cy.contains('pending').should('be.visible')
})
And('User verifies type', function (){
    cy.xpath(this.locator.alternativeType).invoke('text').then((alternativeType) => {
        expect(alternativeType.trim()).to.equal("aap")
    })
})
/////////////////////////////////////////Verifying the Equivalency Proposals (EPs)/////////////////////////
Given('User navigates to Equivalency Proposals page', function (){
    cy.wait(2000)
    cy.contains('Equivalency Proposal').should('be.visible')
})
When('User clicks on submit EP button and verfies the fields', function (){
    cy.wait(2000)
    cy.xpath(this.locator.submitEP).click({ force: true })
    cy.contains('Equivalency Proposal').should('be.visible')
   })
And('User select the feature for EP', function (){
    cy.xpath(this.locator.featureEPdrop).select(this.data.featureEP, { force: true })
   })
And('User enter the Reason for Equivalency Request', function (){
    cy.xpath(this.locator.reasonforAlternative).type(this.data.reason, { force: true })
})
And('User enter the Proposed Alternative Means of Compliance', function (){
    cy.xpath(this.locator.Proposed).type(this.data.reason, { force: true })
})
And('User enter the Regions and Countries where Equivalency may be Applicable', function (){
    cy.xpath(this.locator.regionstext).type(this.data.reason, { force: true })
})
And('User enter the Verification method within proposed equivalent', function (){
    cy.xpath(this.locator.verification).type(this.data.reason, { force: true })
})
And('User enter the Similarities to WELL feature requirement', function (){
    cy.wait(2000)
    cy.xpath(this.locator.Similarities).type(this.data.reason, { force: true })
})
And('User enter the Differences from WELL feature requirement', function (){
    cy.wait(2000)
    cy.xpath(this.locator.Differences).type(this.data.reason, { force: true })   
})
And('User upload document for EP', function (){
    cy.xpath(this.locator.alternativesupload).attachFile(this.data.Uploadfile, { force: true })
})
And('User clicks on submit button', function (){
    cy.wait(3000)
    cy.xpath(this.locator.alternativeSubmit).click({ force: true })
})
Then('User will be redirected to Alternative List successfully', function (){
    cy.contains('Alternative Adherence Path Proposals (AAPs)').should('be.visible')
})
And('User verifies feature name', function (){
    cy.contains('PA1 Meet Thresholds for Particulate Matter').should('be.visible')
})
And('User verifies status', function (){
    cy.contains('pending').should('be.visible')
})
And('User verifies type for EP', function (){
    cy.xpath(this.locator.alternativeType).invoke('text').then((alternativeType) => {
        expect(alternativeType.trim()).to.equal("ep")
    })
})