let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');
let GroceryListItem = require('../../grocery-list-item.js');

defineSupportCode(function({Given, When, Then}) {
	let groceryList;
	let unboughtList;

	Given('that I have a shopping list with items where some of them are marked as unbought', function (callback) {
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
		 groceryList.items[3].bought = false;
		 groceryList.items[4].bought = false;
         callback();
    });

    When('I try to see only the items that are marked as unbought', function (callback) {
         // Write code here that turns the phrase above into concrete actions
         unboughtList = groceryList.unboughtItems();  
         callback();
    });

    Then('I should get a list with only the items that I haven’t bought.', function (callback) {
         // Write code here that turns the phrase above into concrete actions
         assert(unboughtList.length === 3);         
         assert(unboughtList[0].name === 'Fläsksvål');
         assert(unboughtList[1].name === 'Oxfile');
         assert(unboughtList[2].name === 'Fläskfile');   
         callback();
    });

});