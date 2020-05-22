Feature: user can add women evening dress
 
  Test add items to cart
  
  Scenario: user verifies shopping cart has 2 items in cart

    Given The user is on Homepage
    
    When the user clicks Cart
      
    And And user verifies the total products = 2
	And And User Clicks checkout
	
    Then user is taken to the Authentication screen