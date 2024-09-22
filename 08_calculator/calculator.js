const add = function (x, y) {
    return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  return arr.reduce((total, current)=>{
    return total + current;
  },0);
};

const multiply = function (arr) {
  return arr.reduce((total, current)=>{
    return total * current;
  }, 1);
};

const power = function (x, y) {
  return Math.pow(x, y);
};

const factorial = function (x) {
  if(x < 0){
    return 'ERROR';
  }
  let fact = 1;
  for(let i = 2; i <= x ; i++){
    fact*=i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
