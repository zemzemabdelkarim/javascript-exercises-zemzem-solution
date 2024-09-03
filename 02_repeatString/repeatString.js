const repeatString = function(stringToRepete, numberOfTimes) {
    if( numberOfTimes < 0 ){
        return 'ERROR';
    }
    let stringRepeated = '';
    for( let i = 0; i < numberOfTimes; i++ ){
        stringRepeated += stringToRepete;
    }
    return stringRepeated;
};

// Do not edit below this line
module.exports = repeatString;
