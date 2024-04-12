import { prompt } from "./helper.js";

const LIMIT = 100000000000000;

function promptOperator() {
  const operator = Number(prompt("\n> Enter the operator : "));
  if (operator !== 1 && operator !== 2 && operator !== 3 && operator !== 4) {
    console.log("Operator must be 1, 2, 3 or 4, retry !");
    return promptOperator();
  }
  return operator;
}

function promptNumber(message) {
  const number = Number(prompt(message));
  validateNumberOrExitTheProgramme(number);
  return number;
}

function validateNumberOrExitTheProgramme(number) {
  if (Number.isNaN(number) || Math.abs(number) > LIMIT) {
    console.log(
      `Error : it's not a number or is too big / too small (max: ${LIMIT})`
    );
    process.exit(1);
  }
}

function calculateResult(operator, firstNumber, secondNumber) {
  if (operator === 1) {
    console.log(
      "\nThe result of the addition is : ",
      firstNumber + secondNumber
    );
    return;
  }

  if (operator === 2) {
    console.log(
      "\nThe result of the subtraction is : ",
      firstNumber - secondNumber
    );
    return;
  }

  if (operator === 3) {
    console.log(
      "\nThe result of the multiplication is : ",
      firstNumber * secondNumber
    );
    return;
  }
  if (operator === 4) {
    if (secondNumber === 0) {
      console.log("Error : division by 0");
      process.exit(1);
    }
    console.log(
      "\nThe result of the division is : ",
      firstNumber / secondNumber
    );
    return;
  }
}

console.log("ADDITION-MASTER ™️");

console.log(`
Choose an operator :
1. Addition
2. Subtraction
3. Multiplication
4. Division`);

const operator = promptOperator();
const firstNumber = promptNumber("> Enter the first number : ");
const secondNumber = promptNumber("> Enter the second number : ");

calculateResult(operator, firstNumber, secondNumber);
