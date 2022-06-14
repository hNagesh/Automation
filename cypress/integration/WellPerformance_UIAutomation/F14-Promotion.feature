Feature:F14-Promotion module for WELL Performance Project

#Scenario-1
    @RegressionTest
    Scenario:Verifies Promotions fields
        Given User navigate to the Edit page by logging in to wellcertified
        When User clicks on Promotion tab
        Then User will be redirected to Promotion page
        And User verifies Promotion fields
        And User verifies Engagement Materials cards