// An example configuration file
exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
multiCapabilities: [{
  'browserName': 'chrome'
}, {
  'browserName': 'firefox'
}],

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../tests/loginTest.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
    showColors: true, // Use colors in the command line report.
  }
};
