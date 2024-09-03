const reverseString = function(stringToReverse) {
    let charArray = stringToReverse.split('');
    let char = '';
    for(let i = 0 ; i < charArray.length / 2 ; i++){
        char = charArray[i];
        charArray[i] = charArray[charArray.length-i-1];
        charArray[charArray.length-i-1] = char;
    }
    return charArray.join('');
};

//second solution
const reverseString2 = function(stringToReverse){
    let arrayToReverse = stringToReverse.split('');
    let reversedString = '';
    while( arrayToReverse.length != 0 ){
        reversedString += arrayToReverse.pop();
    }
    return reversedString;
}
// Do not edit below this line
module.exports = reverseString;
