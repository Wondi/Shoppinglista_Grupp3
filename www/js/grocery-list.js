// Import GroceryListItem
// so that it can be used in this file
if(typeof module !== 'undefined'){
  GroceryListItem = require('./grocery-list-item');
}

// Export the class GroceryList as a node module
class GroceryList {

  // When a new GroceryList is created
  // set the properties name (from inargument)
  // and items (an empty array)
  constructor(name){
    if(typeof name !== "string" || name === ""){
      throw new Error("A list must have a name that is an non-empty string.");
    }
    this.name = name;
    this.items = [];
    this.totalItems = 0;
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
    this.totalItems++;
  }

  buy(itemName){
    //Mark the item as bought
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

  sortItemsByCategory(){
    let sortedList = []; 
    sortedList = this.items.sort(function(a,b){
      // if category is the same for both items
      // sort after name
      if(a.category === b.category){
        return a.name > b.name ? 1 : -1;
      }
      // sort after category
      return a.category > b.category ? 1 : -1;
    });
    return sortedList;
  }

  sortItemsByName(){
    let sortedList = []; 
    sortedList = this.items.sort(function(a,b){
      // if item name is the same for both items
      // sort after category
      if(a.name === b.name){
        return a.category > b.category ? 1 : -1;
      }
      // sort after name
      return a.name > b.name ? 1 : -1;
    });
    return sortedList;
  } 

  deleteItemFromList(itemName){
    if(typeof itemName !== "string" || itemName === ""){
      throw new Error("An item must have a name that is an non-empty string.");
    }
    for(let item of this.items){
      if(item.name === itemName){
        this.items.splice(this.items.indexOf(item),1);
      }
    }
  }

/*
  showAllItems(){
    let that = this;
    $("#allItems tbody").empty();
    for(let item of this.items ){
      $('#allItems tbody').append(
          '<tr>' +
          '<td>' + item.name + '</td>' +
          '<td>' + item.quantity + '</td>' +
          '<td>' + item.category + '</td>' +
          '<td><button class="btn btn-primary changeStatus">'+ item.bought +'</button></td>' +
          '<td><button class="btn btn-danger deleteItem">Delete</button></td>' +
          '</tr>'
      );
    }
    $('#allItems .deleteItem').click(function(){
      console.log("Delete what item?");
      // remember for this to work after sort
      // stop slicing the sort - resort original!
      let thisTr = $($(this).closest('tr'));
      // what position does the tr have?
      let index = $($('tr').index(thisTr)) - 1;
      console.log(index)
      that.items.splice(index,1);
      that.showAllItems();
    });
    $('#allItems .changeStatus').click(function(){
      console.log("Change status?");
      let thisTr = $(this).closest('tr');
      // what position does the tr have?
      let index = $('tr').index(thisTr) - 1;
      console.log(index)
      if($(this).text() === "Unbought"){
        $(this).text("Bought");
      }
      else if($(this).text() === "Bought"){
        $(this).text("Unbought");
      }      
    });
    $('#allItems .sortByName').click(function(){
      that.sortItemsByName();
      console.log("sorted: ", that.sortItemsByName());
      that.showAllItems();
    });

  }*/ 
  //------- New functions there problem is fixed. Use these as tips, change showAllItems and delete these funcs
  showAllItems(){
    
    this.showTable();

    // Unbind all previous click events on descendents of allItems;
    $('#allItems, #allItems *').unbind('click');

    $('#allItems .listName').html("List: "+ this.name);
   
    let that = this; 

    $('#allItems .sortByName').click(function(){
      that.sortItemsByName();
      that.showTable();
    });

    $('#allItems .sortByCategory').click(function(){
      that.sortItemsByCategory();
      that.showTable();
    });
    
    $('#allItems .onlyBought').click(function(){
      that.showTable(true,false);
    });

    $('#allItems .onlyUnbought').click(function(){
       that.showTable(false,true);
    });

    $('#allItems .originalList').click(function(){
      that.showTable();
    });

    $('#allItems .newItem').click(function(){
      window.location.hash ='#add_item';
    });

    $('#allItems').on('click','.deleteItem',function(){
      let tr = $(this).closest('tr');
      let index = tr.attr('item-index')/1;
      that.items.splice(index,1);
      that.showTable();
    }); 

    $('#allItems').on('click','.changeStatus',function(){
      let tr = $(this).closest('tr');
      let index = tr.attr('item-index')/1;
      that.items[index].bought = $(this).text() !== 'Bought';
      that.showTable();
    });


    /*$('#allItems .changeStatus').click(function(){
      let thisTr = $(this).closest('tr');
      let index = $('tr').index(thisTr) - 1;
      console.log("index", index);
      let indexListArray = index -1;
      let currentText;
      
      $("#allItems tbody tr td").click(function() {
          currentText = $(this).text();
          if(currentText === "Unbought"){
            $(this).text("Bought");
            console.log("object",that.items[0]);
            console.log("index i lista",indexListArray);
            console.log("real object",that.items[indexListArray]);
            console.log("real object värde",that.items[indexListArray].bought);
            //setTimeout(function(){ alert("Hello"); }, 1000);
            that.items[indexListArray].bought = true;
            console.log("real object changed värde",that.items[indexListArray].bought);

          }
          else if(currentText === "Bought"){
            $(this).text("Unbought");
          //  item.bought=false;
            console.log("object",that.items[1]);
            console.log("index i lista",indexListArray);
            console.log("real object",that.items[indexListArray]);
            console.log("real object värde",that.items[indexListArray].bought);
            that.items[indexListArray].bought = false;
            console.log("real object changed värde",that.items[indexListArray].bought);

          }
      });
      console.log("the current text",currentText);
    });  */   

  }
  
  showTable(bought = true, unbought = true) {
    $("#allItems tbody").empty();
    for(let i = 0; i < this.items.length; i++){
      let item = this.items[i];
      if(item.bought && !bought){continue;}
      if(!item.bought && !unbought){continue;}
      $('#allItems tbody').append(
          '<tr item-index="' + i + '">' +
          '<td>' + item.name + '</td>' +
          '<td>' + item.quantity + '</td>' +
          '<td>' + item.category + '</td>' +
          '<td><button class="btn btn-primary changeStatus">'+ item.boughtText +'</button></td>' +
          '<td><button class="btn btn-danger deleteItem">Delete</button></td>' +
          '</tr>'
      );
    }
  }


  //----------------------------------------------------------------------------
}
if(typeof module !== 'undefined'){
  module.exports = GroceryList;
}


