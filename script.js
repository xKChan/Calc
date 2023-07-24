const firstNum = document.querySelector('.botNum');
const secondNum = document.querySelector('.topNum');
const numPad = document.querySelectorAll('.num');
const operator = document.querySelectorAll('.operator');
const clearCalc = document.querySelector('.clear');
const equals = document.querySelector('.equals');
const decimal = document.querySelector('.decimal')

let a = 0;
let b = 0;
let opperandPicked = "";

// Functions

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Clear Calculator
function clear() {
    clearCalc.addEventListener('click', () => {
        firstNum.textContent = "";
        secondNum.textContent = "";
    });
}

// append number to firstNum when pressed
function selectNum() {
    numPad.forEach(btn => {
        btn.addEventListener('click', () => {
            firstNum.append(btn.innerText);
        });
    });
}

// move botNum to topNum and save operator used, clear botNum for new number entry
function opperand() {
    operator.forEach(button => {
        button.addEventListener('click', () => {
            secondNum.textContent = firstNum.textContent;
            firstNum.textContent = "";
            opperandPicked = button.innerText;
        });
    });
}

function findAns() {
    equals.addEventListener('click', () => {
        a = secondNum.textContent;
        b = firstNum.textContent;
        operatorCalc = opperandPicked;
        let ans = calculations(a, b, operatorCalc);
        firstNum.textContent = ans;
        secondNum.textContent = "";
    });
}

function calculations(a, b, operatorCalc) {
    if (operatorCalc == '+') {
        return add(+a, +b);
    } else if (operatorCalc == '-') {
        return subtract(a, b);
    } else if (operatorCalc == 'X') {
        return multiply(a, b);
    } else if (operatorCalc == '÷') {
        return divide(a, b);
    } else {
        return 'ERROR';
    }
    
}


function decimalButton() {
    decimal.addEventListener('click', () => {
        if (firstNum.textContent.includes('.')) {
            return;
        } else {
            stringToNumber = firstNum.textContent + '.';
            firstNum.textContent = stringToNumber;
        }
    });
}


selectNum();
opperand();
clear();
findAns();
decimalButton();


// eventlisten Button
