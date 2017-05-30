module.exports = function () {

	this.Given(/^that I have a shopping list with items$/, async function() {
		await helpers.loadPage("http://localhost:3000/#create_new_shopping_list");
  		await driver.findElement(by.css("#list_name")).sendKeys("My list");
		await driver.findElement(by.css(".createBtn")).click();
		await driver.findElement(by.css("#item_name")).sendKeys("Kakor");
		await driver.findElement(by.css("#quantity")).sendKeys(2);
		await driver.findElement(by.css("#category")).sendKeys("Bageri");
		await driver.findElement(by.css(".addItem-btn")).click();
		await driver.findElement(by.css("#item_name")).sendKeys("Bananer");
		await driver.findElement(by.css("#quantity")).sendKeys(10);
		await driver.findElement(by.css("#category")).sendKeys("Frukt och Grönt");
		await driver.findElement(by.css(".addItem-btn")).click();
		await driver.findElement(by.css("#item_name")).sendKeys("Fläskfile");
		await driver.findElement(by.css("#quantity")).sendKeys(2);
		await driver.findElement(by.css("#category")).sendKeys("Kött och Chark");
		await driver.findElement(by.css(".addItem-btn")).click();
		await driver.findElement(by.css("#item_name")).sendKeys("Bröd");
		await driver.findElement(by.css("#quantity")).sendKeys(2);
		await driver.findElement(by.css("#category")).sendKeys("Bageri");
		await driver.findElement(by.css(".addItem-btn")).click();
	});

	this.When(/^I try to sort the items by category name$/, async function() {
  		await driver.findElement(by.css(".view_list-btn")).click();
  		await driver.findElement(by.css(".sortByCategory")).click();
	});

	this.Then(/^I should get as a result a list with the items sorted by their category name.$/, async function() {
  		let categoryTds = await driver.findElements(by.css('.table_items table tr td:nth-child(3)'));
  		let found = false;
  		let foundCats = [];
		for(let td of categoryTds){
			let text = await td.getText();
			// add found category from the app to our array
			// if not in it already
			if(foundCats.indexOf(text)<0){
				foundCats.push(text);
			}
			else {
				// exists already - fail if not last
				// (then not sorted)
				if(foundCats.indexOf(text) != foundCats.length-1){
					assert(false,"Not sorted by category.");
				}
			}
		}
		// extra test should be sorted alphabetically
		if(foundCats.slice().sort().join(',') !== foundCats.join(',')){
			assert(false,"Not sorted alphabetically by category");
		}
	});



}