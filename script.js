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


negButton.addEventListener('click', () => {
  if (operator === '' && (!inputA.includes('-'))) {
      inputA = '-'+inputA;
      digits.textContent = inputA;
  } else if (operator === '' && (inputA.includes('-'))) {
      inputA = inputA.slice(1);
      digits.textContent = inputA;
  } else if (operator && (!inputB.includes('-'))) {
      inputB = '-'+inputB;
      digits.textContent = inputB;
  } else if (operator === '' && (inputB.includes('-'))) {
      inputB = inputB.slice(1);
      digits.textContent = inputB;
   }
});


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
      numA = parseFloat(inputA, 0);
      numB = parseFloat(inputB, 0);
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
  numA = parseFloat(inputA, 0);
  numB = parseFloat(inputB, 0);
  operate(operator, numA, numB);
  digits.textContent = result;
  console.log(result);
});


function operate(operator, numA, numB) {

  if (operator === '+') {
    add(numA, numB);
    return result;
  } else if (operator === '-') {
    subtract(numA, numB);
    return result;
  } else if (operator === 'x') {
    multiply(numA, numB);
    return result;
  } else if (operator === '÷') {
    divide(numA, numB);
    return result;
  }
}

function add(numA, numB) {
  if ((numA + numB).isInteger) {
    result = (numA + numB)
  } else {
    result = (numA + numB).toFixed(16) * 1
  }
};

function subtract(numA, numB) {
  if ((numA - numB).isInteger) {
    result = (numA - numB)
  } else {
    result = (numA - numB).toFixed(16) * 1
  }
};

function multiply(numA, numB) {
  if ((numA * numB).isInteger) {
    result = (numA * numB)
  } else {
    result = (numA * numB).toFixed(16) * 1
  }
};

function divide(numA, numB) {
  if ((numA / numB).isInteger) {
    result = (numA / numB)
  } else {
    result = (numA / numB).toFixed(16) * 1
  }
};


function clearDisplay() {
  digits.textContent = '0';
}

function clearAll() {
  inputA = '';
  inputB = '';
  numA = 0;
  numB = 0;
  operator = '';
  result = 0;
  digits.textContent = '0';
  console.log(inputA, inputB, operator);
}


