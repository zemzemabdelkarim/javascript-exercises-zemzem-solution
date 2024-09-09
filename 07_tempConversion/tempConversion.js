const convertToCelsius = function(tempFah) {
  let tempCel = Number( ((tempFah - 32)*5/9).toFixed(1) ) ;
  return tempCel;
};

const convertToFahrenheit = function(tempCel) {
  let tempFah = Number( ((tempCel * (9/5) )+ 32).toFixed(1) , 2) ;
  return tempFah;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
