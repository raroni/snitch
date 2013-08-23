Snitch.AssertionDescriber = {
  describe: function(assertion) {
    var typeWithFirstLetterCapitalized = assertion.type.firstLetterToUpperCase();
    var assertorNameWithFirstLetterCapitalized = assertion.assertorName.firstLetterToUpperCase();

    var methodName = 'describe' + assertorNameWithFirstLetterCapitalized + typeWithFirstLetterCapitalized;
    return "[" + assertion.test.getFullName() + "] " + this[methodName](assertion.arguments);
  },
  describeTruthyConfirmation: function(args) {
    return "'" + args[0] + "' was not truthy.";
  },
  describeTruthyRefutation: function(args) {
    return "'" + args[0] + "' was truthy.";
  },
  describeTrueConfirmation: function(args) {
    return "'" + args[0] + "' was not true.";
  },
  describeTrueRefutation: function(args) {
    return "'" + args[0] + "' was true.";
  },
  describeEqualConfirmation: function(args) {
    return "'" + args[0] + "' did not equal '" + args[1] + "'.";
  },
  describeEqualRefutation: function(args) {
    return "'" + args[0] + "' did equal '" + args[1] + "'.";
  }
};
