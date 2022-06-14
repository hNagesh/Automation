Feature: F09- WELLPerformance Rating Location

# #Scenario-1
# @RegressionTest
# Scenario:Verifies Location page for WELLPerformance Rating
# Given User navigate to the WELLPerformance Rating list page by logging in to wellcertified
# When User clicks on Location button
# Then User will be redirected to Location page
# And User verifies the Location fields

# #Scenario-2
# @RegressionTest
# Scenario:Validate Single Location page
# Given User navigate to the Location page by logging in to wellcertified
# When User clicks on Add Location button and verifies the fields
# And User clicks on submit button without entering the mandatory fields and verifies error message
# And User enters data to Location Name, Location Area, Area Type, Space Type and Ownership Type fields
# And User enters data to Country, Street address, City and Postal Code fields
# And User selects Is this location public option
# And User clicks on submit button
# Then User will be redirected to project Location list page successfully
# And User verifies project Construction status in Location list

# #Scenario-3
# @RegressionTest
# Scenario: Validate Multiple Location
#     Given User navigate to the WELLPerformance Rating list page by logging in to wellcertified
#     When User clicks on Location button
#     And User clicks on Import button
#     Then User will be redirected to Portfolio Locations Import page
#     And User verifies the Create new locations page
#     And User upload document for Create new locations
#     And User clicks on Next button
#     And User redirects to Match columns from your file to project fields 
#     And User clicks on Next button
#     And User redirects to Validation page
#     And User verifies the Validation page fields
#     And User clicks on Finish Import button
#     And User verifies the Pagination


# #Scenario-4
# @RegressionTest
# Scenario: validate filters Space type
# Given User navigate to the WELLPerformance Rating list page by logging in to wellcertified
# When User clicks on Location button
# And User clicks on Filters button and verifies fliter options counts
# And User selects Space type
# And User clicks on Apply button and verifies project location list


# #Scenario-5
# @RegressionTest
# Scenario: validate filters Occupancy size range
# Given User navigate to the WELLPerformance Rating list page by logging in to wellcertified
# When User clicks on Location button
# And User clicks on Filters button and verifies fliter options counts
# And User selects Occupancy size range
# And User clicks on Apply button and verifies project location list


#Scenario-6
@RegressionTest
Scenario: validate filters Location status
Given User navigate to the WELLPerformance Rating list page by logging in to wellcertified
When User clicks on Location button
And User clicks on Filters button and verifies fliter options counts
And User selects Location status
And User clicks on Apply button and verifies project location list

# #Scenario-7
# @RegressionTest
# Scenario: Validate updated location
# Given User navigate to the WELLPerformance Rating list page by logging in to wellcertified
# When User clicks on Location button
# And User clicks on location Name

