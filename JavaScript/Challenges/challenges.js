// Reverse a string

const reverseString = (greeting) => {
    // const greeting = "Good morning";
// step 1: convert the string to an array
const greetingArray = greeting.split("").reverse().join("");
console.log(greetingArray);
};
reverseString("greeting");


// Factorial of a number
const factorial_of_num = (num) => {
    // const num = 5;
    let factorial = 1;
    for (let index = 1; index <= num; index++) {
        factorial *= index;
    }
    // return factorial;
    console.log(factorial);
};
factorial_of_num(5);
// console.log(factorial_of_num(6));

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


// Fibonacci series
const fibonacciSeries = (num) => {
    let a = 0;
    let b = 1;
    let c;
    for (let index = 0; index < num; index++) {
        console.log(a);
        c = a + b;
        a = b;
        b = c;
    }
};
fibonacciSeries(10);