let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');
let GroceryListItem = require('../../grocery-list-item.js');

defineSupportCode(function({Given, When, Then}) {
    let groceryList;
    let sortedList;

    Given('that I have a shopping list with named items', function (callback) {
     // Write code here that turns the phrase above into concrete actions
     groceryList = new GroceryList('Torsdag');
     groceryList.addToList('Banan',5,"frukt");
     groceryList.addToList('Fläsksvål',3,"kött");
     groceryList.addToList('Persika',10,"frukt");
     groceryList.addToList('Oxsvans',1,"kött");
     callback();
    });

    When('I try to sort the items by name', function (callback) {
     // Write code here that turns the phrase above into concrete actions
     sortedList = groceryList.sortItemsByName();
     callback();
    });

    Then('I should be able to get a list with the items sorted by their name.', function (callback) {
     // Write code here that turns the phrase above into concrete actions
         assert(sortedList.length === groceryList.items.length);

         assert(sortedList[0].name === 'Banan');
         assert(sortedList[1].name === 'Fläsksvål');
         assert(sortedList[2].name === 'Oxsvans');
         assert(sortedList[3].name === 'Persika');
         
         callback();
    });
});