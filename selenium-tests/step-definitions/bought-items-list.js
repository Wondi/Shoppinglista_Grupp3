module.exports = function () {

	this.Given(/^that I have a shopping list with items that are marked as bought or unbought$/, async function() {
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

		await driver.findElement(by.css('.table_items tr:nth-child(2) .changeStatus')).click();
		await driver.findElement(by.css('.table_items tr:nth-child(4) .changeStatus')).click();
	});

	this.When(/^I try to see only the items that are marked as bought$/, async function() {
  		await driver.findElement(by.css(".onlyBought")).click();
	});

	this.Then(/^I should get a list with only the items that I have bought.$/, async function() {
  		let changeStatusBtns = await driver.findElements(by.css('.table_items .changeStatus'));
  		let co = 0;

  		for(let btn of changeStatusBtns){
  			let text = await btn.getText();
  			if(text === 'Bought'){co++;}
  		}
  		assert(co == 2);
	});




}