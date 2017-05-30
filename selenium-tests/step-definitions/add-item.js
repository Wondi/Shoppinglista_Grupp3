module.exports = function () {

	this.Given(/^that I have an empty grocery list$/, async function() {
  		await helpers.loadPage("http://localhost:3000/#create_new_shopping_list");
  		await driver.findElement(by.css("#list_name")).sendKeys("My list");
		await driver.findElement(by.css(".createBtn")).click();
	});

	this.When(/^I try to add an item without a name$/,async function(){
		await driver.findElement(by.css(".addItem-btn")).click();
	});

	this.Then(/^I should get an alert.$/, async function(){
		await driver.switchTo('alert');
	});

	// scenario 2
	
	    this.When(/^I add (.*) item to the list$/, async function(numberOfItems) {
	        console.log(numberOfItems);
	        // add this number of items
	        for(let i = 1; i <= numberOfItems; i++){
		        await driver.findElement(by.css("#item_name")).sendKeys("Bananer "+ i);
				await driver.findElement(by.css("#quantity")).sendKeys(i);
				await driver.findElement(by.css(".addItem-btn")).click();
			}
	    });

	    this.Then(/^I should have (.*) item in my grocery list.$/, {timeout: 30000}, async function(numberOfItems) {
	        // make sure that have this number of items in the list
	        // simulate that this step takes 20 seconds (ok because we set the max timeout to 30 seconds)
			await driver.findElement(by.css(".view_list-btn")).click();
	 		let trs = await driver.findElements(by.css('.table_items table tr'));
			assert((trs.length - 1) === numberOfItems/1,"Not the correct number of items (" + numberOfItems + ")");
	        await driver.sleep(20000);
	    });

};
