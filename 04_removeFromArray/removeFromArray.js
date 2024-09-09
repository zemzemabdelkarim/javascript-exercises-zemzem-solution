const removeFromArray = function (array) {
  console.log(arguments.length);

  for (let j = 1; j < arguments.length; j++) {
    let value = arguments[j];
    let valuePosition = array.indexOf(value);
    if( valuePosition === array.length -1 ){
        array.pop();
        continue;
    }
    while (valuePosition >= 0) {
      console.log(`array = ${array}`);
      console.log(`value = ${value}\nvaluePosition = ${valuePosition}`);

      for (let i = valuePosition; i < array.length - 1; i++) {
        array[i] = array[i + 1];
      }

      array.pop();
      console.log(array);
      valuePosition = array.indexOf(value);
    }
    console.log(array);
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
