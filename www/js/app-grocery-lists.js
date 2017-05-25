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
	viewAllLists(){
		 let that = this;
		    $("#allLists tbody").empty();
		    for(let list of this.groceryLists){
		      $('#allLists tbody').append(
		          '<tr>' +
		          '<td>' + list.name + '</td>' +
		          '<td><button class="btn btn-danger deleteList">Delete</button></td>' +
		          '</tr>'
		      );
		    }
		    $('#allLists .deleteList').click(function(){
		      console.log("Delete what item?");
		      // remember for this to work after sort
		      // stop slicing the sort - resort original!
		      let thisTr = $(this).closest('tr');
		      // what position does the tr have?
		      let index = $('tr').index(thisTr) - 1;
		      console.log(index)
		      that.groceryLists.splice(index,1);
		      that.viewAllLists();
		    });
		
	}
}

if(typeof module !== 'undefined'){
  module.exports = AppGroceryLists;
}
