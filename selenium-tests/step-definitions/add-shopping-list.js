module.exports = function () {

	this.Given(/^that I want to create a shopping list$/,async function(){
	await helpers.loadPage("http://localhost:3000/#create_new_shopping_list");
	});
	
	this.When(/^I create a new shopping list with a name$/,async function(){
	await driver.findElement(by.css("#list_name")).sendKeys("My list");
	await driver.findElement(by.css(".createBtn")).click();

	});

	this.Then(/^I should get an empty list.$/, async function(){
		await driver.findElement(By.linkText("All lists")).click();
		await driver.sleep(3000);

	    let trs = await driver.findElements(by.css('#all_list table tr'));
	    //console.log("trs", trs);

	    //It should be only 1 line in the table
	   	assert((trs.length - 1) === 1,"It was created not 1 list");

	   	//Total items in the list should be equal to 0
	   	let td = await driver.findElements(by.css('#all_list table tr td:nth-child(3)'));
	   	console.log("td = ",td);
	   	let text = await td[0].getText();
	   	console.log("text = ", text);
	   	assert(text === '0', "List is not empty!");
		
   	});

	this.Then(/^it should have the name that I gave it.$/, async function(){
		let td = await driver.findElements(by.css('#all_list table tr td:nth-child(2)'));
	   	console.log("td = ",td);
	   	let text = await td[0].getText();
	   	console.log("text = ", text);
	   	assert(text === 'My list', "List has wrong name!");

  	});

//scenario 2
	this.Given(/^that I want to create an unnamed shopping list$/,async function(){
		await helpers.loadPage("http://localhost:3000/#create_new_shopping_list");
	});

	this.When(/^I try to create a shopping list without a name$/, async function(){
  		await driver.findElement(by.css("#list_name")).sendKeys("");
		await driver.findElement(by.css(".createBtn")).click();
	});

	this.Then(/^I should get an alert prevented addition an unnamed shopping list.$/, async function(){
		await driver.switchTo('alert');
	});

  	
	
};