class GroceryListItem {

  constructor(name, quantity, category){
     if(typeof name !== "string" || name === ""){
      throw new Error("A list item must have a name that is an non-empty string.");
    }
    if(typeof quantity !== "number" || quantity === "" || quantity < 0 ){
      throw new Error("A list item must have a quantity that is a number greater than or equal to 0 .");
    }
    if(typeof category !== "string" || category === ""){
      throw new Error("A list item must have a category that is an non-empty string.");
    }

    this.name = name;
    this.quantity = quantity;
    this.category = category;
    this.bought = false;
   
  }

}

if(typeof module !== 'undefined'){
  module.exports = GroceryListItem;
}
