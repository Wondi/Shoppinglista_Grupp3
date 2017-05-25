// Test showAll

let l = new GroceryList("Hepp");

l.addToList("Bananer",2,"frukt");
l.addToList("Äpplen",3,"frukt");
l.addToList("Morötter",10,"grönsaker");
l.addToList("File", 5, "Kött");
l.buy("Äpplen");
//wait for DOM
$(function(){
  l.showAllItems_my();
})
