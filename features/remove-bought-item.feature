Feature: Removing items that are marked as bought from my shopping list. 
			As a shopper
			I should be able to remove items marked as bought from my list
			So that I can have an updated list without already bought items. 

		 Scenario: A user should be able to remove bought items from my shopping list.
			Given that I have a shopping list with items that are marked as bought
			When I try to remove an item that is marked as bought from the list 
			Then I should have a list without the removed item. 


