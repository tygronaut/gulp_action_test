export function add(a, b) {
  return a + b;
};

export function multiply(a, b) {
  return a * b;
};

export function subtract(a, b) {
  return a - b;
};

export function divide(a, b) {
  return a / b;
};

export function fibonacci(length) {
  var sequence = [0, 1];
  for (var i = 2; i <= length; ++i) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
};
