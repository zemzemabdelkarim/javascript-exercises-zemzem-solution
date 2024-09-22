const checkChar = function (char) {
    switch (char) {
        case " ":
            return true;
        case ".":
            return true;
        case ",":
            return true;
        case "!":
            return true;
        case "?":
            return true;
        default:
            return false;
    }
};

const palindromes = function (str) {
    strArray = str
        .toLowerCase()
        .split("")
        .filter((item) => {
            return !checkChar(item);
        });

    for (let i = 0; i < strArray.length / 2; i++) {
        j = strArray.length - i - 1;
        console.log(`length = ${strArray.length}, i = ${i}, j = ${j}`);
        if (strArray[i] !== strArray[j]) {
            console.log("spposed to break");
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
