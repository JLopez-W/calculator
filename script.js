const numDisplay = document.querySelector('#display');
numDisplay.textContent = '0';

// let inputA = prompt('enter one number'); 
let numA = parseInt(inputA, 0);
console.log(numA);
   
// let operator = prompt('enter operator');
console.log(operator);

// let inputB = prompt('enter one number');
let numB = parseInt(inputB, 0);
console.log(numB);

function add(numA, numB) {  
    return (numA + numB);
  };

function subtract(numA, numB) {  
    return (numA - numB);
  };

function multiply(numA, numB) {  
    return (numA * numB);
  };

function divide(numA, numB) {  
    return (numA / numB);
  };

  
operate(numA, numB, operator);


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

