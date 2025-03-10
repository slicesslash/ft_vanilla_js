import { runTests } from "../utilities.js";

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let divider = 2; divider ** 2 <= number; ++divider) {
    if (number % divider === 0) {
      return false;
    }
  }
  return true;
}

const testCases = [-1, 0, 1, 2, 3, 3334, 975, 10000001];
runTests(isPrime, testCases);


