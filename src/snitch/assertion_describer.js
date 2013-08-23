Snitch.AssertionDescriber = {
  describe: function(assertion) {
    var typeWithFirstLetterCapitalized = assertion.type.firstLetterToUpperCase();
    var assertorNameWithFirstLetterCapitalized = assertion.assertorName.firstLetterToUpperCase();

    var methodName = 'describe' + assertorNameWithFirstLetterCapitalized + typeWithFirstLetterCapitalized;
    return "[" + assertion.test.getFullName() + "] " + this[methodName](assertion);
  },
  describeTruthyConfirmation: function(assertion) {
    return assertion.arguments[0] + " was not truthy.";
  },
  describeTruthyRefutation: function(assertion) {
    return assertion.arguments[0] + " was truthy.";
  }
};
