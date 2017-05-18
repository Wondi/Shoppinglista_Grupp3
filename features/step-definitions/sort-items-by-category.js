let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');
let GroceryListItem = require('../../grocery-list-item.js');

defineSupportCode(function({Given, When, Then}) {
	let groceryList = new GroceryList('Torsdag');
	let groceryListItem = new GroceryListItem('Banan',12,'Frukt');
	let runtimeErrorOnCategory;

	Given('that I have a shopping list with items', function (callback) {
         // Write code here that turns the phrase above into concrete actions
         assert(groceryList instanceof GroceryList);
         callback();
    });

	Given('the items are categorised', function (callback) {
	     // Write code here that turns the phrase above into concrete actions
	     for(let i=0; i<= groceryList.items.length; i++){
	     	assert(groceryList.items[i] instanceof GroceryListItem);
	     	assert(groceryList.items[i].category!=='');
	     }
	     callback();
	});
	When('I try to sort the items by category name', function (callback) {
         // Write code here that turns the phrase above into concrete actions
         try {
         	groceryList.sortItemsByCategory();
         }
         catch(e){
         	runtimeErrorOnCategory = true;
         }
         callback();
    });
    Then('I should get as a result a list with the items sorted by their category name.', function (callback) {
         // Write code here that turns the phrase above into concrete actions

         callback();
    });

	

});