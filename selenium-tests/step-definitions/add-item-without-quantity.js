module.exports = function () {

	this.When(/^I try to add an item without a quantity to an empty grocery list$/, async function() {
  		await driver.findElement(by.css("#item_name")).sendKeys("Kakor");
		await driver.findElement(by.css("#quantity")).sendKeys();
		await driver.findElement(by.css("#category")).sendKeys("Bageri");
		await driver.findElement(by.css(".addItem-btn")).click();

	});

	this.Then(/^I should get an alert message.$/, async function() {
  		await driver.switchTo('alert');
  		await driver.sleep(4000);
	});
}