const repeatString = function(string, num) {
    let newString = string;

    if (num > 0) {
        for (i = 1; i < num; i++) {
            newString += string;
        }
    
        return newString;
    } else if (num === 0) {
        return "";
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
