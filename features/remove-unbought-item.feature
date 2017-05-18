Feature: Removing items that are marked as unbought from my shopping list. 
			As a shopper
			I should be able to remove items marked as unbought from my list
			So that I can have an updated list without unbought items that I don’t want. 

		 Scenario: A user should be able to remove unbought items.
			Given that I have an shopping list with items that are marked as unbought
			When I try to remove an item that is marked as unbought from the list 
			Then I should have a list without the removed item. 
