describe("Test", function(){

beforeEach(function() {
      return browser.ignoreSynchronization = true;
      browser.get('http://www.walmart.com/')
    });
    
    it("should do", function{
    	element(by.)
    });

    searchText
    element(by.id('search')).sendKeys("meguiars ultimate");

    clickSearchButton
    element(by.className('searchbar-submit js-searchbar-submit')).click();

    grid view
    element(by.className('grid-view wmicon wmicon-grid')).click();

    selecting meguiars ultimate liquid wax
    element(by.css('a[href*="/ip/Meguiar-s-Ultimate-Liquid-Wax/16550272"]')).click()

    expect
    element(by.partialLinkText('Meguiar-s-Ultimate-Liquid-Wax/16550272'));



});
//http://ng-learn.org/2014/02/Protractor_Testing_With_Angular_And_Non_Angular_Sites/
