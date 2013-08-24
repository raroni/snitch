Snitch.Assertors = {
  truthy: function(value) {
    return !!value;
  },
  true: function(value) {
    return value === true;
  },
  equal: function(expected, actual) {
    return expected === actual;
  },
  inDelta: function(expected, actual, delta) {
    var min = expected-delta;
    var max = expected+delta;
    return actual >= min && actual <= max;
  }
};
