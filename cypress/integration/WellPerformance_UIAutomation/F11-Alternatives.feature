Feature: F13-Creating and validating Alternatives
    
    #Scenario-1
    @RegressionTest
    Scenario: Verifying the Alternatives page
    Given User navigate to Alternatives page by logging in to wellcertified
    Then User verifies the Alternatives page fields
    And User verifies the Alternatives count list

    # #Scenario-2
    # @RegressionTest
    # Scenario: Verifying the Alternative Adherence Path Proposals (AAPs) page
    # Given User navigates to Alternative Adherence Path page
    # When User clicks on submit AAP button and verfies the fields
    # And User select the feature
    # And User enter the Reason for Alternative Means and Methods field
    # And User enter the Proposed Alternative Means of Compliance field
    # And User upload document for AAP
    # And User clicks on submit button
    # Then User will be redirected to Alternative List successfully
    # And User verifies feature name
    # And User verifies status
    # And User verifies type

    #Scenario-3
    @RegressionTest
    Scenario: Verifying the Equivalency Proposals (EPs)
    Given User navigates to Equivalency Proposals page
    When User clicks on submit EP button and verfies the fields
    And User select the feature for EP
    And User enter the Reason for Equivalency Request
    And User enter the Proposed Alternative Means of Compliance
    And User enter the Regions and Countries where Equivalency may be Applicable
    And User enter the Verification method within proposed equivalent
    And User enter the Similarities to WELL feature requirement
    And User enter the Differences from WELL feature requirement
    And User upload document for EP
    And User clicks on submit button
    Then User will be redirected to Alternative List successfully
    And User verifies feature name
    And User verifies status
    And User verifies type for EP