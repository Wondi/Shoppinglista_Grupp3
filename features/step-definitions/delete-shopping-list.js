let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');
let GroceryListItem = require('../../grocery-list-item.js');
let AppGroceryLists = require('../../app-grocery-lists.js');

defineSupportCode(function({Given, When, Then}) {

	let theList, runtimeErrorOnNolist, groceryList

 	 Given('that I have a saved shopping list', function (callback) {
        theList = new AppGroceryLists('Fredagsmys');
        
         callback();

       });

 		When('I delete the shopping list from database', function (callback) {
         	theList.deleteGroceryList('Fredagsmys');
         callback();
       
       });

 		 Then('that particular shopping list should be deleted from the database', function (callback) {
         
         callback();
       
       });

 		 Then('I should be able to get a confirmation message about it.', function (callback) {
         // Write code here that turns the phrase above into concrete actions
         
         callback();
       
       });
});