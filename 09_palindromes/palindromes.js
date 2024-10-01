const palindromes = function (string) {
    const alphanumerical = "qwertyuiopasdfghjklzxcvbnm0123456789";

    const newString = string
        .toLowerCase()
        .split("")
        .filter((char) => alphanumerical.includes(char))
        .join("");

    const reversedString = newString.split("").reverse().join("");

    return reversedString === newString;
};

// Do not edit below this line
module.exports = palindromes;
