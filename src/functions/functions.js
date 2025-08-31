const add = function (a, b) {
  return a + b;
};

const multiply = function (a, b) {
  return a * b;
};

const subtract = function(a, b) {
  return a - b;
};

const divide = function(a, b) {
  return a / b;
};

const fibonacci = function (length) {
  var sequence = [0, 1];
  for (var i = 2; i <= length; ++i) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
};

module.exports = {add, multiply, subtract, divide, fibonacci};
