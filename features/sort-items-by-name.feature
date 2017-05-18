Feature: Sorting items in a shopping list by name.
			As a shopper
			I should be able to sort the items in a shopping list by name
			so that I can go through the items in alphabetical order.

		 Scenario:  A user should be able to sort the items in a list by name 
			Given that I have a shopping list with named items
			When I try to sort the items by name
			Then I should be able to get a list with the items sorted by their name.