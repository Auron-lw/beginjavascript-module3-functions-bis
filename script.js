import { prompt } from "./helper.js";

console.log("ADDITION-MASTER ™️");

console.log(`
Choose an operator :
1. Addition
2. Subtraction
3. Multiplication
4. Division`);

const LIMIT = 100000000000000;

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

let operator = 0;

while (operator === 0) {
  const tempOperator = promptNumber("\n> Enter the operator : ");

  if (
    tempOperator !== 1 &&
    tempOperator !== 2 &&
    tempOperator !== 3 &&
    tempOperator !== 4
  ) {
    console.log("\nError : operator is not 1, 2, 3 or 4 ! Retry.");
  } else {
    operator = tempOperator;
  }
}

const firstNumber = promptNumber("> Enter the first number : ");
const secondNumber = promptNumber("> Enter the second number : ");

switch (operator) {
  case 1:
    console.log("The result of addition is : ", firstNumber + secondNumber);
    break;
  case 2:
    console.log("The result of subtraction is : ", firstNumber - secondNumber);
    break;
  case 3:
    console.log(
      "The result of multiplication is : ",
      firstNumber * secondNumber
    );
    break;
  case 4:
    if (operator === 4 && secondNumber === 0) {
      console.log("Error : division by 0");
      process.exit(1);
    }
    1;
    console.log("The result of division is : ", firstNumber / secondNumber);
    break;
}
