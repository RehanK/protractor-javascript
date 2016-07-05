describe("Page Object Test", function() {
	
	beforeEach(function(){
		browser.get("http://www.thetestroom.com/jswebapp/");	
	});
	
	afterEach(function(){
		console.log("afterEach method executed")	
	});
	

	var home_page = require('home_page.js');

	it ("should be able to enter text", function() {
		home_page.enterFieldValue('pageOject Text');
		var getHomePageText = home_page.getDynamicText();
		expect(getHomePageText).toBe('pageOject Text');
		home_page.clickContinue();
	};



});
