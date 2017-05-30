Feature: Delete a shopping list.
			As a shopper
			I should be able to delete my saved shopping list
			So that I can see just the ones that I want to keep.

	Scenario: As a user I should be able to delete a shopping list from my collection.
			  Given that I have a shopping list in my collection of lists
			  When I try to delete the shopping list from my collection of lists
			  Then that particular shopping list should be deleted from my collection of lists.
			
