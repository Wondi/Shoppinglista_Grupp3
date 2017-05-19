let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');
let GroceryListItem = require('../../grocery-list-item.js');

defineSupportCode(function({Given, When, Then}) {
	let groceryList;
	let sortedList;

	Given('that I have a shopping list with items', function (callback) {
		groceryList = new GroceryList('Torsdag');
		groceryList.addToList('Banan',10,"frukt");
		groceryList.addToList('Fläsksvål',10,"kött");
		groceryList.addToList('Äpple',10,"frukt");
		groceryList.addToList('Oxsvans',10,"kött");
        callback();
    });

	Given('the items are categorised', function (callback) {
	    // Already made sure of that
	    callback();
	});
	When('I try to sort the items by category name', function (callback) {
         // Write code here that turns the phrase above into concrete actions
         sortedList = groceryList.sortItemsByCategory();
         callback();
    });
    Then('I should get as a result a list with the items sorted by their category name.', function (callback) {
         // Now check if sorted list have all items sorted by category
         assert(sortedList.length === groceryList.items.length);
         
         /*assert(sortedList[0].category === 'frukt');
         assert(sortedList[1].category === 'frukt');
         assert(sortedList[2].category === 'kött');
         assert(sortedList[3].category === 'kött');*/

         //Generic solution for long lists
         let foundCategories = [];
         for(item of sortedList){
         	if(foundCategories.indexOf(item.category)<0){
         		// first time we see this category
         		foundCategories.push(item.category);
         	}
         	else if(foundCategories[foundCategories.length-1] !== item.category){
         		// not sorted since a category repeats after we have
         		// seen another one
         		assert(false);
         	}
         }
         callback();
    });

	

});