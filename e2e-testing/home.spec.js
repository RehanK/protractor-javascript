  var HomePage = require('./page-objects/home.page');

  describe('Home page', function() {
    var question = new HomePage();

    it('should ask any question', function() {
      question.ask('What is the purpose of meaning?');
      expect(question.answer.getText()).toEqual('Chocolate');
    });
  });
