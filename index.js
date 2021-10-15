'use strict';

let result        = 0;
let operand1      = 0;
let operand2      = 0;
let operator;

const calculator  = document.querySelector('.calculator');
const screenEl    = document.querySelector('.result');

calculator.addEventListener('click', calculate);

function calculate(e) {
  const targetStr       = e.target.innerText;
  const targetNum       = parseInt(targetStr);
  const isTargetInvalid = Number.isNaN(targetNum);

  if (!isTargetInvalid) {
      insertToScreen(targetStr);
  } else {
    switch (targetStr) {
      case '+':
        updateFirstOperandAndOperator('+');
        resetScreen();
        break;
      case '-':
        updateFirstOperandAndOperator('-');
        resetScreen();
        break;
      case '*':
        updateFirstOperandAndOperator('*');
        resetScreen();
        break;
      case '/':
        updateFirstOperandAndOperator('/');
        resetScreen();
        break;
      case 'DEL':
        deleteLastDigit();
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
        screenEl.innerText = result;
        resetOperands();
        break;
      case 'C':
        resetCalculator();
        break;
    }
  }
}

function insertToScreen(value) {
  const newScreenStrVal = screenEl.innerText + value;
  screenEl.innerText    = parseInt(newScreenStrVal);
}

function updateFirstOperandAndOperator(newOperator) {
  operand1  = parseInt(screenEl.innerText);
  operator  = newOperator;
}

function resetScreen() {
  screenEl.innerText = '0';
}

function deleteLastDigit() {
  const currentScreenVal  = screenEl.innerText;
  const newScreenStrVal   = currentScreenVal.slice(0, -1);
  if (newScreenStrVal.length === 0) {
    resetScreen();
    return;
  }
  screenEl.innerText = newScreenStrVal;
}

function resetOperands() {
  operand1 = 0;
  operand2 = 0;
}

function resetCalculator() {
  resetScreen();
  operand1  = 0;
  operand2  = 0;
  result    = 0;
}