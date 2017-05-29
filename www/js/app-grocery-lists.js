// Import GroceryList
// so that it can be used in this file
if(typeof module !== 'undefined'){
  GroceryList = require('./grocery-list.js');
}

// Export the class GroceryList as a node module
class AppGroceryLists {

	constructor(){
		this.groceryLists = [];
	}

	addGroceryList(groceryList){
		if (groceryList instanceof GroceryList && this.indexByName(groceryList.name) == -1){
			this.groceryLists.push(groceryList);
		}
		else{
			throw new Error("Invalid grocery list: you try to add the list with the same name as already exist or you try to add non- GroceryList");
		}
		return this.groceryLists;
	}

	deleteGroceryList(groceryList){
		if (groceryList instanceof GroceryList){
			this.groceryLists.pop(groceryList);
		}
		return this.groceryLists;
	}

	//function returns the index of list with name listName in the groceryLists array
	indexByName(listName){
		console.log("indexby name: listName = ", listName);
		for(let item in this.groceryLists){
			if (this.groceryLists[item].name === listName){
				return item;
			}
		}
		return -1;
	}
	
	viewAllLists(that){
	    that.showTable(that.groceryLists);
		   
		$('#all_list .deleteList').click(function(){
		console.log("Delete what item?");
		let thisTr = $(this).closest('tr');
		// what position does the tr have?
		let index = $('tr').index(thisTr) - 1;
		console.log("index for deleting", index);
		that.groceryLists.splice(index,1);
		that.viewAllLists(that);
		});

	}

  	showTable(tblLists) {
    	$("#all_list tbody").empty();
    	let counter = 1;
    	for(let list of tblLists){

     	 $('#all_list tbody').append(
	          '<tr>' +
	          '<td>' + counter + '</td>' +
	          '<td>' + list.name + '</td>' +
	          '<td>' + list.totalItems + '</td>' +
	          '<td>' + list.boughtItems().length + '</td>' +
	          '<td><button class="btn btn-danger deleteList">Delete</button></td>' +
	          '</tr>'
      		);
     	 counter++;
    	}
    }
}


if(typeof module !== 'undefined'){
  module.exports = AppGroceryLists;
}
