Feature: User can add multiple items to cart
 
  Test add items to cart
  
  Scenario: can add women blouse
    Given The user is on Homepage
    
    When the user clicks Women
      
    And user clicks Tops
	And User Clicks blouses
	And User clicks on add to cart
	And The user clicks on continue shopping
    Then The user is returned to the homepage