// // Reverse a string

const reverseString = (greeting) => {
    // const greeting = "Good morning";
// step 1: convert the string to an array
const greetingArray = greeting.split("").reverse().join("");
console.log(greetingArray);
};
reverseString("greeting");