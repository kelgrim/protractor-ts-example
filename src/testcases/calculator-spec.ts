import {CalculatorPage} from "../pageobjects/calculator-page";
import {Operations} from "../enums/operations-enum";

let calcPage = new CalculatorPage();

describe('It can do basic calculations', function(){

    beforeEach(async function(){
        await calcPage.openPage();
    });

    it('Can add', async function(){
       await calcPage.doCalculation(4,5,Operations.Addition);
       let result = await calcPage.getMainResult();
       expect(result).toEqual(9);
    });

    it('Can multiply', async function(){
        await calcPage.doCalculation(6,8,Operations.Multiplication);
        let result = await calcPage.getMainResult();
        expect(result).toEqual(48);
    });

    it('Can do Modulo', async function(){
        await calcPage.doCalculation(17,15,Operations.Modulo);
        let result = await calcPage.getMainResult();
        expect(result).toEqual(2);
    });

    it('Can divide', async function(){
        await calcPage.doCalculation(14,8,Operations.Division);
        let result = await calcPage.getMainResult();
        expect(result).toEqual(1.75);
    });

    it('Can subtract', async function(){
        await calcPage.doCalculation(14,28,Operations.Subtraction);
        let result = await calcPage.getMainResult();
        expect(result).toEqual(-14);
    });

    it('Creates a history record for every operation performed', async function(){
        await calcPage.doCalculation(2,118,Operations.Addition);
        await calcPage.doCalculation(27,3,Operations.Division);
        await calcPage.doCalculation(14,12,Operations.Subtraction);

        let result = await calcPage.getHistoryCount();
        expect(result).toEqual(3);
    });




});
