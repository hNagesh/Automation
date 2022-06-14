# Last Updated On:
# Feature Name: WELL Health Safety Edit
# Feature Description: Updating the WELL Performance
#------------------------------------------------------------------------------------
Feature: F12-Update Project

    #Scenario-1
    @RegressionTest
    Scenario: Verifies Edit page for WELL Performance Project
        Given User navigate to the Edit page by logging in to wellcertified
        When User clicks on Edit tab
        Then User will be redirected to the WELL Performance Edit page successfully

    #Scenario-2
    @RegressionTest
    Scenario:Verifies Project Information fields for WELL Performance Project
        Given User is on Edit Project page by logging in to wellcertified
        And User verifies project Information fields
        When User update project Information fields
        And User verifies Owner Information fields
        And User update Owner Information fields
        And User verifies Owner Address fields
        And User update  Owner Address fields
        And User update WELL Performance scope & premises, WELL Performance goals and vision fields
        And User clicks on Save Changes button  
        Then User will be redirected to the WELL WELL Performance Rating Dashboard page successfully

    #Scenario-3
    @SmokeTest
    Scenario:Edit Functionalities for WELL Performance Project
        Given User navigate to the Edit page by logging in to wellcertified
        When User clicks on Edit tab
        And User will be redirected to the WELL Certification Edit page successfully
        And User update project Information fields
        And User update Owner Information fields
        And User update  Owner Address fields
        And User update WELL Performance scope & premises, WELL Performance goals and vision fields
        And User clicks on Save Changes button
        Then User will be redirected to the WELL WELL Performance Rating Dashboard page successfully