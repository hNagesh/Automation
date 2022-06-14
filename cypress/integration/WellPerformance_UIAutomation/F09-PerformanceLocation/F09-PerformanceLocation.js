import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User navigate to the WELLPerformance Rating list page by logging in to wellcertified', function() {
    Login.loginpage()
 
     cy.fixture('projectId').then(function (projectid) {
 
        this.projectid = projectid
 
        cy.xpath(this.locator.wellperformance).click({ force: true })
 
        cy.wait(2000)
 
        cy.contains(this.projectid.WellV2Project).click({ force: true })
        cy.wait(2000)
 
        })
 
    })
When('User clicks on Location button', function() {
    cy.xpath(this.locator.location).click({ force: true })
    cy.wait(2000)
})
Then('User will be redirected to Location page', function() {
    cy.contains('Locations').should('be.visible')
})
And('User verifies the Location fields', function() {
    cy.xpath(this.locator.refresh).should('be.visible')
    cy.xpath(this.locator.downloadlocation).should('be.visible')
    cy.xpath(this.locator.filter).should('be.visible')
})
///////////////////////////////////validate Single Location//////////////////////////////////
Given('User navigate to the Location page by logging in to wellcertified', function() {
    cy.contains('Locations').should('be.visible')
})
When('User clicks on Add Location button and verifies the fields', function() {
    cy.contains('Add').should('be.visible').click({ force: true })
    cy.wait(2000)
    //cy.xpath(this.locator.Addlocation).click({ force: true })
    cy.contains(' Add location').should('be.visible').click({ force: true })
    cy.wait(2000)
    cy.contains('Add a location').should('be.visible')
    cy.xpath(this.locator.locationname).should('be.visible')
    cy.xpath(this.locator.locationarea).should('be.visible')
    cy.xpath(this.locator.areatype).should('be.visible')
    cy.xpath(this.locator.spacetype).should('be.visible')
    cy.xpath(this.locator.ownershiptype).should('be.visible')
    cy.xpath(this.locator.CRegion).should('be.visible')
    cy.xpath(this.locator.SAddress).should('be.visible')
    cy.xpath(this.locator.city).should('be.visible')
    cy.xpath(this.locator.postalcode).should('be.visible')
})
And('User clicks on submit button without entering the mandatory fields and verifies error message', function() {
    cy.xpath(this.locator.submit).click({ force: true })
    cy.contains('Location Name* is required.').should('be.visible')
    cy.contains('Location Area* is required.').should('be.visible')
    cy.wait(2000)
}) 
And('User enters data to Location Name, Location Area, Area Type, Space Type and Ownership Type fields', function() {
    cy.xpath(this.locator.locationname).type(this.data.locationname, { force: true })
    cy.xpath(this.locator.locationarea).type(this.data.locationarea, { force: true })
    cy.xpath(this.locator.areatype).select(this.data.areatype)
    cy.xpath(this.locator.spacetype).select(this.data.spacetype)
    cy.xpath(this.locator.ownershiptype).select(this.data.ownershiptype)
})
And('User enters data to Country, Street address, City and Postal Code fields', function() {
    cy.xpath(this.locator.CRegion).select(this.data.CRegion)
    cy.xpath(this.locator.State).select(this.data.State)
    cy.xpath(this.locator.SAddress).type(this.data.SAddress, { force: true })
    cy.xpath(this.locator.city).type(this.data.city, { force: true })
    cy.xpath(this.locator.postalcode).type(this.data.postalcode, { force: true })
})
And('User selects Is this location public option', function() {
    cy.xpath(this.locator.publicloc).check({ force: true })
})
And('User clicks on submit button', function() {
    cy.xpath(this.locator.submit).click({ force: true })
    cy.wait(2000)
})
Then('User will be redirected to project Location list page successfully', function() {
    cy.contains('Locations').should('be.visible')
})
And('User verifies project Construction status in Location list', function() {
    cy.contains('Pending').should('be.visible')
    // cy.xpath(this.locator.pending).invoke('text').then((status) => {
        // expect(status).to.equal("Pending")
})
////////////////////////////////Validate Multiple Location//////////////////////////////
Given('User navigate to the WELLPerformance Rating list page by logging in to wellcertified', function() {
    cy.contains('Locations').should('be.visible')
})
When('User clicks on Location button', function() {
    cy.xpath(this.locator.location).click({ force: true })
    cy.wait(2000)
})
And('User clicks on Import button', function() {
    cy.xpath(this.locator.import).click({ force: true })
})
Then('User will be redirected to Portfolio Locations Import page', function() {
    cy.contains('Portfolio Locations Import').should('be.visible')
})
And('User verifies the Create new locations page', function() {
    cy.contains('Create new locations').should('be.visible')
    cy.xpath(this.locator.backtoloc).should('be.visible')
    cy.xpath(this.locator.cancel).should('be.visible')
})
And('User upload document for Create new locations', function() {
    cy.xpath(this.locator.uploadfile).attachFile(this.data.excelfile)
})
And('User clicks on Next button', function() {
    cy.xpath(this.locator.next).click({ force: true })
    cy.wait(3000)
})
And('User redirects to Match columns from your file to project fields', function() {
    cy.contains('Match columns from your file to project fields').should('be.visible')
    cy.xpath("(//*[@type='checkbox'])[32]").check({ force: true })
})
And('User redirects to Validation page',  function() {
    cy.contains('Validation summary for your import').should('be.visible')
})
And('User verifies the Validation page fields', function() {
    cy.get(".min-w-full.divide-y.divide-primary-200 tr").should('have.length', 11)
    })

And('User clicks on Finish Import button', function() {
    cy.xpath(this.locator.finishimport).click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.close).click({ force: true })
})
And('User verifies the Pagination', function(){ 
    // cy.get("min-w-full.divide-y.divide-primary-200").should('have.length', 11)
    cy.xpath(this.locator.count).invoke('text').then((status)=>{
        expect(status).to.equal('11')
        })
})
//////////////////////////validate filters Space type/////////////////////////
Given('User navigate to the WELLPerformance Rating list page by logging in to wellcertified', function() {
    cy.contains('Locations').should('be.visible')
})
When('User clicks on Location button', function() {
    cy.xpath(this.locator.location).click({ force: true })
    cy.wait(2000)
})
And('User clicks on Filters button and verifies fliter options counts', function() {
    cy.xpath(this.locator.filters).click({ force: true })
    cy.xpath(this.locator.reset).should('be.visible')
    cy.contains('Space type').should('be.visible')
})
And('User selects Space type', function() {
    cy.xpath(this.locator.checkboxbtn).check({ force: true })
})
And('User clicks on Apply button and verifies project location list', function() {
    cy.xpath(this.locator.apply).click({ force: true })
    cy.xpath(this.locator.count).invoke('text').then((status)=>{
        expect(status).to.equal('1')
        })

})
//////////////////////////validate filters Occupancy size range/////////////////////////////
Given('User navigate to the WELLPerformance Rating list page by logging in to wellcertified', function() {
    cy.contains('Locations').should('be.visible')
})
When('User clicks on Location button', function() {
    cy.xpath(this.locator.location).click({ force: true })
    cy.wait(2000)
})
And('User clicks on Filters button and verifies fliter options counts', function() {
    cy.xpath(this.locator.filters).click({ force: true })
    cy.xpath(this.locator.reset).should('be.visible')
    cy.contains('Occupancy size range (sqft)').should('be.visible')
})
And('User selects Occupancy size range', function() {
    cy.xpath(this.locator.sizerange).check({ force: true })
})
And('User clicks on Apply button and verifies project location list', function() {
    cy.xpath(this.locator.apply).click({ force: true })
    cy.wait(3000)
    cy.xpath(this.locator.count).invoke('text').then((count)=>{
        expect(count).to.equal('6')
        })
    })
    //////////////////////////validate location status//////////////////////////////
    Given('User navigate to the WELLPerformance Rating list page by logging in to wellcertified', function() {
        cy.contains('Locations').should('be.visible')
    })
    When('User clicks on Location button', function() {
        cy.xpath(this.locator.location).click({ force: true })
        cy.wait(2000)
    })
    And('User clicks on Filters button and verifies fliter options counts', function() {
        cy.xpath(this.locator.filters).click({ force: true })
        cy.xpath(this.locator.reset).should('be.visible')
        cy.contains('Location status').should('be.visible')
    })
    And('User selects Location status', function() {
        cy.xpath(this.locator.locationstatus).check({ force: true })

    })
    And('User clicks on Apply button and verifies project location list', function() {
        // cy.xpath(this.locator.apply).click({ force: true })
        // cy.wait(3000)
        // cy.xpath(this.locator.count).invoke('text').then((count)=>{
        //     expect(count).to.equal('12')
        //     })
        })