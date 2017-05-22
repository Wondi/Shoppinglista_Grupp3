let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');
let GroceryListItem = require('../../grocery-list-item.js');

defineSupportCode(function({Given, When, Then}) {

     let myList = new GroceryList('Fredagsmys');

    Given('that I have a shopping list of items to buy', function (callback) {
        myList.addToList('Godis',2,'Candy');
        myList.addToList('Chips',3,'Snacks');
        myList.addToList('Läsk',10,'Drinks');
        callback();
    });

    Given('the items on the list are marked as unbought from the start', function (callback) {
        myList.items[0].bought === false;
        myList.items[1].bought === false;
        myList.items[2].bought === false;
        callback();
    });    

    When('I buy an item from the list', function (callback) {
        myList.buy('Godis',2,'Candy');
        myList.buy('Läsk',10,'Drinks');
        callback();
    }); 

    Then('I should be able to mark that item as bought and the remaining items as unbought.', function (callback) {
        myList.items[0].bought === true;
        myList.items[1].bought === false;
        myList.items[2].bought === true;
        callback();
        });       
});