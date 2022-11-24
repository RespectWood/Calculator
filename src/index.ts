import { add, divide, multiply, powerOf, subtract } from "./math";

const displayEL = document.getElementById("display") as HTMLOutputElement;
const clearBtn = document.getElementById("clear");
const numberBtns = document.querySelectorAll(".numbers");
const operateBtns = document.querySelectorAll(".operators");
const enterBtn = document.getElementById("enter");

// execute math operation
function operate(operator: any, a: number, b: number) {
  if (operator === "+") {
    return add(a, b);
  }
  if (operator === "-") {
    return subtract(a, b);
  }
  if (operator === "*") {
    return multiply(a, b);
  }
  if (operator === "/") {
    return divide(a, b);
  }
  if (operator === "^") {
    return powerOf(a, b);
  }
}

// user input stored as strings
let number1: any[] = [];
let number2: any[] = [];
let operatorChoice = "";

let savedCalculation: any = 0;

let isEnterBtnPressed = false;

let blockEnterButton = true;

// Enter button for result - executes string - num converstion, invoke operate function for solution
enterBtn?.addEventListener("click", () => {
  if (blockEnterButton === true) {
    return;
  }
  let sum: any = "";
  let joinString1 = number1.join("");
  let joinString2 = number2.join("");
  let stringToCalc1 = Number(joinString1);
  let stringToCalc2 = Number(joinString2);
  if (!isEnterBtnPressed) {
    sum = operate(operatorChoice, stringToCalc1, stringToCalc2);
    savedCalculation = sum;
  }
  if (isEnterBtnPressed) {
    sum = operate(operatorChoice, savedCalculation, stringToCalc2);
    savedCalculation = sum;
  }
  displayEL.value = sum as unknown as string;
  number1 = [];
  number2 = [];
  isEnterBtnPressed = true;
});

let isOperatorClicked = false;

numberBtns?.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    displayEL.value += (e.target as HTMLButtonElement).value;
    let clickedNumber = (e.target as HTMLButtonElement).value;
    if (!isOperatorClicked) {
      number1.push(clickedNumber);
    }
    if (isOperatorClicked) {
      number2.push(clickedNumber);
    }
    console.log(clickedNumber);
  });
  blockEnterButton = false;
});

operateBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    operatorChoice = (e.target as HTMLButtonElement).value;
    displayEL.value += (e.target as HTMLButtonElement).value;
    console.log(operatorChoice);
    isOperatorClicked = true;
    blockEnterButton = false;
  });
});

// clear display and user-input
clearBtn?.addEventListener("click", () => {
  displayEL.value = " ";
  number1 = [];
  number2 = [];
  operatorChoice = "";
  isOperatorClicked = false;
  isEnterBtnPressed = false;
  blockEnterButton = true;
});
