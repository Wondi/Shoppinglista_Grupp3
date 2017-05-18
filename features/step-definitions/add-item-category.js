let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');
let GroceryListItem = require('../../grocery-list-item.js');

defineSupportCode(function({Given, When, Then}) {
	let theList, runtimeErrorOnNoCategory;
  
    Given('that I have en empty list and I want to add an item without a category in the empty grocery list', function (callback) {
        theList = new GroceryList('Fredags middag');
        runtimeErrorOnNoCategory = false;
        callback();
    });

 	When('I try to add an item without a category to an empty grocery list', function (callback) {
           try {
         	theList.addToList('Taco');
         }
         catch(e){
         	runtimeErrorOnNoCategory = true;
         }
         callback();
    });

	Then('I should get a runtime error so I can\'t add item without category.', function (callback) {
        assert(runtimeErrorOnNoCategory);
        callback();
    });

});