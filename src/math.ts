export function add(a: number, b: number) {
  return a + b;
}

export function subtract(a: number, b: number) {
  return a - b;
}

export function multiply(a: number, b: number) {
  return a * b;
}
export function divide(a: number, b: number) {
  return a / b;
}

export function powerOf(a: number, b: number) {
  return Math.pow(a, b);
}

export function precisionRound(number: number, precision: number) {
  const factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}
