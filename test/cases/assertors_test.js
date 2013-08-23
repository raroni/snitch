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
