  var HomePage = function() {
    
    this.get = function(){
      browser.get('http://www.jetblue.com/')
    };
    
    this.email = element(by.id('email_field'));
    this.password = element(by.id('password_field'));
    this.signIn = element(by.id('signin_btn'));
    
    
    //this.question = element(by.model('question.text'));
    //this.answer = element(by.binding('answer'));
    //this.button = element(by.className('question-button'));

    //this.ask = function(question) {
    //  this.question.sendKeys(question);
    //  this.button.click();
    //};
  };
  module.exports = HomePage;
