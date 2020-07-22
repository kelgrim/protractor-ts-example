**Protractor TypeScript Starter Project**

This github page contains a started project for Protractor. Protractor is a popular end-to-end test framework for Angular applications. See: https://www.protractortest.org/#/
It also contains sample test for the following site: https://juliemr.github.io/protractor-demo/
It uses the Page Object Model (POM) to expose the page. 
It uses TypeScript as the language of choice. 

To use the project, some programs need to be installed in advance. 
See https://github.com/angular/protractor/blob/master/docs/getting-started.md for getting started with Protractor and for help with this installation. 

After the required installations and after running webdriver manager use the following commands in the project folder to run the tests:
- `npm install`
- `npm test`

*Install Guide for Ubuntu*

If you are running Ubuntu, you can use the below steps for a full installation: 
(Note that this assumes a 'fresh' Ubuntu installation. More than likely some of these are already present)

Update apt
- Apt is a package manager for linux/ubuntu. It is required for attaining Curl
- `sudo apt update`

Install Curl
- Curl is required for attaining NVM (Node Version Manager)
- `sudo apt install curl`

Install Java
- Java is required for running Selenium Webdriver
- `sudo apt install default-jdk`
- To check if the installation was succesful, type the following:
- `java –version`
- Result: 11.0.6. Other versions should be fine. 

Install Chrome
- Required for selenium webdriver if you want to use Chrome in your tests
- Use https://www.google.com/chrome/, download and install

Install NVM
- Node version manager, allows on to use multiple node versions. This solved a lot of npm issues for me, so comes highly recommended
- For futher info see: https://github.com/nvm-sh/nvm
- `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`
- After this close and re-open the terminal
- With the following command check if the installation was succesvol:
- `command -v nvm`
- output should be: `nvm`
 
Install Node/NPM:
- `nvm install node #`
- Checks:
- `npm –v`
-  Output: 6.14.4. Or something more recent. 
-  `node –v`
-  Output: v14.0.0. Or something more recent

Install Protractor / webdriver-manager:
- Protractor automatically install webdriver-manager.
- `npm install -g protractor`
- `webdriver-manager update`

Starting webdriver-manager:
- This process has to run before the tests can be executed.
- `webdriver-manager start`
- Keep this terminal open.

Installing the test dependancies
- Open a new terminal
- Go to the folder that contains this project. This will install all test specific dependancies
- `npm install`

Running the test
- Go the folder containing the project
- `npm test`

The test should now be running!  
