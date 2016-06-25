# protractor-javascript
Protractor is a node.js program that acts as a webdriver which is used to write end to end tests, test that is written in Javascript to simulate user stories on a web browser

#Pre-requisites installation for Protractor 

1. Install node.js
-https://nodejs.org/en/
-In terminal type "node -v"  //to verify installation complete
-In terminal type "npm -v"  //to verify installation complete

2. Use nmp to install Protractor
-In terminal type "npm install -g protractor"  //g means global
-type "protractor --version"  //to verify installation complete

3. Install Java  //java is used to run selenium server
-http://www.oracle.com/technetwork/java/javase/downloads/index.html
-install the latest JDK
-type "java -version" //verify installation

4. Update webdriver manager
-In terminal type "webdriver-manager update"

----------------------------------------------------------------------------

#Running Protractor example test

1. start selenium server via command "webdriver-manager start"
2. cd /usr/local/lib/node_modules/protractor/example
3. run command "protractor conf.js"  //this will run the example_spec.js test script

Test Successfully ran!


