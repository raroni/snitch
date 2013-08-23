function AssertionDescriberTest(name) {
  Snitch.TestCase.call(this, name);
}

AssertionDescriberTest.prototype = Object.create(Snitch.TestCase.prototype);
AssertionDescriberTest.prototype.constructor = AssertionDescriberTest;

AssertionDescriberTest.prototype['test truthy confirmation'] = function() {
  var expected = "'Hello' was not truthy.";
  var actual = Snitch.AssertionDescriber.describeTruthyConfirmation(["Hello"]);
  this.confirmEqual(expected, actual);
};

AssertionDescriberTest.prototype['test truthy refutation'] = function() {
  var expected = "'Hello' was truthy.";
  var actual = Snitch.AssertionDescriber.describeTruthyRefutation(["Hello"]);
  this.confirmEqual(expected, actual);
};

AssertionDescriberTest.prototype['test true confirmation'] = function() {
  var expected = "'Hello' was not true.";
  var actual = Snitch.AssertionDescriber.describeTrueConfirmation(["Hello"]);
  this.confirmEqual(expected, actual);
};

AssertionDescriberTest.prototype['test true refutation'] = function() {
  var expected = "'true' was true.";
  var actual = Snitch.AssertionDescriber.describeTrueRefutation([true]);
  this.confirmEqual(expected, actual);
};

AssertionDescriberTest.prototype['test equal confirmation'] = function() {
  var expected = "'Rasmus' did not equal 'Christina'.";
  var actual = Snitch.AssertionDescriber.describeEqualConfirmation(['Rasmus', 'Christina']);
  this.confirmEqual(expected, actual);
};

AssertionDescriberTest.prototype['test equal refutation'] = function() {
  var expected = "'Rasmus' did equal 'Christina'.";
  var actual = Snitch.AssertionDescriber.describeEqualRefutation(['Rasmus', 'Christina']);
  this.confirmEqual(expected, actual);
};
