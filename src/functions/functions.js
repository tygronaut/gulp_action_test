function add(a, b) {
  return a + b;
};

function multiply(a, b) {
  return a * b;
};

function subtract(a, b) {
  return a - b;
};

function divide(a, b) {
  return a / b;
};

function fibonacci(length) {
  var sequence = [0, 1];
  for (var i = 2; i <= length; ++i) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
};

module.export = {add, multiply, subtract, divide, fibonacci};
