Feature: Adding items to the grocery-list
	 		As a shopper 
			I should be able to add named items to my grocery list
 			So that I can remember to buy it them.

		 Scenario: A user should not be able to add unnamed items
			Given that I have an empty grocery list
			When I try to add an item without a name
			Then I should get a runtime error.
