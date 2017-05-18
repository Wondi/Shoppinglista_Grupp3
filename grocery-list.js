// Import GroceryListItem
// so that it can be used in this file
let GroceryListItem = require('./grocery-list-item');

// Export the class GroceryList as a node module
module.exports = class GroceryList {

  // When a new GroceryList is created
  // set the properties name (from inargument)
  // and items (an empty array)
  constructor(name){
    if(typeof name !== "string" || name === ""){
      throw new Error("A list must have a name that is an non-empty string.");
    }
    this.name = name;
    this.items = [];
  }

  addToList(itemName,itemQantity, itemCategory){
    if(typeof itemName !== "string" || itemName === ""){
      throw new Error("An item must have a name that is an non-empty string.");
    }
    if(typeof itemQantity !== "number" || itemQantity === "" || itemQantity < 0 ){
      throw new Error("A list item must have a quantity that is a number greater than or equal to 0 .");
    }
    if(typeof itemCategory !== "string" || itemCategory === ""){
      throw new Error("A list item must have a category that is an non-empty string.");
    }
    
    this.items.push(new GroceryListItem(itemName, itemQantity, itemCategory));
  }

  buy(itemName){
    if(typeof itemName !== "string" || itemName === ""){
      throw new Error("An item must have a name that is an non-empty string.");
    }
    for(let item of this.items){
      if(item.name === itemName){
        item.bought = true;
      }
    }
  }

  boughtItems(...args){
    if(args.length > 0){
      throw new Error("Do not send an in-arguments to boughtItems.");
    }
    let bought = [];
    for(let item of this.items){
      if(item.bought === true){
        bought.push(item);
      }
    }
    return bought;
  }

  unboughtItems(...args){
    if(args.length > 0){
      throw new Error("Do not send an in-arguments to unboughtItems.");
    }
    let unbought = [];
    for(let item of this.items){
      if(item.bought === false){
        unbought.push(item);
      }
    }
    return unbought;
  }

  sortItems(){
    let sorted = [];
  }
}