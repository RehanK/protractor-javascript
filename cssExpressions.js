describe("testing the js site", function(){

  beforeEach(function() {
    var url = browser.get("http://www.thetestroom.com/jswebapp/");
  });

  it ("testing css expressions", function() {
    
      //assertion
      expect(browser.getCurrentUrl()).toContain("/jswebapp");
      expect(url).toEqual("http://www.thetestroom.com/jswebapp/");
      
      //css tag
      element(by.css("input")).sendKeys("Text Test");
      
      //css class .
      element(by.css(".ng-binding").getText().then(function(text) {
        console.log(text);
      });
      
      //css ID #
      element(by.css("#continue_button")).click();
      
      //css chaining - chaining a tag#ID
      element(by.css("button#continue_button"))
      
      //css child nodes - use spaces to locate each nodes
      element(by.css("table td a")).getText().then(function(text) {
        console.log(text);
      });
      
      //css attribute
      element(by.css("[id='tite']")).getText().then(function(text) {
        console.log(text);
      });
  });

});
