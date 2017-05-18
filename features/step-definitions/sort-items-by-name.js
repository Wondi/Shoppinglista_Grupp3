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
     groceryList.addToList('Banan',10,"frukt");
     groceryList.addToList('Fläsksvål',10,"kött");
     groceryList.addToList('Äpple',10,"frukt");
     groceryList.addToList('Oxsvans',10,"kött");
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
         //Generic solution for long lists
         let foundNames = [];
         for(item of sortedList){
            if(foundNames.indexOf(item.name)<0){
                // first time we see this name
                foundNames.push(item.name);
            }
            else if(foundNames[foundNames.length-1] !== item.name){
                // not sorted since a name repeats after we have
                // seen another one
                assert(false);
            }
         }
         callback();
    });
});