let operands = [];
let operator = '';

function onButtonClick(value) {
    const display = document.getElementById("display");
    const synbolEq = value === "=";
    const symbolNumber = !isNaN(+value);

    if (symbolNumber) display.innerText += value;


    if (!symbolNumber && !synbolEq && operator === "") {
        operator = value;
        display.innerText += value;
        return;
    }

    if (!symbolNumber && !synbolEq && operator !== "") {
        const result = calculate(display);
        operands = [];
        operator = value;
        display.innerText = result + operator;
        return;
    }

    if (value === "=") {
        const result = calculate(display);
        operands = [];
        display.innerText = result;
        operator = "";
    }
}

function calculate(display) {
    operands = display.innerText.split(/[^\d]/).filter(e => e !== "").map(e => +e);
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