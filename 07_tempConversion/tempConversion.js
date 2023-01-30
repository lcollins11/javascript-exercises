const convertToCelsius = function(fahrenheit) {
  return (fahrenheit-32)*0.5556;
};

const convertToFahrenheit = function(celsius) {
  return (celsius*1.8)+32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
