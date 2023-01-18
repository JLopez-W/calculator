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
let numA = null;
let numB = null;
let result = null;
let temp1 = '';
let temp2 = '';
let equalsClicked = false;
let lastButton = '';
let newFirst = '';


numButton.forEach((numButton) => {
  numButton.addEventListener('click', () => {
    if ((equalsClicked === true && lastButton === 'numButton') || inputA.includes('o')) {
      // for 'clearing' to start new chain while number result or error message is visible
      newFirst = numButton.textContent;
      clearAll();
      digits.textContent = newFirst;
    } else if (newFirst) {
      // for continuing inputA for new chain started in 'if' condition
      inputA = newFirst;
      newFirst = '';
      inputA += numButton.textContent;
      limitInputA();
      digits.textContent = inputA;
      lastButton = 'numButton';
    } else if (equalsClicked === true && lastButton === 'numButton' && newFirst === '') {
      // for continuing new operation using previous equals result as inputA
      temp1 = result;
      temp2 = numButton.textContent;
      clearMost();
      inputA = temp1;
      inputB = temp2;
      digits.textContent = inputB;
      lastButton = 'numButton';
    } else if (operator === '') {
      // inputA from start, or after clearAll
      inputA += numButton.textContent;
      limitInputA();
      digits.textContent = inputA;
      lastButton = 'numButton';
    } else if (temp1 === inputA && temp2 === inputB) {
      // for chaining a result to new operator without equals between
      temp1 = numButton.textContent;
      clearMost();
      operator = '';
      inputA = temp1;
      digits.textContent = inputA;
      lastButton = 'numButton';
    } else if (operator) {
      // inputB after operator is clicked
      inputB += numButton.textContent;
      limitInputB();
      digits.textContent = inputB;
      lastButton = 'numButton';
    }
  });
});

opButton.forEach((opButton) => {
  opButton.addEventListener('click', () => { 
    lastButton = 'opButton';
    if (inputA.includes('o')) {
      // for clearing inputs when operator is first button clicked after message
      digits.textContent = 'enter numbers first';
      clearMost();
      operator = '';
    } else if (inputA === '' && inputB === '') {
      // first two 'else if' for starting new chain, not continuing from a result
      digits.textContent = 'enter numbers first';
    } else if (inputA && inputB === '') {
      operator = opButton.textContent;
    } else if (inputA && inputB && equalsClicked === false) {
      // for chaining operations before equals has been clicked
      temp1 += opButton.textContent;
      numA = parseFloat(inputA);
      numB = parseFloat(inputB);
      operate(numA, operator, numB);
      checkLength();
      digits.textContent = result;
      inputA = result;
      inputB = '';
      operator = temp1;
      temp1 = '';
    } else if (equalsClicked === true) {
      // for chaining operations after equals has been clicked
      result = inputA;
      inputB = '';
      digits.textContent = inputA;
      operator = opButton.textContent;
      equalsClicked = false;
    }
  });
});


equals.addEventListener('click', () => {
  numA = parseFloat(inputA);
  numB = parseFloat(inputB);
  if (inputA && operator && inputB === '') {
    numB = numA;
    operate(numA, operator, numB);
    checkLength();
    digits.textContent = result;
    moveInput();
  } else if (inputA && operator && inputB) {
    operate(numA, operator, numB);
    checkLength();
    digits.textContent = result;
    moveInput();
  }
  equalsClicked = true;
  temp1 = result;
});


posNegButton.addEventListener('click', () => {
  if (operator === '' || equalsClicked === true) {
    inputA = inputA.toString();
    if (inputA > 0) {
      inputA = '-' + inputA;
      clearForNeg();
    } else if (inputA < 0) {
      inputA = inputA.slice(1);
      clearForNeg();
    }
  } else if (equalsClicked === false) {
    inputB = inputB.toString();
    if (!inputB.includes('-')) {
      inputB = '-' + inputB;
    } else if (inputB.includes('-')) {
      inputB = inputB.slice(1);
    }
    digits.textContent = inputB;
  }

});

decimal.addEventListener('click', clickOnce);
function removeHandler() {
  decimal.removeEventListener('click', clickOnce);
}
function clickOnce() {
  if (operator === '' && (!inputA.includes('.'))) {
    if (inputA === '') {
      inputA += '0.';
    } else {
      inputA += '.';
    }
    digits.textContent = inputA;
  } else if (operator && (!inputB.includes('.'))) {
    if (inputB === '') {
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
  if (inputA && operator === '') {
    if (inputA !== null) {
      inputA = parseFloat(inputA) / 100;
      digits.textContent = inputA;
    }
  } else if (operator && inputB !== null) {
    inputB = parseFloat(inputB) / 100;
    digits.textContent = inputB;
  }
});


backspace.addEventListener('click', () => {
  if (inputA && inputB === '') {
    inputA = inputA.slice(0, -1);
    digits.textContent = inputA;
  } else if (inputB && equalsClicked === false) {
    inputB = inputB.slice(0, -1);
    digits.textContent = inputB;
  } else if (equalsClicked === true) {
    inputA = digits.textContent;
    inputA = inputA.slice(0, -1);
    digits.textContent = inputA;
    temp1 = inputA;
    clearMost();
    inputA = temp1;
  }
});


function limitInputA() {
  if (inputA.length > 11) {
    inputA = inputA.substring(0, 16);
  }
}

function limitInputB() {
  if (inputB.length > 11) {
    inputB = inputB.substring(0, 16);
  }
}

function operate(numA, operator, numB) {
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
  if (numB === 0) {
    result = 'no ♥';
  } else if ((numA / numB).isInteger) {
    result = (numA / numB)
  } else {
    result = (numA / numB).toFixed(10) * 1
  }
};

function clearAll() {
  inputA = '';
  operator = '';
  inputB = '';
  numA = null;
  numB = null;
  result = null;
  temp1 = '';
  temp2 = '';
  equalsClicked = false;
  lastButton = '';
  digits.textContent = '0';
  decimal.addEventListener('click', clickOnce);
}

function clearMost() {
  inputA = '';
  inputB = '';
  numA = null;
  numB = null;
  result = null;
  equalsClicked = false;
  decimal.addEventListener('click', clickOnce);
}

function moveInput() {
  temp1 = result;
  temp2 = numB;
  clearMost();
  inputA = temp1;
  inputB = temp2;
}

function clearForNeg() {
  inputB = '';
  numB = null;
  result = null;
  operator = '';
  digits.textContent = inputA;
}

function checkLength() {
  if (result.toString().length > 16 || result.toString().includes('e')) {
    result = 'that\'s too hard';
  }
  digits.textContent = result;
}