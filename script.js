const numDisplay = document.querySelector('#display');
const digits = document.createElement('p');
digits.textContent = '0';
numDisplay.appendChild(digits);

const numButton = document.querySelectorAll('.number');
const opButton = document.querySelectorAll('.operator');
const clear = document.querySelector('#clear');
clear.onclick = () => clearAll();

let inputA = '';
let operator = '';
let inputB = '';


// let inputA = prompt('enter one number'); 
// let numA = parseInt(inputA, 0);
// console.log(numA);
   
// // let operator = prompt('enter operator');
// console.log(operator);

// // let inputB = prompt('enter one number');
// let numB = parseInt(inputB, 0);
// console.log(numB);

// function add(numA, numB) {  
//     return (numA + numB);
//   };

// function subtract(numA, numB) {  
//     return (numA - numB);
//   };

// function multiply(numA, numB) {  
//     return (numA * numB);
//   };

// function divide(numA, numB) {  
//     return (numA / numB);
//   };

numButton.forEach((numButton) => {
    numButton.addEventListener('click', () => { 
    inputA += numButton.textContent;
    digits.textContent = inputA;

  });
});


opButton.forEach((opButton) => {
    opButton.addEventListener('click', () => { 
    operator = opButton.textContent;
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
     });
   });
}


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

  
// operate(numA, numB, operator);


function operate(numA, numB, operator) {
    if (operator === '+'){
       console.log(add(numA, numB));  
    } else if (operator === '-'){
       console.log(subtract(numA, numB));
    } else if (operator === '*'){
       console.log(multiply(numA, numB));
    } else if (operator === '/'){
       console.log(divide(numA, numB));
 }
}



// const array = Array.from(input); 
// const newArray = [];

// array.forEach(item => {
//     newArray.push(parseInt(item));
// });


// function add(numA, numB) {
//    const array = args[0]; 
//    const sumValue = array.reduce(
//     (numA, numB) => numA + numB,
//   ); 
//     return sumValue;
// }

// console.log(add(numA, numB));


// function subtract(a,b) {
//     const diffValue = newArray.reduce(
//         (a, b) => a - b,
//       ); 
//         return diffValue;
// }

// console.log(subtract(newArray));


// function mulitply(newArray) {
//     const productValue = newArray.reduce(
//         (a, b) => a * b,
//       ); 
//         return productValue;    
// }

// console.log(mulitply(newArray));


// function divide() {
//     const dividedValue = newArray.reduce(
//         (a, b) => a / b,
//       ); 
//         return dividedValue;       
// }

// console.log(divide(newArray));
 
// const operators = ['+', '-', '*', '/'];

