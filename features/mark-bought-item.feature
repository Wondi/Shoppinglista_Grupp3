Feature: Marking an item in the shopping list as bought.
			As a shopper
			I should be able to mark the item I bought as bought
			so that I don't buy the same item again.

		 Scenario:  A user should be able to mark an item as bought 
			Given that I have a grocery list of items to buy
			When I buy an item from the list so that I can change the value of it
			Then I get the item value changed to bought.
