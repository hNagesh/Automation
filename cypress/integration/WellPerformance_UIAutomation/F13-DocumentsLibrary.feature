#-------------------------------------------------------------------------------------
# Authors : Gokul & Seena                                               Reviewed By:
# Date :                                                                Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: Upload and Validating Document for WELL Performance
# Feature Description: Upload and Validating Document for  WELL Performance
#---------------------------------------------------------------------------------------
Feature: F13-Upload and Validating Document for WELL Performance

  # #Scenario-1
  # @RegressionTest
  # Scenario:Validating Document Library
  #   Given User navigate to the Document Library page by logging in to wellcertified
  #   When User clicks on Document Library tab
  #   Then User will be redirected to the  WELL Performance Document page successfully

  # #Scenario-2
  # @RegressionTest
  # Scenario:Validating Document Library fields
  #   Given User navigate to the Document Library page
  #   Then User verifies Document fields
  #   And User verifies Type options

    #Scenario-3
  # @RegressionTest
  # Scenario:Validating General type in Upload Document
  #   Given User navigate to the Document Library page by logging in to wellcertified
  #   When User clicks on Document Library tab
  #   And User clicks on Upload button
  #   And User select the General type
  #   And User select option type
  #   And User Upload the Document
  #   And User enter the comment
  #   And User clicks on upload button
  #   Then User will be redirected to general List successfully

  # #Scenario-4
  # @RegressionTest
  # Scenario:Validating Audit type in Upload Document
  #   Giv User clicks on Document Library tab
  #   And Useen User navigate to the Document Library page by logging in to wellcertified
  #   Whenr clicks on Upload button
  #   And User select the Audit type
  #   And User select the Verification Method
  #   And User select the Feature parts
  #   And User clicks on Add part button
  #   And User Upload the Document
    # And User enter the comment
    # And User clicks on upload button
    # Then User will be redirected to Document List successfully
    # And User verifies the type in Audit list
    # And User delete Audit type in Audit type in Upload Document


#Scenario-5
  @RegressionTest
  Scenario:Validating the Updated Document
    Given User navigate to the Document Library page by logging in to wellcertified
    When User clicks on Document Library tab
    And User clicks edit icon in document list
    And User edit location document
    And User check the location in location document
    And User clicks on update button
    Then User redirect to document list
    And User verfies the location count for updates document
