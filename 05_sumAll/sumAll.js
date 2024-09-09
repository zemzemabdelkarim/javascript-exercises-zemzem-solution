const sumAll = function (...values) {
    console.log(values.length);
    
  if (values.length > 2) {
    return "ERROR";
  } else if (!( typeof(values[0]) == 'number') || !( typeof(values[1]) == 'number')) {
    return "ERROR";
  } else if (
    parseInt(values[0]) !== values[0] ||
    parseInt(values[1]) !== values[1]
  ) {
    return "ERROR";
  }else if ( values[0] < 0 || values[1] < 0 ){
    return 'ERROR';
  }

  if( values[0] === values[1] ){
    //if the same value is provided so the some is 0
    return 0;
  }else if( values[0] > values[1] ){
    //swap the first value and the last value to put the smaller one at the beginning
    values[0] = values[0] + values[1];
    values[1] = values[0] - values[1];
    values[0] = values[0] - values[1];
  }
  let sum  = 0;
  for( let i = values[0]; i < values[1] + 1 ; i++ ){
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
