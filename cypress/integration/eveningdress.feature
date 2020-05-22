Feature: user can add women evening dress
 
  Test add items to cart
  
  Scenario: can add women blouse
    Given The user is on Homepage
    
    When the user clicks Women
      
    And user clicks Dresses
	And User Clicks evening dresses
	And user clicks on Quick View printed dress
	And user clicks on add to cart from Pop up
    And the user clicks on continue shopping
    Then The user is returned to the homepage