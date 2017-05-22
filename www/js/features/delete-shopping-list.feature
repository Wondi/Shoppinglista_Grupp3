Feature: Delete a shopping list.
			As a shopper
			I should be able to delete my saved shopping list from database
			So that I can see just the ones that I want to keep.

		Scenario:
			As a user I should be able to delete a saved shopping list.
			Given that I have a saved shopping list
			When I delete the shopping list from list of all shopping-lists
			Then that particular shopping list should be deleted from list of all shopping-lists.
			
