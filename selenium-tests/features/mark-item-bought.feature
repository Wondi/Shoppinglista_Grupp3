Feature: Marking an item in the shopping list as bought.
			As a shopper
			I should be able to mark the item I bought as bought
			so that I don't buy the same item again.

		 Scenario:  A user should be able to mark an item as bought 
			Given that I have a grocery list with items 
			When I try to change the status to bought of an item 
			Then I should get the item status changed to bought.
