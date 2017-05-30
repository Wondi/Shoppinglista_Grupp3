module.exports = function () {

	this.Given(/^that I have a shopping list in my collection of lists$/, async function() {
	  	await helpers.loadPage("http://localhost:3000/#create_new_shopping_list");
  		await driver.findElement(by.css("#list_name")).sendKeys("Måndag");
		await driver.findElement(by.css(".createBtn")).click();
		await driver.findElement(By.linkText("New shopping list")).click();
		await driver.findElement(by.css("#list_name")).sendKeys("Tisdag");
		await driver.findElement(by.css(".createBtn")).click();
		await driver.findElement(By.linkText("New shopping list")).click();
		await driver.findElement(by.css("#list_name")).sendKeys("Onsdag");
		await driver.findElement(by.css(".createBtn")).click();
		await driver.sleep(2000);
		await driver.findElement(By.linkText("All lists")).click();
		await driver.sleep(3000);
	});

	this.When(/^I try to delete the shopping list from my collection of lists$/, async function() {
		await driver.findElement(by.css('#all_list tr:nth-child(2) .deleteList')).click();
		await driver.sleep(3000);
	});

	this.Then(/^that particular shopping list should be deleted from my collection of lists.$/, async function() {
		let trs = await driver.findElements(by.css('#all_list table tr'));
		let nameTds = await driver.findElements(by.css('#all_list table tr td:nth-child(2)'));
        console.log("trs", trs.length);
        console.log("nameTds", nameTds.length);
        for(let td of nameTds){
  			let text = await td.getText();
  			console.log("text: ",text);
  			assert(text != "Tisdag", "List was not removed");
  		}
  		assert(trs.length===3,"Not removed");
	});
}
