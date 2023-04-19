
// // let equal_pressed = 0;

// // let button_input = document.querySelectorAll(".item");

// // let display = document.getElementById(".display");
// // let equal = document.getElementById("equals");
// // let clear = document.getElementById("clear");
// // // let erase = document.getElementById('erase');

// // window.onload = () => {
// //     display.value = "";
// // };

// // button_input.forEach((button_class) => {
// //     button_class.addEventListener("click", () => {
// //         if(equal_pressed == 1){
// //             display.value = "";
// //             equal_pressed = 0;
// //         }
// //         display.value += button_class.value;
// //     });
// // });

// // equal.addEventListener ("click",() => {
// //     equal_pressed = 1;
// //     let inp_val = display.value;
// //     try {
// //         let solution = eval(inp_val);
// //         if(Number.isInteger(solution)) {
// //             display.value = solution;
// //         } else {
// //             display.value = solution.toFixed(2);
// //         }
// //     } catch (err) {
// //         alert("Invalid Input")
// //     }
// // });

// //  clear.addEventListener("click", () => {
// //     display.value = "";
// //  });
 
// //  erase.addEventListener("click", () => {
// //     display.value = input.value.substr(0, input.value.length - 1);
// //  });

// let equal_pressed = 0;
// //Refer all buttons excluding AC and DEL
// let button_input = document.querySelectorAll(".item");
// //Refer input,equal,clear and erase
// let input = document.getElementById(".input");
// let equal = document.getElementById(".equal");
// let clear = document.getElementById(".clear");
// // let erase = document.getElementById("erase");

// window.onload = () => {
//   input.value = "";
// };

// //Access each class using forEach
// button_input.forEach((button_class) => {
//   calculator_class.addEventListener("click", () => {
//     if (equal_pressed == 1) {
//       input.value = "";
//       equal_pressed = 0;
//     }
//     //display value of each button
//     input.value += calculator_class.value;
//   });
// });

// //Solve the user's input when clicked on equal sign
// equal.addEventListener("click", () => {
//   equal_pressed = 1;
//   let inp_val = input.value;
//   try {
//     //evaluate user's input
//     let solution = eval(inp_val);
//     //True for natural numbers
//     //false for decimals
//     if (Number.isInteger(solution)) {
//       input.value = solution;
//     } else {
//       input.value = solution.toFixed(2);
//     }
//   } catch (err) {
//     //If user has entered invalid input
//     alert("Invalid Input");
//   }
// });

// //Clear Whole Input
// clear.addEventListener("click", () => {
//   input.value = "";
// });
// //Erase Single Digit
// // erase.addEventListener("click", () => {
// //   input.value = input.value.substr(0, input.value.length - 1);
// // });


// let equal_pressed = 0;
// //Refer all buttons excluding AC and DEL
// let button_input = document.querySelectorAll(".item");
// //Refer input,equal,clear and erase
// let input = document.getElementById("input");
// let equal = document.getElementById("equal");
// let clear = document.getElementById("clear");
// // let erase = document.getElementById("erase");

// window.onload = () => {
//   input.value = "";
// };

// //Access each class using forEach
// button_input.forEach((button_class) => {
//   button_class.addEventListener("click", () => {
//     if (equal_pressed == 1) {
//       input.value = "";
//       equal_pressed = 0;
//     }
//     //display value of each button
//     input.value += button_class.value;
//   });
// });

// //Solve the user's input when clicked on equal sign
// equal.addEventListener("click", () => {
//   equal_pressed = 1;
//   let inp_val = input.value;
//   try {
//     //evaluate user's input
//     let solution = eval(inp_val);
//     //True for natural numbers
//     //false for decimals
//     if (Number.isInteger(solution)) {
//       input.value = solution;
//     } else {
//       input.value = solution.toFixed(2);
//     }
//   } catch (err) {
//     //If user has entered invalid input
//     alert("Invalid Input");
//   }
// });

// //Clear Whole Input
// clear.addEventListener("click", () => {
//   input.value = "";
// });
// //Erase Single Digit
// // erase.addEventListener("click", () => {
// //   input.value = input.value.substr(0, input.value.length - 1);
// // });

// Get the calculator screen and buttons
const screen = document.getElementById('input');
const resultScreen = document.getElementById('result');
const buttons = document.querySelectorAll('.item');

let firstOperand = '';
let secondOperand = '';
let operator = '';
let result = '';

// Add click event listeners to all the calculator buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;
        handleInput(buttonValue);
    });
});

// Function to handle user input
function handleInput(value) {
    // Clear the screen if 'C' is pressed
    if (value === 'C') {
        clearScreen();
        return;
    }
    // Handle decimal input
    if (value === '.') {
        if (screen.value.includes('.')) {
            return;
        }
    }
    // Handle numeric input
    if (!isNaN(value)) {
        if (operator === '') {
            firstOperand += value;
            screen.value = firstOperand;
        } else {
            secondOperand += value;
            screen.value = secondOperand;
        }
    }
    // Handle operator input
    if (['+', '-', '*', '/', '%'].includes(value)) {
        if (secondOperand !== '') {
            calculate();
        }
        operator = value;
    }
    // Handle equals input
    if (value === '=') {
        calculate();
        operator = '';
    }
}

// Function to clear the screen
function clearScreen() {
    screen.value = '0';
    resultScreen.value = '';
    firstOperand = '';
    secondOperand = '';
    operator = '';
    // result = '';
}

// Function to perform the calculation
function calculate() {
    let num1 = parseFloat(firstOperand);
    let num2 = parseFloat(secondOperand);
    let tempResult = '';

    switch (operator) {
        case '+':
            tempResult = num1 + num2;
            break;
        case '-':
            tempResult = num1 - num2;
            break;
        case '*':
            tempResult = num1 * num2;
            break;
        case '/':
            tempResult = num1 / num2;
            break;
        case '%':
            tempResult = num1 % num2;
            break;
        default:
            break;
    }
    // Handle division by zero
    if (tempResult === Infinity || tempResult === -Infinity) {
        result = 'Error: Cannot divide by zero';
        resultScreen.value = result;
        clearScreen();
        return;
    }
    // Handle floating point errors
    result = Math.round(tempResult * 100000) / 100000;
    resultScreen.value = result;
    clearScreen();
}
