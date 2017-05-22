// Import GroceryList
// so that it can be used in this file
let GroceryList = require('./grocery-list.js');

// Export the class GroceryList as a node module
class AppGroceryLists {

	constructor(){
		this.groceryLists = [];
	}

	addGroceryList(listName){
		if (listName instanceof GroceryList){
			this.groceryLists.push(listName);
		}
		return this.groceryLists;
	}

	deleteGroceryList(listName){
		if (listName instanceof GroceryList){
			this.groceryLists.pop(listName);
		}
		return this.groceryLists;
	}

}

if(typeof module !== 'undefined'){
  module.exports = AppGroceryLists;
}
