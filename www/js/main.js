// Test showAll

let l = new GroceryList("Hepp");

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
  console.log("lista", l.unboughtItems());
})
