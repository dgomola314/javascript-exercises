const convertToCelsius = function(temp) {
  const newTemp = (temp - 32) * (5 / 9);

  return +newTemp.toFixed(1);
};

const convertToFahrenheit = function(temp) {
  const newTemp = temp * (9 / 5) + 32;

  return +newTemp.toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
