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
    //slice() keeps the original list the same without 
    //changing the order of the items
    sortedList = this.items.slice().sort(function(a,b){
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
    //slice() keeps the original list the same without 
    //changing the order of the items
    sortedList = this.items.slice().sort(function(a,b){
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
  showAllItems_my(that){
    console.log(that.name);
    
    that.showTable(that.items);
    $('#allItems .listName').html("List: "+ that.name);
    $('#allItems .sortByName').click(function(){
     // this = that;
      console.log("sorted: ", that.sortItemsByName());
      that.showTable(that.sortItemsByName());
    });
    $('#allItems .sortByCategory').click(function(){
     // this = that;
      console.log("sorted: ", that.sortItemsByCategory());
      that.showTable(that.sortItemsByCategory());
    });
    $('#allItems .onlyBought').click(function(){
     // this = that;
      console.log("filtered: ", that.boughtItems());
      that.showTable(that.boughtItems());
    });
    $('#allItems .onlyUnbought').click(function(){
     // this = that;
      console.log("filtered: ", that.unboughtItems());
      that.showTable(that.unboughtItems());
    });
    $('#allItems .originalList').click(function(){
     // this = that;
      console.log("filtered: ");
      that.showAllItems_my(that);
    });
    $('#allItems .newItem').click(function(){
      window.location.href='#add_item';
    });
    //--------------------
    $('#allItems .deleteItem').click(function(){
      console.log("Delete what item?");
      // remember for this to work after sort
      // stop slicing the sort - resort original!
      let thisTr = $($(this).closest('tr'));
      // what position does the tr have?
      let index = $($('tr').index(thisTr)) - 1;
      console.log(index)
      that.items.splice(index,1);
      that.showTable(that.items);
    });
    $('#allItems .changeStatus').click(function(){
      let thisTr = $($(this).closest('tr'));
      let index = $($('tr').index(thisTr)) - 1;
      let indexListArray = index -1;
      let currentText;
      let item=that.items[indexListArray];
      $("#allItems tbody tr td").each(function() {
          currentText = $(this).text();
          if(currentText === "Unbought"){
            $(this).text("Bought");
            item.bought=true;
          }
          else if(currentText === "Bought"){
            $(this).text("Unbought");
            item.bought=false;
          }
      });
      console.log("the current text",currentText);
    });     

  }
  
  showTable(tblItems) {
    $("#allItems tbody").empty();
    for(let item of tblItems){
      $('#allItems tbody').append(
          '<tr>' +
          '<td>' + item.name + '</td>' +
          '<td>' + item.quantity + '</td>' +
          '<td>' + item.category + '</td>' +
          '<td><button class="btn btn-primary changeStatus">'+ item.showText() +'</button></td>' +
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


