Feature: Adding items to the grocery-list
	As a shopper
	I should be able to add named items to my grocery list
	so that I can remember to buy them.

	Scenario: A user should not be able to add unnamed items
		Given that I have an empty grocery list
		When I try to add an item without a name
		Then I should get a runtime error.

	Scenario Outline: Adding an item to an empty grocery list
		Given that I have an empty grocery list
		When I add <itemsInList> item to the list
		Then I should have <itemsInList> item in my grocery list.
		And the item should be a grocery list items.

    Examples:
      | itemsInList  |
      | 			1|
      | 		   99|
      |			 1000|


