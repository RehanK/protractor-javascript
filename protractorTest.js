describe("Test Suite", function() {
	
	beforeEach(function(){
		browser.get("http://www.thetestroom.com/jswebapp/");	
	});
	
	afterEach(function(){
		console.log("afterEach method executed")	
	});

	it ("should be on correct page", function() {
	    expect(browser.getCurrentUrl()).toContain("jswebapp");
	    //expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/");
	});

	it ("should generate correct text", function() {
	    var textMessage = "Testing 123";
	      
	    element(by.model("person.name")).sendKeys(textMessage);
	    element(by.binding("person.name")).getText().then(function(text){
	        expect(textMessage).toEqual("Testing 123");
	    });
	});

	it ("should check the correct number of dropdown options", function() {
	    element.(by.buttonText("CONTINUE")).click();
	    element(by.model("animal")).$("[value='1']").click();
	    
	    element.all(by.css(".ng-pristine option")).then(function(items){
	    	expect(items.length).toBe(4);
	    	expect(items[1]).getText()).toBe("George the Turtle");
	    });
	    
	    element.(by.buttonText("CONTINUE")).click();
	});

	it ("should check user is on the thank you page", function() {
	    element.(by.buttonText("CONTINUE")).click();
	    element.(by.buttonText("CONTINUE")).click();
	    expect(browser.getCurrectUrl()).toContain("confirm");
	});


});
