import { runTests } from "../utilities.js";

function factorial(number) {
  if(number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

const testCases = [1, 2, 3, 4, 5, 6, 7, 8];

runTests(factorial, testCases);