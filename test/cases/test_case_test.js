function TestCaseTest(name) {
  Snitch.TestCase.call(this, name);
}

TestCaseTest.prototype = Object.create(Snitch.TestCase.prototype);
TestCaseTest.prototype.constructor = TestCaseTest;

TestCaseTest.prototype['test setup'] = function() {
  var testCase = new DummyTest('do nothing');
  testCase.run();
  this.confirmTruthy(testCase.setupWasCalled);
};
