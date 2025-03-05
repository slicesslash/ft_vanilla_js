import { runTests } from "../utilities.js";

function squareEvenCubeOdd(number) {
  if (number % 2 === 0) {
    return x => x ** 2;
  }
  return x => x ** 3;
}

function wrapper(a, b) {
  return squareEvenCubeOdd(a)(b);
}

const testCases = [
  [1, 2],
  [2, 15],
  [-1, 22],
];

runTests(wrapper, testCases);