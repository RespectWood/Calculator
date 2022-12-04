import {
  add,
  divide,
  multiply,
  powerOf,
  precisionRound,
  subtract,
} from "./math";
import { assertIsOperator, Operator } from "./operator";

const displayEL = document.getElementById("display") as HTMLOutputElement;
const clearBtn = document.getElementById("clear");
const numberBtns = document.querySelectorAll(".numbers");
const operateBtns = document.querySelectorAll(".operators");
const enterBtn = document.getElementById("enter");
const dotBtn = document.getElementById("dot") as HTMLButtonElement;

// math
function operate(operator: Operator, a: number, b: number) {
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
    if (b === 0) {
      throw new Error("Illegal divide by 0.");
    }
    return divide(a, b);
  }

  if (operator === "^") {
    return powerOf(a, b);
  }
  throw Error();
}

// user input stored as strings
const numbersPreOperator: string[] = [];
const numbersPostOperator: string[] = [];
let operatorChoice: Operator | "" = "";

let savedCalculation = 0;

let isEnterBtnPressed = false;

// clear function
function clearCalculator() {
  displayEL.value = " ";
  numbersPreOperator.splice(0);
  numbersPostOperator.splice(0);
  operatorChoice = "";
  isOperatorClicked = false;
  isEnterBtnPressed = false;
  dotBtn.disabled = false;
}

function numberFromStringArray(str: string[]) {
  return Number(str.join(""));
}

// Enter button for result - executes string - num converstion, invoke operate function for solution
enterBtn?.addEventListener("click", () => {
  if (operatorChoice == "" || !isOperatorClicked) {
    return;
  }
  const x = numberFromStringArray(numbersPreOperator);
  const y = numberFromStringArray(numbersPostOperator);

  savedCalculation = isEnterBtnPressed
    ? operate(operatorChoice, savedCalculation, y)
    : operate(operatorChoice, x, y);

  const displayNumber = precisionRound(savedCalculation, 3);
  displayEL.value = displayNumber.toString();

  numbersPreOperator.splice(0);
  numbersPostOperator.splice(0);
  isEnterBtnPressed = true;

  dotBtn.disabled = displayNumber - Math.floor(displayNumber) !== 0;
});

let isOperatorClicked = false;

numberBtns?.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    displayEL.value += (e.target as HTMLButtonElement).value;
    const clickedNumber = (e.target as HTMLButtonElement).value;

    if (isOperatorClicked) {
      numbersPostOperator.push(clickedNumber);
      return;
    } else {
      numbersPreOperator.push(clickedNumber);
    }
  });
  dotBtn.disabled = false;
});

operateBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const choice = (e.target as HTMLButtonElement).value;
    assertIsOperator(choice);
    operatorChoice = choice;

    displayEL.value += (e.target as HTMLButtonElement).value;
    isOperatorClicked = true;
    dotBtn.disabled = false;
  });
});

// clear display and user-input
clearBtn?.addEventListener("click", () => {
  clearCalculator();
});

dotBtn?.addEventListener("click", () => {
  dotBtn.disabled = true;
});
