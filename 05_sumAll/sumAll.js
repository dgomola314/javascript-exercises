const sumAll = function(num1, num2) {
    let sum = 0;

    if (typeof num1 === "number" && typeof num2 === "number" && Number.isInteger(num1, num2) && num1 >=0 && num2 >= 0) {
        if (num1 <= num2) {
            for (i = num1; i <= num2; i++) {
                sum += i;
            }
    
            return sum;
        } else if (num1 > num2) {
            for (i = num1; i >= num2; i--) {
                sum += i;
            }
    
            return sum;
        }
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
