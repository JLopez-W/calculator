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
let operator ='';
let inputB = '';
let numA;
let numB;
let sum;
let finalResult = 0;



numButton.forEach((numButton) => {
    numButton.addEventListener('click', () => { 
      if (operator === ''){
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
    operator = opButton.textContent;
    });
  });


equals.addEventListener('click', () => {
    numA = parseInt(inputA, 0);
    numB = parseInt(inputB, 0);
    operate(operator, numA, numB);
    checkResult();
    digits.textContent = finalResult;
    console.log(finalResult);
  });


function operate(operator, numA, numB) {

    if (operator === '+'){
       add(numA, numB); 
       return sum;
    } else if (operator === '-'){
       subtract(numA, numB);
    } else if (operator === '*'){
       multiply(numA, numB);
    } else if (operator === '/'){
       divide(numA, numB);
    }
}

function add(numA, numB) {  
  sum = (numA + numB);
 };

function subtract(numA, numB) {  
   return result = (numA - numB);
 };

function multiply(numA, numB) {  
   return result = (numA * numB);
 };

function divide(numA, numB) {  
   return result = (numA / numB);
 };

function checkResult() {
  return finalResult += sum;
 }

function clearDisplay() {
  digits.textContent ='';
}

function clearAll() {
  inputA ='';
  inputB ='';
  operator ='';
  result = 0;
  digits.textContent ='0';
  console.log(inputA, inputB, operator);
}


