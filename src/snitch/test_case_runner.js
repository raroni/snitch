Snitch.TestCaseRunner = function(testCaseClass) {
  this.testCaseClass = testCaseClass;
  this.testNames = this.getTestNames();
};

Snitch.TestCaseRunner.prototype = Object.create(EventEmitter);

Snitch.TestCaseRunner.prototype.run = function() {
  this.testNames.forEach(function(testName) {
    this.runTest(testName);
  }.bind(this));
};


Snitch.TestCaseRunner.prototype.getTestNames = function(testCaseClass) {
  var testNames = [];
  for(key in this.testCaseClass.prototype) {
    if(key.substr(0, 4) == 'test') testNames.push(key);
  }
  return testNames;
};

Snitch.TestCaseRunner.prototype.runTest = function(testName) {
  var test = new this.testCaseClass(testName);

  test.on('assertionCompleted', function(assertion) {
    this.emit('assertionCompleted', assertion);
  }.bind(this));

  test.run();
};
