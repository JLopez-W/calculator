const numDisplay = document.querySelector('#display');
const digits = document.createElement('p');
digits.textContent = '0';
numDisplay.appendChild(digits);

const numButton = document.querySelectorAll('.number');
const opButton = document.querySelectorAll('.operator');
const clear = document.querySelector('#clear');
clear.onclick = () => clearAll();

const equals = document.querySelector('#equals');
// equals.onclick = () => operate();

let inputA = '';
let operator = '';
let inputB = '';



numButton.forEach((numButton) => {
    numButton.addEventListener('click', () => { 
    inputA += numButton.textContent;
    digits.textContent = inputA;
    console.log(inputA);

  });
});



opButton.forEach((opButton) => {
    opButton.addEventListener('click', () => { 
    operator = opButton.textContent;
    console.log(operator);
    getInputB();
    });
  });


function getInputB() {        
      numButton.forEach((numButton) => {
        numButton.addEventListener('click', () => { 
            if (digits.textContent === inputA) {
                clearDisplay();
            }
        inputB += numButton.textContent;
        digits.textContent = inputB;
        console.log(inputB);
     });
   });
}

equals.addEventListener('click', () => {
    let numA = parseInt(inputA, 0);
    let numB = parseInt(inputB, 0);
    operate(numA, operator, numB);
   });

function clearDisplay() {
    digits.textContent ='';
}

function clearAll() {
    inputA ='';
    inputB ='';
    operator ='';
    digits.textContent ='0';
    console.log(inputA, inputB, operator);
}
 
let result;

function operate(numA, operator, numB) {

    if (operator === '+'){
       result = sum;
       
    } else if (operator === '-'){
       subtract(numA, numB);
    } else if (operator === '*'){
       multiply(numA, numB);
    } else if (operator === '/'){
       divide(numA, numB);
    }
    //  let final = String(result);
     digits.textContent = result;
    //  console.log(result);
}


let sum = function add(numA, numB) {  
    return (numA + numB); 
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
 

// operate(numA, numB, operator);

