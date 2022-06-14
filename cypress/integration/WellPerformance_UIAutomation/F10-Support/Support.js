import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'


beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User navigate to the Support page by logging in to wellcertified', function () {
    Login.loginpage()
 
//     cy.fixture('projectId').then(function (projectid) {

//        this.projectid = projectid

//        cy.xpath(this.locator.wellperformance).click({ force: true })

//        cy.wait(2000)

//        cy.contains(this.projectid.WellV2Project).click({ force: true })
//        cy.wait(2000)

//        })

//    })
cy.fixture('ProjectId').then(function (projectid) {
    this.projectid = projectid
    cy.xpath(this.locator.wellperformance).contains('WELL Performance').click({ force: true })
    cy.xpath(this.locator.pid).click({ force: true })
    cy.xpath(this.locator.pid).type(this.projectid.WellV2Project)
    cy.contains('Apply').click({ force: true })
    cy.wait(2000)
    cy.contains(this.projectid.WellV2Project).click({ force: true })
    cy.wait(2000)
})
})
When('User clicks on Support from the left menu', function () {
    cy.contains('Support').click({ force: true })
    cy.wait(3000)
   })
Then('User will be redirected to Support page successfully', function () {
    cy.contains('Support').should('be.visible')
    cy.wait(3000)
   })
And('User verifies the your WELL Performance Support page fields', function () {
    cy.contains('Getting Started').should('be.visible')
    cy.contains('Technical tools').should('be.visible')
   })
   /////////////////////////////Verifies the support cards page//////////////////////////////////////////

Given('User navigate to the support cards page', function () {
    cy.contains('Support').should('be.visible')
    cy.wait(3000)
   })
   Then('User verifies card count for Getting Started', function () {
    cy.get(this.locator.supportcard).eq(0).should('contain.text','Overview: the WELL Rating Process')
    cy.get(this.locator.supportcard).eq(1).should('contain.text','(Coming soon) How to Create and Upload WELL Documentation')
    cy.get(this.locator.supportcard).eq(2).should('contain.text','(Coming soon) The WELL Rating Review Process')
    cy.get(this.locator.supportcard).eq(3).should('contain.text','Celebrate your WELL Rating achievement')
    cy.get(this.locator.supportcard).eq(11).should('contain.text','WELL v2 to WELL Ratings Gap Analysis Tool')
    cy.get(this.locator.supportcard).eq(12).should('contain.text','WELL v2 pilot to WELL Ratings Gap Analysis Tool')
   })
   And('User verifies card count for Technical tools',  function () {
    cy.get(this.locator.supportcard).eq(4).should('contain.text','WELL Ratings Guidebook')
    cy.get(this.locator.supportcard).eq(5).should('contain.text','(Coming Soon) Letter of Assurance Template')
    cy.get(this.locator.supportcard).eq(6).should('contain.text','(Coming soon) Interiors + Base Buildings: Applying WELL Certification in a WELL Certified Base Building')
    cy.get(this.locator.supportcard).eq(7).should('contain.text','(Coming soon) Sample Documentation')
    cy.get(this.locator.supportcard).eq(8).should('contain.text','(Coming soon) Multiple Locations Document Sharing Form')
    cy.get(this.locator.supportcard).eq(9).should('contain.text','WELL Performance Rating Alignment Tool')
    cy.get(this.locator.supportcard).eq(10).should('contain.text','WELL Performance Rating Sensor Data Template')
    cy.get(this.locator.supportcard).eq(11).should('contain.text',' WELL v2 to WELL Ratings Gap Analysis Tool')
    cy.get(this.locator.supportcard).eq(12).should('contain.text','WELL v2 pilot to WELL Ratings Gap Analysis Tool')
   })
   And('User verifies card count for Helpful articles',  function () {
    cy.get(this.locator.supportcard).eq(13).should('contain.text','Sleeping Giants: Awakening Building Water Systems')
    cy.get(this.locator.supportcard).eq(11).should('contain.text',' WELL v2 to WELL Ratings Gap Analysis Tool')
    cy.get(this.locator.supportcard).eq(12).should('contain.text','WELL v2 pilot to WELL Ratings Gap Analysis Tool')
   })

