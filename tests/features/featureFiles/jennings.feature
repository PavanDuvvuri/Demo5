Feature: Demo Feature

 @Scenario9
  Scenario: Ensure adding an odd to betslip is successful

    Given I am on the jenningsbet homepage
    When  I click on basketball links
    And   add an odd to betslip for a match available
    Then  selected odd is added

 @Scenario8
 Scenario: Ensure information on betslip is correct

    Given I am on the jenningsbet homepage
    When  I click on basketball links
    And   add an odd to betslip for a match available
    Then  match name is correct on betslip
    And   team is displayed in Bold on the betslip
  
  @Scenario7
  Scenario: Ensure total returns calculation on betslip is accurate 
    
    Given I am on the jenningsbet homepage
    When  I click on basketball links
    And   add an odd to betslip for a match available
    And   I enter the stake amount as 100
    Then  potential total returns is equal to odd in decimal multiplied with stake amount
