let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');
let GroceryListItem = require('../../grocery-list-item.js');

defineSupportCode(function({Given, When, Then}) {
	let groceryList;
	let boughtList;

	Given('that I have a shopping list with items that are marked as bought or unbought', function (callback) {
     // Write code here that turns the phrase above into concrete actions
        groceryList = new GroceryList('Torsdag');
		groceryList.addToList('Banan',10,"frukt");
		groceryList.addToList('Fläsksvål',10,"kött");
		groceryList.addToList('Äpple',10,"frukt");
		groceryList.addToList('Oxfile',10,"kött");
		groceryList.addToList('Fläskfile',5,"kött");
		groceryList.items[0].bought = true;
		groceryList.items[1].bought = false;
		groceryList.items[2].bought = true;
		groceryList.items[3].bought = true;
		groceryList.items[4].bought = false;
     
        callback();
	});

	When('I try to see only the items that are marked as bought', function (callback) {
        // Write code here that turns the phrase above into concrete actions
     	boughtList = groceryList.boughtItems();    
        callback();
	});

	Then('I should get a list with only the items that I have bought.', function (callback) {
     // Write code here that turns the phrase above into concrete actions
     assert(boughtList.length === 3);         
     assert(boughtList[0].name === 'Banan');
     assert(boughtList[1].name === 'Äpple');
     assert(boughtList[2].name === 'Oxfile');       
         
     callback();
	});

});