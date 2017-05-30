Feature: Marking an item in the shopping list as unbought after I have marked it as bought.
			As a shopper
			I should be able to mark the item I have not bought as unbought
			so that I can see the items that I have to buy.

		 Scenario:  A user should be able to mark an item as unbought 
			Given that I have a grocery list with items 
			When I try to change the status of a bought item to unbought
			Then I should get the item status changed to unbought.
