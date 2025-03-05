import { runTests } from "../utilities.js";

function invokeFunction(func, params) {
  return func(...params);
}

const subtract = function(a, b) {
  return a - b;
};

const testCases = [
  [(a, b) => a * b, [2, 5]],
  [n => n ** 2, [88]],
  [subtract, [4, 7]],
];

runTests(invokeFunction, testCases);