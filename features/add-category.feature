Feature: Adding a category of an item.
	As a shopper
	I should be able to add a category of every item in my grocery list
	So that I can easily sort my items by the category in the grocery list.

	Scenario: A user should not be able to add items without a category of every item
		Given that I have an empty grocery list
		When I try to add an item without a category
		Then I should get a runtime error.