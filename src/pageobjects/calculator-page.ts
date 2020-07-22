import {ElementArrayFinder, WebdriverWebElement} from "protractor/built/element";
import {browser, by, element} from "protractor";
import {Operations} from "../enums/operations-enum";

export class CalculatorPage {

    private firstNumber: WebdriverWebElement = element(by.model('first'));
    private secondNumber: WebdriverWebElement = element(by.model('second'));

    private operatorOptions: ElementArrayFinder = element.all(by.options('value for (key, value) in operators'));
    private addOption: WebdriverWebElement = this.operatorOptions.get(0);
    private divideOption: WebdriverWebElement = this.operatorOptions.get(1);
    private modulusOption: WebdriverWebElement = this.operatorOptions.get(2);
    private multiplyOption: WebdriverWebElement = this.operatorOptions.get(3);
    private subtractOption: WebdriverWebElement = this.operatorOptions.get(4);

    private goButton: WebdriverWebElement = element(by.id('gobutton'));

    private resultField = element(by.tagName('h2'));

    private history: ElementArrayFinder = element.all(by.repeater('result in memory'));

    public async openPage() {
        await browser.get('');
    }

    public async doCalculation(first: number, second: number, operation: Operations) {
        this.firstNumber.sendKeys(first);
        this.secondNumber.sendKeys(second);
        await this.selectOperation(operation);
        await this.goButton.click();

    }

    public async getHistoryCount(): Promise<number>{
        const result = await this.history.count();
        return result;
    }

    public async getMainResult(): Promise<number> {
        const result: number =  parseFloat( await this.resultField.getText());
        return result;
    }

    public async selectOperation(operation: Operations) {
        switch (operation) {
            case Operations.Addition : {
                await this.addOption.click();
                break;
            }
            case Operations.Division : {
                await this.divideOption.click();
                break;
            }
            case Operations.Modulo : {
                await this.modulusOption.click();
                break;
            }

            case Operations.Multiplication : {
                await this.multiplyOption.click();
                break;
            }

            case Operations.Subtraction : {
                await this.subtractOption.click();
                break;
            }
        }
    }


}
