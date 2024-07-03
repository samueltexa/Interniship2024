// 2. Create a while loop that keeps asking the user to enter a number until they enter 0.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
function askForNumber() {
    readline.question('Enter a number (0 to stop): ', number => {
        if (number == 0) {
            readline.close();
        } else {
            askForNumber();
        }
    });
}
askForNumber();

// 3. Write a for loop that prints the elements of a 2D array (array of arrays).
let array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let i = 0; i < array2D.length; i++) {
    for (let j = 0; j < array2D[i].length; j++) {
        console.log(array2D[i][j]);
    }
}

// 4. Create a for loop that reverses a string.
let str = "Hello";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}
console.log(reversedStr);

// 5. Write a while loop that prints the digits of a number in reverse order.
let num = 12345;
while (num > 0) {
    console.log(num % 10);
    num = Math.floor(num / 10);
}

// 6. Create a for loop that counts the number of vowels in a string.
let string = "Hello World";
let vowelCount = 0;
for (let char of string.toLowerCase()) {
    if ('aeiou'.includes(char)) {
        vowelCount++;
    }
}
console.log(vowelCount);

// 7. Write a for loop that finds the largest number in an array.
let numbers = [1, 2, 3, 4, 5, 99, 6, 7, 8];
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log(largest);

// 8. Create a while loop that finds the greatest common divisor (GCD) of two numbers.
let a = 56, b = 98;
while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}
console.log(a);

// 9. Write a for loop that prints all the keys and values of an object.
let obj = {
    name: "Alice",
    age: 25,
    city: "New York"
};
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

// 10. Create a for loop that prints the first n terms of the arithmetic sequence a, a+d, a+2d, ..., where a and d are given.
let aSeq = 2;
let d = 3;
let n = 10;
for (let i = 0; i < n; i++) {
    console.log(aSeq + i * d);
}
