export function runTests(func, testCases) {
  const isFlat = !testCases.some(Array.isArray);
  testCases.forEach(isFlat
  ? testCase => console.log(func(testCase))
  : testCase => console.log(func(...testCase))
  )
}
