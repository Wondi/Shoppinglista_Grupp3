module.exports = function () {
	this.Given(/^that I have a saved shopping list$/, async function() {
	  	await helpers.loadPage("http://localhost:3000/#create_new_shopping_list");
  		await driver.findElement(by.css("#list_name")).sendKeys("My list");
		await driver.findElement(by.css(".createBtn")).click();
		await driver.findElement(By.linkText("All lists")).click();
		await driver.sleep(3000);
	});

	this.When(/^I delete the shopping list from list of all shopping-lists$/, async function() {
		await driver.findElement(by.css(".deleteList")).click();
	});

	this.Then(/^that particular shopping list should be deleted from list of all shopping-lists.$/, async function() {
	
	});
}
