module.exports = function () {

	this.Given(/^that I have an empty grocery list$/, async function() {
  		await helpers.loadPage("http://localhost:3000/#create_new_shopping_list");
  		await driver.findElement(by.css("#list_name")).sendKeys("My list");
		await driver.findElement(by.css(".createBtn")).click();
	});

	this.When(/^I try to add an item without a name$/,async function(){
		await driver.findElement(by.css(".addItem-btn")).click();
	});

	this.Then(/^I should get a runtime error.$/, async function(){
		await driver.switchTo('alert');
		// Rename this in Gherkin...
	});

	// scenario 2

	for(itemNumber of [1,99,1000]){

		(()=>{
			let numberOfItems = itemNumber;

			this.When(new RegExp('^I add ' + numberOfItems +' item to the list$'), async function(){
				for(let i = 1; i <= numberOfItems; i++){
					await driver.findElement(by.css("#item_name")).sendKeys("Bananer " + i);
					await driver.findElement(by.css("#quantity")).sendKeys(i);
					await driver.findElement(by.css(".addItem-btn")).click();
				}
			});

			this.Then(new RegExp('^I should have ' + numberOfItems +' item in my grocery list.$'), async function(){
				await driver.findElement(by.css(".view_list-btn")).click();
				let trs = await driver.findElements(by.css('.table_items table tr'));
				/*let found = false;
				for(let tr of trs){
					let text = await tr.getText();
					if(text.indexOf("Bananer")>=0 && text.indexOf("12")>=0){
						found = true;
						break;
					}
				}*/
				assert(trs.length === numberOfItems + 1,"Not the correct number of items (" + numberOfItems + ")");
			});


		})();
	}
   
   	this.Then(/^the item should be a grocery list items.$/, async function(){
   			// How do we know????? Delete this step.
	});
  
};