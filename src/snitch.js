var Snitch = {
  run: function(element, testCaseClasses) {
    var runner = new Snitch.SuiteRunner(testCaseClasses);
    var presenter = new Snitch.Presenter(element, runner);

    runner.run();
  }
};
