const OPERATORS = ['+', '-', '*', '/'];

let operands = [];
let operator = '';

function onButtonClick(value) {
    const display = document.getElementById("display");
    const symbolEq = value === "=";
    const symbolNumber = !isNaN(+value);
    const symbolIsOperator = OPERATORS.includes(value);
    const dota = value === ".";
    
    if (symbolNumber || dota) display.innerText += value;


    if ( operator === "" && symbolIsOperator) {
        operator = value;
        display.innerText += value;
        return;
    }

    if ( operator !== "" && symbolIsOperator) {
        const result = calculate(display);
        operands = [];
        operator = value;
        display.innerText = result + operator;
        return;
    }

    if (symbolEq) {
        const result = calculate(display);
        operands = [];
        display.innerText = result;
        operator = "";
        return;
    }
}

function calculate(display) {
    operands = display.innerText.split(/[^\d\.]/).filter(e => e !== "").map(e => +e);
    return doOperation();
}

function doOperation() {
    switch (operator) {
        case "+":
            return operands[0] + operands[1];
        case "-":
            return operands[0] - operands[1];
        case "*":
            return operands[0] * operands[1];
        case "/":
            return operands[0] / operands[1];
        default:
            break;
    }
}