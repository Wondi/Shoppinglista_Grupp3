module.exports = function () {

	this.Given(/^that I have a grocery list with items$/, async function() {
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
		await driver.findElement(by.css(".view_list-btn")).click();		
	});

	this.When(/^I try to change the status to bought of an item$/, async function() {
  		await driver.findElement(by.css('.table_items tr:nth-child(2) .changeStatus')).click();
  		await driver.sleep(4000);
	});

	this.Then(/^I should get the item status changed to bought.$/, async function() {
  		let boughtTds = await driver.findElements(by.css('.table_items table tr td:nth-child(4)'));
  		let item = boughtTds[1];
  		let text = await item.getText();
  		console.log("txt", text);
  		assert(text === "Bought","The status of the item has not changed.");
	});




}