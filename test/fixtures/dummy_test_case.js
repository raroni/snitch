function DummyTest(testName) {
  Snitch.TestCase.call(this, testName);
}

DummyTest.prototype = Object.create(Snitch.TestCase.prototype);

DummyTest.prototype.setup = function() {
  this.setupWasCalled = true;
};

DummyTest.prototype['do nothing'] = function() { };
