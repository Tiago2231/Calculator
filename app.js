const display = document.getElementById("display");
let currentExpression = '';

function appendToDisplay(input) {
    display.value += input;
    currentExpression += input;
}

function clearDisplay() {
    display.value = "";
    display.placeholder = '0';
    currentExpression = '';
}

function calculate() {
    try {
        const result = eval(display.value);
        display.value = result;
        currentExpression = '';
    } catch (error) {
        display.value = "Error";
        currentExpression = '';
    }
}

function deleteDisplay() {
    display.value = display.value.slice(0, -1);
    currentExpression = currentExpression.slice(0, -1);
}
