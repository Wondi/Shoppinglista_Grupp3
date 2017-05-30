window.my_collection = new AppGroceryLists();

/*
function activeList(){
	$(".listNamePanel").html(listName_val);	
}
*/
function check(inputval){
	let v = /^[0-9]+$/;
	if (inputval.value.matches(v)){
		return true;
	else{
		alert("Du måste ange quantity med en siffra!");
		return false;
	}
	}
}
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
		let item_name = $('#item_name').val();
		let quantity = $('#quantity').val();
		let value = /^[0-9]+$/;

		if(item_name === "" ){
			console.log("item_name: ", item_name);
  			alert("Du måste ange item name");
  			return false;
		}

		if(quantity === "" || quantity !== value){
			console.log("Quantity: ", quantity);
  			alert("Du måste ange quantity med en siffra!"); 
  			return false;  			
		}


		
		if($(item_name).val() !== "" && $(quantity).val() !== "" ){
			let index = my_collection.indexByName(listName);

			console.log("listName = ", listName, "index = ", index, "item_name = ", $(item_name).val(),
						 "quantity = ", $(quantity).val(), "category = ", $(category).val() );
			//my_collection.groceryLists[index].addToList($(item_name).val(), Number($(quantity).val()), $(category).val());
			my_collection.groceryLists[index].addToList(item_name, Number(quantity), $(category).val());
		}

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



