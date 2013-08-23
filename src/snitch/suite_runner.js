Snitch.SuiteRunner = function(testCaseClasses) {
  this.completedTestsCasesCount = 0;
  this.completedTestsCount = 0;
  this.testCaseClasses = testCaseClasses;
  this.failedAssertions = [];
  this.passedAssertionsCount = 0;
};

Snitch.SuiteRunner.prototype = Object.create(EventEmitter);

Snitch.SuiteRunner.prototype.run = function() {
  this.testCaseClasses.forEach(function(testCaseClass) {
    this.runTestCase(testCaseClass);
  }.bind(this));
};

Snitch.SuiteRunner.prototype.runTestCase = function(testCaseClass) {
  var testCaseRunner = new Snitch.TestCaseRunner(testCaseClass);

  testCaseRunner.on('completed', this.testCaseCompleted.bind(this));
  testCaseRunner.on('testCompleted', this.testCompleted.bind(this));
  testCaseRunner.on('assertionCompleted', this.assertionCompleted.bind(this));

  testCaseRunner.run();
}

Snitch.SuiteRunner.prototype.testCaseCompleted = function(testCase) {
  this.completedTestsCasesCount++;
  if(this.completedTestsCasesCount == this.testCaseClasses.length) this.emit('completed');
};

Snitch.SuiteRunner.prototype.testCompleted = function(test) {
  this.completedTestsCount++;
  if(test.passed) this.passedTestsCount++;
  else this.failedTests.push(test);
};

Snitch.SuiteRunner.prototype.assertionCompleted = function(assertion) {
  if(assertion.didPass()) {
    this.passedAssertionsCount++;
  } else {
    this.failedAssertions.push(assertion);
    this.emit('failedAssertion', assertion);
  }
  this.emit('updated');
};

Snitch.SuiteRunner.prototype.getAssertionsCompletedCount = function() {
  return this.failedAssertions.length + this.passedAssertionsCount;
};
