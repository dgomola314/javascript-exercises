const add = function() {
	return arguments[0] + arguments[1];
};

const subtract = function() {
	return arguments[0] - arguments[1];
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current, 1);
};

const power = function() {
	return arguments[0] ** arguments[1];
};

const factorial = function(n) {
  let product = 1;

	if (n === 0) {
    product = 1;
  } else {
    for (let i = n; i > 0; i--) {
      product *= i;
    }
  }

  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
