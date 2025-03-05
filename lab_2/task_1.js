import { runTests } from "../utilities.js";

function multiplyTwoLargestNumbers(num1, num2, num3) {
  const sorted = [num1, num2, num3].sort((a, b) => a - b);
  return sorted[1] * sorted[2];
}

const testCases = [
  [1, 2, 3],
  [10, 2, 4],
  [-1, 0, 1],
  [-1, -10, 26],
  [15, 16, -21]
];

runTests(multiplyTwoLargestNumbers, testCases);