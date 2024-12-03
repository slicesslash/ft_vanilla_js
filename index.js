function isPrime(number) {
  for (let i = 2; i*i <= number; ++i) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function updateResult(value) {
  const result = document.getElementById('result');
  result.textContent = `number ${value} → ${isPrime(value) ? "prime" : "composite"}`;
}

updateResult(2);
document
  .getElementById("input")
  .addEventListener('change', e => updateResult(e.target.value));
