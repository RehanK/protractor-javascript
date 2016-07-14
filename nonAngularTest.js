describe("Test", function(){

beforeEach(function() {
      return browser.ignoreSynchronization = true;
      browser.get('http://www.walmart.com/')
    });
    

    it("should search for item", function{
      element(by.id('search')).sendKeys("meguiars ultimate");          
    });

    it("should click search button", function{
      element(by.className('searchbar-submit js-searchbar-submit')).click();          
    });

    it("should switch to grid view", function{
      element(by.className('grid-view wmicon wmicon-grid')).click();
    });
    
    it("should select item", function{
      element(by.css('a[href*="/ip/Meguiar-s-Ultimate-Liquid-Wax/16550272"]')).click()
    });
    
    it("should expect", function{
      element(by.partialLinkText('Meguiar-s-Ultimate-Liquid-Wax/16550272'));
    });
    


});
//http://ng-learn.org/2014/02/Protractor_Testing_With_Angular_And_Non_Angular_Sites/
