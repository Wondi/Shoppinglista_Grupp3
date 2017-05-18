Feature: Marking an item in the shopping list as unbought.
			As a shopper
			I should be able to mark the item I haven't bought yet as unbought
			so that I can see which items I have left to buy.

		 Scenario:  A user should be able to mark an item as unbought 
			Given that I have a shopping list of items to buy
			And the items on the list are marked as unbought from the start
			When I buy an item from the list
			Then I should be able to mark that item as bought and the remaining items as unbought.
