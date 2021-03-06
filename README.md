# Protractor-Javascript
Protractor is a node.js program that acts as a webdriver which is used to write end to end tests, test that is written in Javascript to simulate user stories on a web browser

###Pre-requisites for Protractor 

#####1. Install node.js
- https://nodejs.org/en/
- path `/usr/local/bin/node`
- run `node -v` to verify node installation
- run `npm -v` to verify nmp installation

#####2. Use nmp to install Protractor
- run `npm install -g protractor`  //g means global
- run `protractor --version` to verify installation

#####3. Install Java  //java is used to run selenium server
- http://www.oracle.com/technetwork/java/javase/downloads/index.html
- install the latest JDK
- run `java -version` to verify java installation

#####4. Update webdriver manager
- run `webdriver-manager update`

----------------------------------------------------------------------------

###Running Protractor example test

1. Start selenium server via command `webdriver-manager start`
2. `cd /usr/local/lib/node_modules/protractor/example`
3. To run the example script `protractor conf.js` 

Test Successfully ran!

###Element Explorer

1. To run element explorer `protractor --elementExplorer`
2. `browser.get('http://www.way2automation.com/protractor-angularjs-practice-website.html')`

###Elementor - is a Node.js application. Install it through npm:
1. npm install elementor -g
2. make sure Protector, chrome driver, and selenium server are installed
3. run elementor: `elementor "http://www.jetblue.com/#/"`
4. duplicate chrome tab -> open developer tools -> Protractor

###Browser driver
1. IE Driver `webdriver-manager update --ie`

###Testing on Multiple Browsers

1. edit conf.js file
2. replace capabilities with:
```
   multiCapabilities:[{
   browserName : 'internet explorer'
},{
   browserName : 'chrome'
},{
   browserName : 'firefox'
}],
```

###Testing Non Angular Sites
```
beforeEach(function() {
   return browser.ignoreSynchronization = true;
});
```
