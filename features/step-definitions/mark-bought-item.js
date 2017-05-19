let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');
let GroceryListItem = require('../../grocery-list-item.js');
let AppGroceryLists = require('../../app-grocery-lists.js');

defineSupportCode(function({Given, When, Then}) {
    let myList = new GroceryList('Fredagsmys');

     Given('that I have a grocery list of items to buy', function (callback) {
        myList.addToList('Godis',2,'Candy');
        myList.addToList('Chips',3,'Snacks');
        myList.addToList('Läsk',10,'Drinks');
        
        callback();
    });

    When('I buy an item from the list so that I can change the value of it', function (callback) {
        myList.buy('Godis',2,'Candy');
        myList.buy('Läsk',10,'Drinks');
        callback();
   
    });

    Then('I get the item value changed to bought.', function (callback) {
        assert(myList.items[0].bought === true);
        assert(myList.items[2].bought === true);
        callback();

    });
});