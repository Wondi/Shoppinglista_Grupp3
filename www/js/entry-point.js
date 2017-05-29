/// Wait for the HTML to load - DOM ready
// before adding a click event to our button
$(addStartEvent);

// Ask jQuery to call the function
// readContactForm when the user clicks
// on something with the class start-btn
function addStartEvent(){
 // $('.create-btn').click(readListNameCallback);
  $(startCollection);  
}

window.my_collection = new AppGroceryLists();

function activeList(){
	$(".listNamePanel").html(listName_val);	
}

function readListNameCallback(){
	if ($('#list_name').val() !== ""){
		window.listName_val = $('#list_name').val(); 
		let gr_l = new GroceryList(listName_val); 
		my_collection.addGroceryList(gr_l);
		$(".listNamePanel").html(listName_val)
	}
	console.log("my_collection.groceryLists", my_collection.groceryLists);
	my_collection.viewAllLists();
}

function addItemCallback(){
	let listName = $("#listNameP").text();
	console.log('listName 1 = ', listName);
	if($(item_name).val() !== "" && $(quantity).val() !== "" ){
		let index = my_collection.indexByName(listName);
		console.log("listName = ", listName, "index = ", index, "item_name = ", $(item_name).val(),
					 "quantity = ", $(quantity).val(), "category = ", $(category).val() );
		my_collection.groceryLists[index].addToList($(item_name).val(), Number($(quantity).val()), $(category).val());
	}
	console.log("my_collection.groceryLists 2 :", my_collection.groceryLists);
	my_collection.viewAllLists();
}
function viewAllItemsCallback(){
	let listName = $("#listNameP").text();
	if(listName !== "" ){
		let index = my_collection.indexByName(listName);
		my_collection.groceryLists[index].showAllItems();
	}
}

function viewAllListsCallback()
{

}
function startCollection(){
	
}