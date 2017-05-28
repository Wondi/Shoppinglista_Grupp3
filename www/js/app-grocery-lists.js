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
		/*    
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
		    }); */
		
	}

 //----------------------------------------------------------------------------

  	showTable(tblLists) {
    	$("#all_list tbody").empty();
    	let counter = 1;
    	for(let list of tblLists){

     	 $('#all_list tbody').append(
	          '<tr>' +
	          '<td>' + counter + '</td>' +
	          '<td>' + list.name + '</td>' +
	          '<td>' + list.totalItems + '</td>' +
	          '<td>' + list.boughtItems().lenght + '</td>' +
	          '<td><button class="btn btn-danger deleteItem">Delete</button></td>' +
	          '</tr>'
      		);
     	 counter++;
    	}
    }
  //----------------------------------------------------------------------------
}


if(typeof module !== 'undefined'){
  module.exports = AppGroceryLists;
}
