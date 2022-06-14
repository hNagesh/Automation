import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'

beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User navigate to the Document Library page by logging in to wellcertified', function () {
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
When('User clicks on Document Library tab', function () {
    cy.wait(2000)
    cy.contains('Documents Library').should('be.visible').click({ force: true })
})
Then('User will be redirected to the  WELL Performance Document page successfully', function () {
    cy.contains('Documents library').should('be.visible')
    cy.wait(3000)
})
/////////////////////////////////////Validating Document Library fields////////////////////////////
Given('User navigate to the Document Library page', function () {
    cy.wait(3000)
    cy.contains('Documents Library').should('be.visible')

})
Then('User verifies Document fields', function () {
    cy.xpath(this.locator.DocumentLibrary.Uploadbtn).should('be.visible')
    cy.xpath(this.locator.DocumentLibrary.Task).should('be.visible')
    cy.xpath(this.locator.DocumentLibrary.Documents).should('be.visible')
    cy.xpath(this.locator.DocumentLibrary.Summary).should('be.visible')
    cy.xpath(this.locator.DocumentLibrary.search).should('be.visible')
})
And('User verifies Type options', function () {
    cy.wait(4000)
    cy.xpath(this.locator.DocumentLibrary.Uploadbtn).click({ force: true })
    cy.wait(2000)
    cy.get(this.locator.DocumentLibrary.VerificationmethodOrdocument).should('contain', 'Upload the requested general information items')
    // cy.get(this.locator.DocumentLibrary.VerificationmethodOrdocument).should('contain', 'Upload a legal document')
    // cy.get(this.locator.DocumentLibrary.VerificationmethodOrdocument).should('contain', 'Upload an audit document')
    // cy.get(this.locator.DocumentLibrary.VerificationmethodOrdocument).should('contain', 'Upload the requested general information items')
    // cy.get(this.locator.DocumentLibrary.VerificationmethodOrdocument).should('contain', 'Upload verification of a WELL feature')

})
///////////////////////////////////Validating General type in Upload Document///////////////////////
And('User clicks on Upload button', function () {
    cy.xpath(this.locator.DocumentLibrary.Uploadbtn).click({ force: true })
})
And('User select the General type', function () {
    cy.get(this.locator.DocumentLibrary.VerificationmethodOrdocument).eq(0).select("Upload the requested general information items")
    cy.wait(2000)
     
})
And('User select option type', function () {
    cy.wait(1000)
    cy.get(this.locator.DocumentLibrary.VerificationmethodOrdocument).eq(1).select("Project overview")
})
And('User Upload the Document', function () {
    cy.wait(1000)
    cy.xpath(this.locator.DocumentLibrary.AttachDoc).attachFile(this.data.Uploadfile)
    cy.wait(50000)
})
And('User enter the comment', function () {
    cy.wait(2000)
    cy.xpath(this.locator.DocumentLibrary.comment).type("Reduce Respiratory Particle Exposure")
})
And('User clicks on upload button', function () {
    cy.wait(2000)
    cy.xpath(this.locator.DocumentLibrary.uploadbtn).click({ force: true })
    cy.wait(10000)

})
Then('User will be redirected to general List successfully', function () {
    cy.wait(5000)
    cy.xpath(this.locator.DocumentLibrary.Documents).click({ force: true })
})
///////////////////////////Validating Audit type in Upload Document//////////////////////////////////
When('User select the Audit type', function () {
    cy.wait(2000)
    cy.xpath(this.locator.DocumentLibrary.Doctype).select("Upload audit document", { force: true })
cy.wait(2000)
})
And('User select the Verification Method', function () {
    cy.get(this.locator.DocumentLibrary.VerificationmethodOrdocument).eq(1).select("Technical Document (Audited)")

})
And('User select the Feature parts', function () {
    cy.xpath(this.locator.DocumentLibrary.featurepart).select("PW3", { force: true }) 
    cy.wait(1000)
    cy.xpath(this.locator.DocumentLibrary.spacetype).select("All Spaces", { force: true })
    cy.wait(1000)
    cy.xpath(this.locator.DocumentLibrary.selectoption).select("Option 1", { force: true })

})
And('User clicks on Add part button', function () {
    cy.wait(1000)
    cy.xpath(this.locator.DocumentLibrary.addpartbtn).click({ force: true })
})

And('User Upload the Document', function () {
    cy.wait(1000)
    cy.xpath(this.locator.DocumentLibrary.AttachDoc).attachFile(this.data.Uploadfile)
    cy.wait(3000)
})

And('User enter the comment', function () {
    cy.wait(2000)
    cy.xpath(this.locator.DocumentLibrary.comment).type("Reduce Respiratory Particle Exposure")
})
And('User clicks on upload button', function () {
    cy.wait(2000)
    cy.xpath(this.locator.DocumentLibrary.uploadbtn).click({ force: true })
    cy.wait(40000)

})
Then('User will be redirected to Document List successfully', function () {
    cy.wait(5000)
    cy.xpath(this.locator.DocumentLibrary.Documents).click({ force: true })
})
And('User verifies the type in Audit list', function () {
    cy.wait(2000)
    cy.contains("Technical Document (Audited)").scrollIntoView().should('be.visible')
})
/////////////////////////validate////////////////////////////
And('User clicks edit icon in document list', function () {
    cy.wait(1000)
    cy.xpath(this.locator.DocumentLibrary.Documents).click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.DocumentLibrary.editloc).click({ force: true })
    cy.wait(2000)
})
And('User edit location document', function () {
    cy.wait(2000)
    cy.xpath(this.locator.DocumentLibrary.editlocbtn).click({ force: true })
})
And('User check the location in location document', function () {
    cy.wait(2000)
    cy.get(this.locator.DocumentLibrary.check).eq(7).check()
    cy.get(this.locator.DocumentLibrary.check).eq(8).check()
    cy.xpath(this.locator.DocumentLibrary.assignbtn).click({ force: true })
})
And(' User clicks on update button', function () {
    cy.get(this.locator.DocumentLibrary.updateDocbtn).eq(0).click({ force: true })
})
Then('User redirect to document list', function () {
    cy.wait(2000)
    cy.contains('Documents Library').should('be.visible')
})
And('User verfies the location count for updates document', function () {
    cy.wait(3000)
    cy.get(this.locator.DocumentLibrary.verifyloc).eq(1).should('contain', "3")
})