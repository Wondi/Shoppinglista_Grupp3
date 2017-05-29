// Test showAll

let l = new GroceryList("Hepp");
let l2 = new GroceryList("Måndag");
let l3 = new GroceryList("tisdag");
let l4 = new GroceryList("fredag");
let myLists = new AppGroceryLists;
myLists.addGroceryList(l);
myLists.addGroceryList(l2);
myLists.addGroceryList(l3);
myLists.addGroceryList(l4);

l.addToList("Bananer",2,"frukt");
console.log("agorasmeno",l.items[0].bought);
l.addToList("Äpplen",3,"frukt");
l.addToList("Morötter",10,"grönsaker");
l.addToList("File", 5, "kött");
l.buy("Äpplen");
//wait for DOM
$(function(){
  l.showAllItems();
  l.showAllItems();
  myLists.viewAllLists();
})

