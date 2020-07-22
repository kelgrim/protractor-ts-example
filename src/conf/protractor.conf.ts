import {browser, Config} from "protractor";

let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
let HtmlReporter = require('protractor-beautiful-reporter');

export let config: Config = {
    framework: "jasmine",

        //Chrome configuration
        capabilities: {
            browserName: 'chrome'
        },


    /*

        
          //Firefox configuration
        capabilities: {
            browserName: 'firefox'
        },

    //multi-browser: test is executed in chrome and firefox.
    multiCapabilities: [{
        browserName: 'chrome'
    }, {
        browserName: 'firefox'
    }
    ],
    */

    //Indicate which testcases to execute
    specs: ['../testcases/calculator-spec.js'],
    //specs: ['../testcases/*.js'],

    //Configuration of (local) selenium webdriver
    seleniumAddress: "http://localhost:4444/wd/hub",

    //url of the application.
    baseUrl: 'https://juliemr.github.io/protractor-demo/',

    // Turn off control flow in selenium.
    // This functionality is deprecated and in it's place one should use async/await.
    SELENIUM_PROMISE_MANAGER: false,

    //Configuration of reports
    onPrepare: () => {
        //jasmine-spec-reporter for a somewhat clearer console logging.
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayFailuresSummary: true,
                displayFailuredSpec: true,
                displaySuiteNumber: true,
                displaySpecDuration: true
            }
        }));

        //protractor-beautiful-reports for html reports.
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'reports',
            screenshotsSubfolder: 'screenshots',
            jsonsSubfolder: 'jsons',
            takeScreenshotsOnlyForFailedSpecs: true
        }).getJasmine2Reporter());

        //Change windows size to match screen.
        setTimeout(() => {
            browser.driver.executeScript<[number, number]>(() => {
                return [
                    1280,
                    1024
                    /* for max size:
                    window.screen.availWidth,
                    window.screen.availHeight
                    */
                ];
            }).then((result: [number, number]) => {
                browser.driver.manage().window().setSize(result[0], result[1]);
            });
        });
    }
};

