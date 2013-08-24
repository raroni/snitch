function AssertorsTest(name) {
  Snitch.TestCase.call(this, name);
}

AssertorsTest.prototype = Object.create(Snitch.TestCase.prototype);
AssertorsTest.prototype.constructor = AssertorsTest;

AssertorsTest.prototype['test true'] = function() {
  this.confirmTrue(Snitch.Assertors.true(true));
  this.refuteTrue(Snitch.Assertors.true(1));
  this.refuteTrue(Snitch.Assertors.true(false));
  this.refuteTrue(Snitch.Assertors.true("false"));
};

AssertorsTest.prototype['test truthy'] = function() {
  this.confirmTrue(Snitch.Assertors.truthy("rasmus"));
  this.confirmTrue(Snitch.Assertors.truthy(true));
  this.refuteTrue(Snitch.Assertors.truthy(false));
  this.refuteTrue(Snitch.Assertors.truthy(0));
};

AssertorsTest.prototype['test equal'] = function() {
  this.confirmTrue(Snitch.Assertors.equal("rasmus", "rasmus"));
  this.confirmTrue(Snitch.Assertors.equal(true, true));
  this.refuteTrue(Snitch.Assertors.equal(2, "2"));
  this.refuteTrue(Snitch.Assertors.equal(2, 3));
  this.refuteTrue(Snitch.Assertors.equal("true", true));
  this.refuteTrue(Snitch.Assertors.equal("yeah", "no"));
};

AssertorsTest.prototype['test in delta'] = function() {
  this.confirmTrue(Snitch.Assertors.inDelta(25, 25, 0.1));
  this.confirmTrue(Snitch.Assertors.inDelta(24.9, 25, 0.5));
  this.confirmTrue(Snitch.Assertors.inDelta(24.9, 25, 0.1));
  this.refuteTrue(Snitch.Assertors.inDelta(24, 25, 0.1));
  this.refuteTrue(Snitch.Assertors.inDelta(30, 25, 2));
};
