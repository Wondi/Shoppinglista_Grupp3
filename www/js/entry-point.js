window.my_collection = new AppGroceryLists();

/*
function activeList(){
	$(".listNamePanel").html(listName_val);	
}
*/
$(function(){
	// This function will run when the DOM (the HTML) has been built
	$('#create_new_shopping_list').on('click','.createBtn',function(){
		if ($('#list_name').val() !== ""){
			window.listName_val = $('#list_name').val(); 
			let gr_l = new GroceryList(listName_val); 
			my_collection.addGroceryList(gr_l);
			$(".listNamePanel").html(listName_val)
			//$(".itemList_name").html(listName_val)
			$('#list_name').val('');
			console.log("my_collection.groceryLists", my_collection.groceryLists);
			my_collection.viewAllLists();
		}
		else{
			alert("Du måste ange list name");
			return false;
		}
	});

	$('#add_item').on('click', '.addItem-btn', function(){	
		let listName = $("#listNameP").text();

		console.log('listName 1 = ', listName);

		let item_name = $("#item_name").val();
		let quantity = $("#quantity").val()/1;
		let category = $("#category").val();
		let index = my_collection.indexByName(listName);
		//my_collection.groceryLists[index].addToList(item_name,quantity,category);
		try {
			my_collection.groceryLists[index].addToList(item_name,quantity,category);
		}
		catch(e){
			e += ""; // to string
			if(e.indexOf("name that is an non-empty string")>=0){
				e = "Du måste ange item namn!";
			}
		 	else if (e.indexOf("a quantity that is a number greater than 0")>=0){
		 		e = "Du måste ange kvantitet med en siffra större än 0!";
		 	}
			alert(e);
		}

		/*if(item_name!== "" && quantity !== "" ){
			let index = my_collection.indexByName(listName);
			console.log("listName = ", listName, "index = ", index, "item_name = ", $(item_name).val(),
						 "quantity = ", $(quantity).val(), "category = ", $(category).val() );
			//my_collection.groceryLists[index].addToList($(item_name).val(), Number($(quantity).val()), $(category).val());
			my_collection.groceryLists[index].addToList(item_name, Number(quantity), $(category).val());
		}*/

		$("#item_name").val('');
		$("#quantity").val('');
		console.log("my_collection.groceryLists 2 :", my_collection.groceryLists);
		my_collection.viewAllLists();

	});


	$('#add_item').on('click',	'.view_list-btn', function(){
		let listName = $("#listNameP").text();
		if(listName !== "" ){
			let index = my_collection.indexByName(listName);
			my_collection.groceryLists[index].showAllItems();

		}
	});

	$('#all_list').on('click',	function(){
		console.log("Hej hej hej, we are in all_list");
		my_collection.viewAllLists();

	});


})



