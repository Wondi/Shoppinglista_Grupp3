let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');
let GroceryListItem = require('../../grocery-list-item.js');

defineSupportCode(function({Given, When, Then}) {
	let groceryList;
	
	let dgroceryList;

	Given('that I have an shopping list in which some items are marked as unbought', function (callback) {
         // Write code here that turns the phrase above into concrete actions
         groceryList = new GroceryList('Tisdag');
		 groceryList.addToList('Banan',10,"frukt");
		 groceryList.addToList('Fläsksvål',1,"kött");
		 groceryList.addToList('Äpple',3,"frukt");
		 groceryList.addToList('Oxfile',7,"kött");
		 groceryList.addToList('Fläskfile',5,"kött");
		 groceryList.buy('Fläsksvål');
		 groceryList.buy('Fläskfile');
         callback();
    });

    When('I try to remove an item that is marked as unbought from the list', function (callback) {
         // Write code here that turns the phrase above into concrete actions
         for(let item of groceryList.items){
         	if (item.name === 'Banan' && item.bought === false){
         		groceryList.deleteItemFromList('Banan');
         	}         	
         }
         
         dgroceryList = groceryList;
         callback();
    });

    Then('I should have a list without the removed item.', function (callback) {
         // Write code here that turns the phrase above into concrete actions
         
         for(let item of dgroceryList.items){
         	assert(item.name !== 'Banan');
         }
         callback();
    });




});