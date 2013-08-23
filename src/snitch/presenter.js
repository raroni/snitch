Snitch.Presenter = function(element, runner) {
  this.element = element;
  runner.on('completed', function() {
    console.log('Completed!');
  });

  runner.on('updated', this.updateSummary.bind(this));
  runner.on('failedAssertion', this.addFailedAssertion.bind(this));

  this.setupElements();
  this.runner = runner;
};

Snitch.Presenter.prototype.setupElements = function() {
  this.setupStatusElement();
  this.setupSummaryElement();
  this.setupFailedAssertionsElement();
  this.element.appendChild(this.statusElement);
  this.element.appendChild(this.summaryElement);
};

Snitch.Presenter.prototype.setupStatusElement = function() {
  this.statusElement = document.createElement('div');
  this.statusElement.className = 'status';
};

Snitch.Presenter.prototype.setupSummaryElement = function() {
  this.summaryElement = document.createElement('table');
  this.summaryElement.className = 'summary';

  var bodyElement = document.createElement('tbody');
  this.summaryElement.appendChild(bodyElement);

  this.addSummaryLine('failedAssertions', 'Failed');
  this.addSummaryLine('passedAssertions', 'Passed');
  this.addSummaryLine('completedAssertions', 'Completed');
};

Snitch.Presenter.prototype.addSummaryLine = function(propertyName, description) {
  var rowElement = document.createElement('tr');

  var descriptionElement = document.createElement('td');
  descriptionElement.innerHTML = description;

  var counterElement = document.createElement('td');
  counterElement.innerHTML = 0;
  this[propertyName + 'CountElement'] = counterElement;

  rowElement.appendChild(descriptionElement);
  rowElement.appendChild(counterElement);

  this.summaryElement.children[0].appendChild(rowElement);
}

Snitch.Presenter.prototype.setupFailedAssertionsElement = function() {
  this.failedAssertionsElement = document.createElement('ol');
  this.failedAssertionsElement.className = 'failed_assertions';
};

Snitch.Presenter.prototype.updateSummary = function() {
  this.failedAssertionsCountElement.innerHTML = this.runner.failedAssertions.length;
  this.passedAssertionsCountElement.innerHTML = this.runner.passedAssertionsCount;
  this.completedAssertionsCountElement.innerHTML = this.runner.getAssertionsCompletedCount();
};

Snitch.Presenter.prototype.addFailedAssertion = function(failedAssertion) {
  var element = document.createElement('li');
  element.innerHTML = Snitch.AssertionDescriber.describe(failedAssertion);
  this.failedAssertionsElement.appendChild(element);

  if(this.statusElement.className.indexOf('failed') == -1) this.statusElement.className += ' failed';
  if(!this.failedAssertionsElement.parentNode) this.element.appendChild(this.failedAssertionsElement);
};
