const repeatString = function(string, number) {
    let repeatString = "";
    let negativeTest = number.toString();
    if (negativeTest.charAt(0) == '-'){
        return "ERROR"
    }
    for (let i = 0; i < number; i++ ){
        repeatString += string;
    }
    return repeatString;
}

module.exports = repeatString
