# Protractor-Javascript
Protractor is a node.js program that acts as a webdriver which is used to write end to end tests, test that is written in Javascript to simulate user stories on a web browser

###Pre-requisites for Protractor 

#####1. Install node.js
- https://nodejs.org/en/
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


