Feature: Create 1 or more shopping lists.
			  As a shopper
			  I should be able to create 1 or more shopping lists
			  So that I can easily organize my shopping lists.
		
		Scenario: A user should be able to create a shopping list.
			  Given that I want to create a shopping list
			  When I create a new shopping list with a name
  			  Then I should get an empty list.
  			  And it should have the name that I gave it.
  			  And it should be stored in a list of all shopping-lists.


		Scenario Outline: A user should be able to create their shopping list.
			  Given that I want to create a shopping list
			  When I create a new shopping list 
  			  And I add the <nameList> of the shopping list
			  Then I should get an empty  list with the name <nameList>.

		Scenario: A user should not be able to add unnamed shopping list
			  Given that I want  to create a shopping list
			  When I try to create a shopping list without a name
			  Then I should get a runtime error.