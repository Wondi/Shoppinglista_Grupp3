let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');
let GroceryListItem = require('../../grocery-list-item.js');

defineSupportCode(function({Given, When, Then}) {
	let myList, myListLength, boughtItemsList;
	Given('that I have a shopping list with items that are marked as bought', function (callback) {
        myList = new GroceryList('My fredags shopping-list');
        myList.addToList('Taco chips', 5, 'Övrigt');
        myList.addToList('Köttfärs', 1, 'Kött');
        myList.addToList('Avokado', 2, 'Grönsaker');
        myList.addToList('Öl', 2, 'Drinks');
        myList.addToList('Paprika', 2, 'Grönsaker');
        myListLength = myList.items.length;
        myList.buy('Öl');
        myList.buy('Avokado');
        boughtItemsList = myList.boughtItems();
        callback();
       });

	When('I try to remove an item that is marked as bought from the list', function (callback) {
		myList.deleteItemFromList('Öl');
        myList.deleteItemFromList('Avokado');        	
		callback();
       });

	Then('I should have a list without the removed item.', function (callback) {
		console.warn("myList.items.length = ", myList.items.length);
		console.warn("boughtItemsList.length = ", boughtItemsList.length);
        assert(myList.items.length === (myListLength - boughtItemsList.length));

        for (let item of myList.items){
        	for (let itemBought of boughtItemsList){
        		console.warn('item.name = ', item.name, '   itemBought.name = ', itemBought.name);
        		assert(item.name != itemBought.name);
           	}
        }
       callback();
       });

});