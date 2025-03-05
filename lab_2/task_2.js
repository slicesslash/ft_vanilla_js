import { runTests } from "../utilities.js";

function greet(name , rank = 'private') {
  return `Hello, ${rank} ${name} 🤺.`
}

const testCases = [
  ['Uri'],
  ['Coc', 'Kluw'],
  ['(ˉ﹃ˉ)', '(((φ(◎ロ◎;)φ)))']
]

runTests(greet, testCases);