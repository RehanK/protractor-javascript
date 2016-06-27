describe("Test Suite", function() {

	  it ("should be on correct page", function() {
	      browser.get("http://www.thetestroom.com/jswebapp/");
	      expect(browser.getCurrentUrl()).toContain("jswebapp");
	      expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/");
	  });

	  it ("test2", function() {
	      browser.get("http://www.thetestroom.com/jswebapp/");
	      var textMessage = "Testing 123";
	      
	      element(by.model("person.name")).sendKeys(textMessage);
	      element(by.binding("person.name")).getText().then(function(text){
	          expect(textMessage).toEqual("Testing 123");

	        
	      });

    });

});
