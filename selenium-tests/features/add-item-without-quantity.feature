Feature: Adding a quantity of an item.
			As a shopper
			I should be able to add a quantity of every item in my grocery list
			So that I can remember how many units of every item I should buy.

		 Scenario: A user should not be able to add items without a quantity of every item.
			Given that I have an empty grocery list
			When I try to add an item without a quantity to an empty grocery list
			Then I should get an alert message.
