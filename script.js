const numDisplay = document.querySelector('#display');
const digits = document.createTextNode('0');
digits.className = 'text';
numDisplay.appendChild(digits);

const numButton = document.querySelectorAll('.number');
const opButton = document.querySelectorAll('.operator');
const clear = document.querySelector('#clear');
clear.onclick = () => clearAll();

const equals = document.querySelector('#equals');

let inputA = '';
let operator = '';
let inputB = '';
let numA = 0;
let numB = 0;
let result = 0;



numButton.forEach((numButton) => {
  numButton.addEventListener('click', () => {
    if (operator === '') {
      inputA += numButton.textContent;
      digits.textContent = inputA;
      console.log(inputA);
    } else {
      inputB += numButton.textContent;
      digits.textContent = inputB;
      console.log(inputB);
    }
  });
});


opButton.forEach((opButton) => {
  opButton.addEventListener('click', () => {
    if (inputB) {
      numA = parseInt(inputA, 0);
      numB = parseInt(inputB, 0);
      operate(operator, numA, numB);
      numA = result;
      inputA = result;
      digits.textContent = result; 
      numB = 0;
      inputB = '';
      operator = opButton.textContent;
    } else {
      operator = opButton.textContent;
    }
  });
});


equals.addEventListener('click', () => {
  numA = parseInt(inputA, 0);
  numB = parseInt(inputB, 0);
  operate(operator, numA, numB);
  digits.textContent = finalResult;
  console.log(finalResult);
});


function operate(operator, numA, numB) {

  if (operator === '+') {
    add(numA, numB);
    return sum;
  } else if (operator === '-') {
    subtract(numA, numB);
    return difference;
  } else if (operator === 'x') {
    multiply(numA, numB);
    return product;
  } else if (operator === '÷') {
    divide(numA, numB);
    return quotient;
  }
}

function add(numA, numB) {
  sum = (numA + numB);
};

function subtract(numA, numB) {
  difference = (numA - numB);
};

function multiply(numA, numB) {
  product = (numA * numB);
};

function divide(numA, numB) {
  quotient = (numA / numB);
};


function clearDisplay() {
  digits.textContent = '';
}

function clearAll() {
  inputA = '';
  inputB = '';
  operator = '';
  sum = 0;
  difference = 0;
  product = 0;
  quotient = 0;
  finalResult = 0;
  digits.textContent = '0';
  console.log(inputA, inputB, operator);
}
