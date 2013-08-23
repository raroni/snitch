Snitch.Assertion = function(test, assertorName, type, arguments) {
  this.test = test;
  this.assertorName = assertorName;
  var assertor = Snitch.Assertors[assertorName];
  this.arguments = arguments;
  this.result = assertor.apply(null, arguments);
  this.type = type;
};

Snitch.Assertion.prototype.didPass = function() {
  var result = this.result;
  if(this.type == 'refutation') result = !result;
  return result;
};
