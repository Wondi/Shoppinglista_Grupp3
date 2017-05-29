let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');
let GroceryListItem = require('../../grocery-list-item.js');
let AppGroceryLists = require('../../app-grocery-lists.js');

defineSupportCode(function({Given, When, Then}) {

	let theList, runtimeErrorOnNolist, groceryListDeleted

 	 Given('that I have a saved shopping list', function (callback) {
        theList = new AppGroceryLists();
        list= new GroceryList("Fredagsmys")
        theList.addGroceryList(list);
        
         callback();

       });

 		When('I delete the shopping list from list of all shopping-lists', function (callback) {
         	theList.deleteGroceryList(list);
         callback();
       
       });

 		 Then('that particular shopping list should be deleted from list of all shopping-lists.', function (callback) {
         assert(theList.groceryLists.length === 0);
         callback();
       });
});