Feature: Save a shopping list.
			As a shopper
			I should be able to save my shopping list.
			So that I can use it in another occasion.

		Scenario:
			A user should be able to save a shopping list.
			Given that I have created a named shopping list
			When I try to save my shopping list in the database
			Then the shopping list should be saved in the database
			And I should be able to retrieve my saved shopping list.