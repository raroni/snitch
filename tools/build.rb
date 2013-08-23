filePaths = [
  'lib/event_emitter.js',
  'lib/string_ext.js',
  'src/snitch.js',
  'src/snitch/assertion.js',
  'src/snitch/assertion_describer.js',
  'src/snitch/assertors.js',
  'src/snitch/presenter.js',
  'src/snitch/suite_runner.js',
  'src/snitch/test_case_runner.js',
  'src/snitch/test_case.js'
]

fileSources = []

filePaths.each do |filePath|
  fullFilePath = File.join File.dirname(__FILE__), '..', filePath
  file = File.new(fullFilePath, 'r')
  contents = file.read
  fileSources << contents
  file.close
end

source = """(function() {

#{fileSources.join("\n\n")}
window.Snitch = Snitch;
})();"""

file = File.new('snitch.js', 'w')
file.write(source)
file.close
