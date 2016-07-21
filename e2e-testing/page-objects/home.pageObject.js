  var HomePage = function() {
    this.question = element(by.model('question.text'));
    this.answer = element(by.binding('answer'));
    this.button = element(by.className('question-button'));

    this.ask = function(question) {
      this.question.sendKeys(question);
      this.button.click();
    };
  };
  module.exports = HomePage;
