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

let newnumber = operate("/", 5, 5)
console.log(newnumber)