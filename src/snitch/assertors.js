Snitch.Assertors = {
  truthy: function(value) {
    return !!value;
  },
  true: function(value) {
    return value === true;
  },
  inDelta: function() {
    throw new Error('Not implemented yet!');
  }
};
