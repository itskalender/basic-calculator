'use strict';

let result        = 0;
let operand1      = 0;
let operand2      = 0;
let operator;

const calculator  = document.querySelector('.calculator');
const screenEl    = document.querySelector('.result');

calculator.addEventListener('click', calculate);

function calculate(e) {
  const targetStr = e.target.innerText;
  const targetNum = parseInt(targetStr);

  if (!Number.isNaN(targetNum)) {
      insertToScreen(targetStr);
  } else {
    switch (targetStr) {
      case '+':
        operand1  = parseInt(screenEl.innerText);
        operator  = '+'
        resetScreen();
        break;
      case '-':
        operand1  = parseInt(screenEl.innerText);
        operator  = '-'
        resetScreen();
        break;
      case '*':
        operand1  = parseInt(screenEl.innerText);
        operator  = '*'
        resetScreen();
        break;
      case '/':
        operand1  = parseInt(screenEl.innerText);
        operator  = '/'
        resetScreen();
        break;
      case '=':
        operand2 = parseInt(screenEl.innerText);
        switch (operator) {
          case '+':
            result = operand1 + operand2;
            break;
          case '-':
            result = operand1 - operand2;
            break;
          case '*':
            result = operand1 * operand2;
            break;
          case '/':
            result = operand1 / operand2;
            break;
        }
        screenEl.innerText = `${result}`;
        operand1 = 0;
        operand2 = 0;
        break;
      case 'C':
        resetCalculator();
        break;
    }
  }
}

function clearScreen() {
  screenEl.innerText = '';
}

function resetScreen() {
  screenEl.innerText = '0';
}

function resetCalculator() {
  resetScreen();
  operand1  = 0;
  operand2  = 0;
  result    = 0;
}

function insertToScreen(value) {
  const newScreenValue  = parseInt(screenEl.innerText) + parseInt(value);
  screenEl.innerText    = newScreenValue.toString();
}