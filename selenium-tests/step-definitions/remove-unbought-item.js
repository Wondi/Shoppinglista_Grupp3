module.exports = function () {

	this.When(/^I try to remove an item that is marked as unbought from the list$/, async function() {
  		await driver.sleep(3000);
  		await driver.findElement(by.css('.table_items tr:nth-child(1) .deleteItem')).click();
  		await driver.sleep(3000);
	});

	this.Then(/^I should have a list without the unbought removed item.$/, async function() {
		let trs = await driver.findElements(by.css('.table_items table tr'));
		let nameTds = await driver.findElements(by.css('.table_items table tr td:nth-child(1)'));
        console.log("trs", trs.length);
        console.log("nameTds", nameTds.length);
        for(let td of nameTds){
  			let text = await td.getText();
  			console.log("text: ",text);
  			/*if(text === "Bananer"){
  				console.log("The item was not removed");
  				break;
  			}*/
  			assert(text != "Kakor", "Item not removed");
  		}
  		assert(trs.length===4,"Not removed");
	});


}