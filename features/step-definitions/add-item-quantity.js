let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');
let GroceryListItem = require('../../grocery-list-item.js');

defineSupportCode(function({Given, When, Then}) {

	let theList, runtimeErrorOnNoQuantity;

 Given('that I want to add an item without quantity to an empty grocery list', function (callback) {
         theList = new GroceryList('Tuesday');
         runtimeErrorOnNoQuantity = false;
         callback();
       });

 When('I try to add an item without a quantity to an empty grocery list', function (callback) {
         try {
         	theList.addToList('Banana');
         }
         catch(e){
         	runtimeErrorOnNoQuantity = true;
         }
         callback();
       });

 Then('I should get a runtime message.', function (callback) {
         assert(runtimeErrorOnNoQuantity);
         callback();
       });


});