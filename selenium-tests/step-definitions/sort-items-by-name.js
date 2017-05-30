module.exports = function () {

	this.Given(/^that I have a shopping list with named items$/, async function() {
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

	this.When(/^I try to sort the items by name$/, async function() {
  		await driver.findElement(by.css(".view_list-btn")).click();
  		await driver.findElement(by.css(".sortByName")).click();
  		await driver.sleep(5000);
	});

	this.Then(/^I should be able to get a list with the items sorted by their name.$/, async function() {
  		let nameTds = await driver.findElements(by.css('.table_items table tr td:nth-child(1)'));
  		let foundNames = [];
		for(let td of nameTds){
			let text = await td.getText();
			// add found name from the app to our array
			// if not in it already
			if(foundNames.indexOf(text)<0){
				foundNames.push(text);
			}
			else {
				// exists already - fail if not last
				// (then not sorted)
				if(foundNames.indexOf(text) != foundNames.length-1){
					assert(false,"Not sorted by name.");
				}
			}
		}
		// extra test: should be sorted alphabetically
		if(foundNames.slice().sort().join(',') !== foundNames.join(',')){
			assert(false,"Not sorted alphabetically by name");
		}
	});




}