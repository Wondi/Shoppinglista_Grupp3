let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');
let GroceryListItem = require('../../grocery-list-item.js');

defineSupportCode(function({Given, When, Then}) {
	let groceryList = new GroceryList('Torsdag');
	let runtimeErrorOnNoBoughtItems = false;
	
	Given('that I have a shopping list with items that are marked as bought or unbought', function (callback) {
     // Write code here that turns the phrase above into concrete actions
     assert(groceryList instanceof GroceryList);
     callback();
	});

	When('I try to see only the items that are marked as bought', function (callback) {
     // Write code here that turns the phrase above into concrete actions
     try {
     	groceryList.boughtItems(...args);
     }
     catch(e) {
     	runtimeErrorOnNoBoughtItems = true;
     }
     callback();
	});

	Then('I should get a list with only the items that I have bought.', function (callback) {
     // Write code here that turns the phrase above into concrete actions
     callback();
	});

});