module.exports = function () {

	this.When(/^I try to change the status of a bought item to unbought$/, async function() {
  		await driver.findElement(by.css('.table_items tr:nth-child(2) .changeStatus')).click();
  		await driver.sleep(2000);
  		await driver.findElement(by.css('.table_items tr:nth-child(2) .changeStatus')).click();
  		await driver.sleep(2000);

	});

	this.Then(/^I should get the item status changed to unbought.$/, async function() {
  		let boughtTds = await driver.findElements(by.css('.table_items table tr td:nth-child(4)'));
  		let item = boughtTds[1];
  		let text = await item.getText();
  		console.log("txt", text);
  		assert(text === "Unbought","The status of the item has not changed.");
	});




}