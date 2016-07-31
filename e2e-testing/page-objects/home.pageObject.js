  var HomePage = function() {
    
    this.get = function(){
      browser.get('http://www.jetblue.com/')
    };
    
    var Login = function(){
      this.email = element(by.id('email_field'));
      this.password = element(by.id('password_field'));
      this.signIn = element(by.id('signin_btn'));
      this.rememberEmail = element(by.css('remembermeCheckbox'));
      this.forgotPassword  element(by.css('a[href="https://trueblue.jetblue.com/web/trueblue/forgot-password"]'));
    };
    
    var Flights = function(){
      
      
    
    };
    
    //this.question = element(by.model('question.text'));
    //this.answer = element(by.binding('answer'));
    //this.button = element(by.className('question-button'));

    //this.ask = function(question) {
    //  this.question.sendKeys(question);
    //  this.button.click();
    //};
  };
  module.exports = HomePage;
