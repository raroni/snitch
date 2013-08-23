Snitch.Assertors = {
  truthy: function(value) {
    return !!value;
  },
  true: function(value) {
    return value === true;
  },
  equal: function(a, b) {
    return a === b;
  }
};
