Feature: Sort items in a list by category
    As a shopper
    I should be able to sort the items that I have in my list by category
    so that I can check easily which items I have under every category.
 
    Scenario: A user should be able to sort the items of a list by category name
        Given that I have a shopping list with items 
        And the items are categorised
        When I try to sort the items by category name
		Then I should get as a result a list with the items sorted by their category name.
 
