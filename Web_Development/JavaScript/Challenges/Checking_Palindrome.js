// Checking for a palindrome
const checkPalindrome = (word) => {
    const new_string = word.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    // const word = "madam";
    const reversedWord = new_string.split("").reverse().join("");
    if (new_string === reversedWord) {
        return true;
    } else {
        return false;
    }
};
console.log(checkPalindrome("hello ,olleh"));