const numDisplay = document.querySelector('#display');
const digits = document.createTextNode('0');
digits.className = 'text';
numDisplay.appendChild(digits);


const numButton = document.querySelectorAll('.number');
const opButton = document.querySelectorAll('.operator');
const clear = document.querySelector('#clear');
clear.onclick = () => clearAll();

const decimal = document.querySelector('#decimal');
const negButton = document.querySelector('#posNeg');
const percent = document.querySelector('#percent');
const equals = document.querySelector('#equals');
const backspace = document.querySelector('#backspace');

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


decimal.addEventListener('click', clickOnce);
function removeHandler() {
  decimal.removeEventListener('click', clickOnce);
}
function clickOnce() {
  if (operator === '' && (!inputA.includes('.'))) {
    inputA += '.';
    digits.textContent = inputA;
  } else if (operator && (!inputB.includes('.'))) {
    inputB += '.';
    digits.textContent = inputB;
  } else {
   removeHandler();
 }
}

percent.addEventListener('click', () => {
  if (inputA && operator ==='') {
    inputA = parseFloat(inputA) / 100;
    digits.textContent = inputA; 
  } else if (inputB) {
    inputB = parseFloat(inputB) / 100;
    digits.textContent = inputB; 
  }   
});

backspace.addEventListener('click', () => {
  digits.textContent.slice(-1);
  if (inputA && operator ==='') {
      inputA = inputA.slice(0, -1);
      digits.textContent = inputA;
  } else if (inputB) {
      inputB = inputB.slice(0, -1);
      digits.textContent = inputB; 
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
    if (operator === '') {
      inputA += numButton.textContent;
      limitInputA();
      digits.textContent = inputA;
      console.log(inputA);
    } else {
      inputB += numButton.textContent;
      limitInputB()
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
  if (inputA ==='' && inputB ==='') {
    digits.textContent = '0';
  } else if (numA && operator ==='' && inputB === '') {
    result = numA;
    digits.textContent = result;
  } else if (operator === '÷' && numB === 0) {
    result = 'always and forever'
    digits.textContent = result;
  } else if (numA === 0 && operator ==='÷') {
    result = 'Really?';
    digits.textContent = result;
  } else if (numA && numB) {
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
  } else if (operator === '÷') {
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
