(function() {
  Snitch.TestCase = function(testName) {
    this.testName = testName;
    this.failedAssertionsCount = 0;
    this.passedAssertionsCount = 0;
  };

  Snitch.TestCase.prototype = Object.create(EventEmitter);

  Snitch.TestCase.prototype.run = function() {
    if(this.setup) this.setup();
    this[this.testName]();
    this.complete();
  };

  Snitch.TestCase.prototype.performAssertion = function(assertorName, type, arguments) {
    var assertion = new Snitch.Assertion(this, assertorName, type, arguments);
    this.emit('assertionCompleted', assertion);
  };

  Snitch.TestCase.prototype.getFullName = function() {
    return this.constructor.name + ": " + this.testName;
  };

  Snitch.TestCase.prototype.complete = function() {
    this.passed = this.failedAssertionsCount == 0;
    this.emit('completed');
  }

  Snitch.TestCase.setupAssertionMethods = function(assertorName) {
    var assertorNameWithFirstLetterCapitalized = assertorName.firstLetterToUpperCase();
    Snitch.TestCase.prototype['confirm' + assertorNameWithFirstLetterCapitalized] = function() {
      var args = Array.prototype.slice.call(arguments);
      this.performAssertion(assertorName, 'confirmation', args);
    };

    Snitch.TestCase.prototype['refute' + assertorNameWithFirstLetterCapitalized] = function() {
      var args = Array.prototype.slice.call(arguments);
      this.performAssertion(assertorName, 'refutation', args);
    };
  }

  for(var assertorName in Snitch.Assertors) {
    Snitch.TestCase.setupAssertionMethods(assertorName);
  }
})();
