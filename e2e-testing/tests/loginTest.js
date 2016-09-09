var upWorkLogin = require('../pageObjects/homePageObject.js');

describe('upWorkLogin page - ', function () {

    var page;

    beforeEach(function() {
        page = new upWorkLogin();
    });


    it('should be able to login', function() {
    	page.get();
        page.emailValue('**');
        page.passwordValue('**');
        page.clickSignIn();
    });
});
