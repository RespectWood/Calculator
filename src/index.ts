import { add, divide, multiply, subtract } from "./math"

type Operator = '+' | "-" | "*" | "/" 

function operate (operator: Operator, a: number, b: number ){
    if (operator === "+"){
        return add(a,b);
    }
    if (operator === "-"){
        return subtract(a,b);
    }
    if (operator === "*"){
        return multiply(a,b);
    }
    if (operator === "/"){
        return divide(a,b);
    }
}


let previousValue = ""
let currentValue = ""

const displayEL = document.getElementById("display") as HTMLOutputElement
const clearBtn = document.getElementById("clear")
const numberBtns = document.querySelectorAll(".numbers")


clearBtn?.addEventListener("click", () =>{
    displayEL.value = " ";
});


numberBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        displayEL.value = (e.target as HTMLButtonElement).value;
        currentValue = (e.target as HTMLButtonElement).value; 
    })
});


