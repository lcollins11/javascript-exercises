const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  if(array.length == 0){
    return 0;
  }
	return array.reduce((a, b) => a+b);
};

const multiply = function(array) {
  return array.reduce((a, b) => a*b);
};

const power = function(a, b) {
  let result = a;
	for(let i = 2; i <= b; i++){
    result *= a;
  }
  return result;
};

const factorial = function(a) {
	let result = a;
  if(a === 0 || a === 1){
    return 1;
  }
  while(a > 1){
    a--;
    result *= a;
  }
  return result;
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
