export type Operator = "+" | "-" | "/" | "*" | "^";
export function isOperator(thing: unknown): thing is Operator {
  return (
    thing === "+" ||
    thing === "-" ||
    thing === "/" ||
    thing === "*" ||
    thing === "^"
  );
}
export function assertIsOperator(thing: unknown): asserts thing is Operator {
  if (!isOperator(thing)) {
    throw new Error("AssertionError, the thing is not an operator.");
  }
}
