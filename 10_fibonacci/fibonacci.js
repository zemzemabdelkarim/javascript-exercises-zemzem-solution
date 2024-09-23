const fibonacci = function (x) {
    let firstNumber = 0;
    let secondNumber = 1;
    if(typeof(x) !== 'Number'){
        x = parseInt(x);
    }

    if (x < 0) {
        return "OOPS";
    } else if (x === 1) {
        return 1;
    } else if (x === 2) {
        return 1;
    } else if (x === 0) {
        return 0;
    }

    
    let fibo = 2;
    for (let i = 2; i <= x; i++) {
        fibo = secondNumber + firstNumber;
        firstNumber = secondNumber;
        secondNumber = fibo;
    }
    return fibo;
};

// Do not edit below this line
module.exports = fibonacci;
