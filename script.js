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


function limitInputA() {
  if(inputA.length > 11) {
      inputA = inputA.substring(0, 12);
  }
}

function limitInputB() {
  if(inputB.length > 11) {
      inputB = inputB.substring(0, 12);
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
    result = 'Really? \n If you have ZERO cookies to share with your friends, \n how many cookies does everyone get?';
    digits.textContent = result;
  } else if (numA && numB) {
    operate(operator, numA, numB);
    digits.textContent = result;
    console.log(result);
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
