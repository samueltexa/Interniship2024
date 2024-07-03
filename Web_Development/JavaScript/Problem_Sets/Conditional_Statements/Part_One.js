// 1. Write an if statement that checks if a number is positive and prints "Positive" if true.
let num = 5;
if (num > 0) {
    console.log("Positive");
}

// 2. Create an if-else statement that checks if a number is even or odd and prints the result.
let nums = 4;
if (nums % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 3. Write an if statement that checks if a string contains the letter "a" and prints a message if it does.
let string = "apple";
if (string.includes("a")) {
    console.log("Contains 'a'");
}

// 4. Create an if-else statement that checks if a person is eligible to vote (age 18 or older) and prints the result.
let age = 20;
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

// 5. Write an if statement that checks if a number is divisible by 5 and prints a message if it is.
let numbers = 10;
if (numbers % 5 === 0) {
    console.log("Divisible by 5");
}

// 6. Create an if-else statement that checks if a variable isRaining is true or false and prints the result.
let isRaining = false;
if (isRaining) {
    console.log("It is raining");
} else {
    console.log("It is not raining");
}

// 7. Write an if statement that checks if a string's length is greater than 10 and prints a message if it is.
let strings = "Hello, World!";
if (strings.length > 10) {
    console.log("String is greater than 10 characters");
}

// 8. Create an if-else statement that checks if a number is within a certain range (e.g., 10 to 20) and prints the result.
let number = 15;
if (number >= 10 && number <= 20) {
    console.log("Number is within the range");
} else {
    console.log("Number is out of range");
}

// 9. Write an if statement that checks if an array is empty and prints a message if it is.
let array = [];
if (array.length === 0) {
    console.log("Array is empty");
}

// 10. Create an if-else statement that checks if a year is a leap year and prints the result.
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}
