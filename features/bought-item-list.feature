Feature: List of bought items
         	As a shopper
            I should be able to see all the items that are marked as bought in a list
            so that I can check easily which items I have bought.
                  	
         Scenario: A user should be able to see in a list all the items that are bought
            Given that I have a shopping list with items
            And the items are marked as bought or unbought
            When I try to see only the items that are marked as bought
            Then I should get a list with only the items that I have bought.