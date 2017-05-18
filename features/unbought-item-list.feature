Feature: List of unbought items
            As a shopper
            I should be able to see all the items that are marked as unbought as a list
            so that I can check easily which items I haven’t bought.
                  	
         Scenario: A user should be able to see in a list all the items that are unbought
            Given that I have a shopping list with items
            And all the items are marked as bought or unbought
            When I try to see only the items that are marked as unbought
		    Then I should get a list with only the items that I haven’t bought.
