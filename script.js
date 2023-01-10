const numDisplay = document.querySelector('#display');
const digits = document.createTextNode('0');
digits.className = 'text';
numDisplay.appendChild(digits);


const numButton = document.querySelectorAll('.number');
const opButton = document.querySelectorAll('.operator');
const clear = document.querySelector('#clear');
clear.onclick = () => clearAll();

const decimal = document.querySelector('#decimal');
const posNegButton = document.querySelector('#posNeg');
const percent = document.querySelector('#percent');
const equals = document.querySelector('#equals');
const backspace = document.querySelector('#backspace');

let inputA = '';
let operator = '';
let inputB = '';
let numA = 0;
let numB = 0;
let result = 0;



posNegButton.addEventListener('click', () => {
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
// triggering an operation if pressed after result

decimal.addEventListener('click', clickOnce);
function removeHandler() {
  decimal.removeEventListener('click', clickOnce);
}
function clickOnce() {
  if (operator === '' && (!inputA.includes('.'))) {
     if (inputA ==='') {
      inputA += '0.';
     } else {
    inputA += '.';
     }
    digits.textContent = inputA;  
  } else if (operator && (!inputB.includes('.'))) {
    if (inputB ==='') {
        inputB += '0.';
     } else {
        inputB += '.';
     }
    digits.textContent = inputB;
  } else {
   removeHandler();
 }
}

percent.addEventListener('click', () => {
  if (inputA && operator ==='') {
    if (inputA === '0') {
       inputA = parseFloat(inputA);
       digits.textContent = inputA;
     } else {
       inputA = parseFloat(inputA) / 100;
       digits.textContent = inputA;
     }
  } else if (inputB === '0') {
       numA = 0;
  } else if (result) {
      inputA = parseFloat(result) / 100;
      numA = inputA;
      inputB = '';
      result = 0;
      digits.textContent = inputA;
  } else if ((operator === '+' || operator === '-') && inputB) {
    inputB = parseFloat(inputB) / inputA;
    digits.textContent = inputB;
  } else if ((operator === 'x' || operator === '/') && inputB) {
    inputB = parseFloat(inputB) / 100;
    digits.textContent = inputB; 
  
  }
});


backspace.addEventListener('click', () => {
  if (inputA && operator ==='') {
      inputA = inputA.slice(0, -1);
      digits.textContent = inputA;
  } else if (inputB && result === 0) {
      inputB = inputB.slice(0, -1);
      digits.textContent = inputB; 
  } else if (result) {
      result = result.toString().slice(0, -1);
      digits.textContent = result;
      result = parseFloat(result);
      inputA = result;
      inputB = '';
      digits.textContent = inputA;
  }
});


function limitInputA() {
  if(inputA.length > 11) {
      inputA = inputA.substring(0, 16);
  }
}

function limitInputB() {
  if(inputB.length > 11) {
      inputB = inputB.substring(0, 16);
  }
}

numButton.forEach((numButton) => {
  numButton.addEventListener('click', () => {
     if (result) {
       clearAll();
     } 
     if (operator === '') {
      inputA += numButton.textContent;
      limitInputA();
      digits.textContent = inputA;
      console.log(inputA); 
    } else {
      inputB += numButton.textContent;
      limitInputB();
      digits.textContent = inputB;
      console.log(inputB);
    }
  });
});


opButton.forEach((opButton) => {
  opButton.addEventListener('click', () => {
    if (inputB) {
      numA = parseFloat(inputA);
      numB = parseFloat(inputB);
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
  numA = parseFloat(inputA);
  numB = parseFloat(inputB);
  if (inputA ==='') {
    digits.textContent = '0';
  } else if (numA && operator === '' && inputB === '') {
    result = numA;
    digits.textContent = result;
  } else if (numA && operator && inputB === '') {
    numB = numA;
    operate(operator, numA, numB);
    digits.textContent = result;
    inputB = numB;
  } else if (result && operator) {
    numA = result;
    operate(operator, numA, numB);
    digits.textContent = result;
  } else if (operator === '/' && numB === 0) {
    result = 'always and forever'
    digits.textContent = result;
  } else if ((numA === 0 && operator === '/') || ((numA === 0 || numB === 0) && (operator === 'x'))) {
    result = 0;
    digits.textContent = result;
  } else if (isNaN(numB)) {
    digits.textContent = 'having trouble?';
  } else if (numA && operator && numB) {
    operate(operator, numA, numB);
     if (result.toString().length > 16) {
        result = 'that\'s too hard';
        digits.textContent = result;
        } else digits.textContent = result;
  } else {
    digits.textContent = '???';
  }
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
  } else if (operator === '/') {
    divide(numA, numB);
    return result;
  }
}

function add(numA, numB) {
  if ((numA + numB).isInteger) {
    result = (numA + numB)
  } else {
    result = (numA + numB).toFixed(10) * 1
  }
};

function subtract(numA, numB) {
  if ((numA - numB).isInteger) {
    result = (numA - numB)
  } else {
    result = (numA - numB).toFixed(10) * 1
  }
};

function multiply(numA, numB) {
  if ((numA * numB).isInteger) {
    result = (numA * numB)
  } else {
    result = (numA * numB).toFixed(10) * 1
  }
};

function divide(numA, numB) {
  if ((numA / numB).isInteger) {
    result = (numA / numB)
  } else {
    result = (numA / numB).toFixed(10) * 1
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
  decimal.addEventListener('click', clickOnce);
  console.log(inputA, inputB, operator);
}
