/// Wait for the HTML to load - DOM ready
// before adding a click event to our button
$(addStartEvent);

// Ask jQuery to call the function
// readContactForm when the user clicks
// on something with the class start-btn
function addStartEvent(){
 // $('.create-btn').click(readContactForm);
  $(startCollection);  
}

let my_collection = new AppGroceryLists();


function readContactForm(){
//	console.log("READ = ", $('#list_name').val());
	if ($('#list_name').val() !== ""){
		let gr_l = new GroceryList($('#list_name').val()); 
		my_collection.addGroceryList(gr_l);
	}
	console.log("my_collection.groceryLists", my_collection.groceryLists);
}


function startCollection(){
	
}