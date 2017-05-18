let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');
let GroceryListItem = require('../../grocery-list-item.js');

defineSupportCode(function({Given, When, Then}) {

	let theList, runtimeErrorOnNoName, runtimeErrorOnNoQuantity, runtimeErrorOnNoCategory;

	Given('that I have an empty grocery list', function (callback) {
		theList = new GroceryList('Frukt');
		runtimeErrorOnNoName = false;
	    callback();
	 });

	When('I try to add an item without a name', function (callback) {
         try {
         	theList.addToList();
         }
         catch(e){
         	runtimeErrorOnNoName = true;
         }
         callback();
       });

	Then('I shouldd get a runtime error.', function (callback) {
         assert(runtimeErrorOnNoName);
         callback();
       });

	When('I try to add an item without a quantity', function (callback) {
      	try{
			theList.addToList('Orange');
      	}
      	catch(e){
      		runtimeErrorOnNoQuantity = true;

      	}
        callback();
    });

	Then('I should get a runtime error.', function (callback) {
         assert(runtimeErrorOnNoQuantity);
         callback();
       });
	
    When('I try to add an item without a category', function (callback) {
    	 try {
         	theList.addToList('Orange', 5, "");
         }
         catch(e){
         	runtimeErrorOnNoCategory = true;
         }    
         callback();
       });

	Then('I should get a runtime error', function (callback) {
		assert(runtimeErrorOnNoCategory);
        callback();
       });

    When('I add {int} item to the list', function (int, callback) {
  		for (let i = 0; i < int; i++) {
  			theList.addToList('Banan'+ i, 6, 'Frukt');
  		}
  		
		callback();
	});

	Then('I should have {int} item in my grocery list.', function (int, callback) {
		assert(theList.items.length === int);
		callback();
	});

	Then('the item should be a grocery list items.', function (callback) {
		for (let item  of theList.items) {
	 		assert(theList.items[0] instanceof GroceryListItem);
		}
 	    callback();
    });


});
