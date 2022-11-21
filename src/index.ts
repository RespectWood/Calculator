import { add, divide, multiply, subtract } from "./math";

const displayEL = document.getElementById("display") as HTMLOutputElement;
const clearBtn = document.getElementById("clear");
const numberBtns = document.querySelectorAll(".numbers");
const operateBtns = document.querySelectorAll(".operators");
const equalsBtn = document.getElementById("equals");

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
}

// user input stored as strings
let number1: any[] = [];
let number2: any[] = [];
let operatorChoice = "";

let savedCalculation: any = 0;

let isEqualsBtnPressed = false;

// "=" button for result - executes string - num converstion, invoke operate function for solution
equalsBtn?.addEventListener("click", () => {
  let sum: any = "";
  let joinString1 = number1.join("");
  let joinString2 = number2.join("");
  let stringToCalc1 = Number(joinString1);
  let stringToCalc2 = Number(joinString2);
  if (!isEqualsBtnPressed) {
    sum = operate(operatorChoice, stringToCalc1, stringToCalc2);
    savedCalculation = sum;
  }
  if (isEqualsBtnPressed) {
    sum = operate(operatorChoice, savedCalculation, stringToCalc2);
    savedCalculation = sum;
  }
  displayEL.value = sum as unknown as string;
  number1 = [];
  number2 = [];
  isEqualsBtnPressed = true;
});

// clear display and user-input
clearBtn?.addEventListener("click", () => {
  displayEL.value = " ";
  number1 = [];
  number2 = [];
  operatorChoice = "";
  isOperatorClicked = false;
  isEqualsBtnPressed = false;
});

let isOperatorClicked = false;

numberBtns?.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    displayEL.value += (e.target as HTMLButtonElement).value;
    let clickedNumber = (e.target as HTMLButtonElement).value;
    // let stringToNumber = Number(clickedNumber);
    if (!isOperatorClicked) {
      number1.push(clickedNumber);
    }
    if (isOperatorClicked) {
      number2.push(clickedNumber);
    }
    console.log(number1);
    console.log(number2);
  });

  operateBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      operatorChoice = (e.target as HTMLButtonElement).value;
      displayEL.value += (e.target as HTMLButtonElement).value;
      console.log(operatorChoice);
      isOperatorClicked = true;
    });
  });
});
