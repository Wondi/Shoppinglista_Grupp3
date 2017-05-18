let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');
// let GroceryListItem = require('../../grocery-list-item.js');
let AppGroceryLists = require('../../app-grocery-lists.js');

defineSupportCode(function({Given, When, Then}) {

	let appList = new AppGroceryLists();
	let groceryList;

	Given('that I want to create a shopping list', function (callback) {
       //No special action needed
       callback();
    });

	When('I create a new shopping list with a name', function (callback) {
		// We expect addGroceryList to return a grocery list
        groceryList = appList.addGroceryList("Fredag");
        callback();
    });
	
    Then('I should get an empty list.', function (callback) {
        assert(groceryList instanceof GroceryList);
        callback();
    });

  	Then('it should have the name that I gave it.', function (callback) {
        assert(groceryList.name === "Fredag");
        callback();
    });


    Then('it should be stored in a list of all shopping-lists.', function (callback) {
       assert(appList.groceryLists[appList.groceryLists.length-1] === groceryList);
       callback();
    });

});

