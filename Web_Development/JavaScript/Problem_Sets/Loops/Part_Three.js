// 1. Write a nested for loop to generate a multiplication table from 1 to 10.
for (let i = 1; i <= 10; i++) {
    let row = '';
    for (let j = 1; j <= 10; j++) {
        row += `${i * j}\t`;
    }
    console.log(row);
}

// 2. Create a function flattenArray that takes a nested array and returns a flattened version of it using loops.
function flattenArray(nestedArray) {
    let flatArray = [];
    for (let i = 0; i < nestedArray.length; i++) {
        if (Array.isArray(nestedArray[i])) {
            flatArray = flatArray.concat(flattenArray(nestedArray[i]));
        } else {
            flatArray.push(nestedArray[i]);
        }
    }
    return flatArray;
}
console.log(flattenArray([1, [2, 3], [4, [5, 6]], 7]));

// 3. Write a for loop that prints all the permutations of a given string.
function permute(str, l, r) {
    if (l === r) {
        console.log(str);
    } else {
        for (let i = l; i <= r; i++) {
            str = swap(str, l, i);
            permute(str, l + 1, r);
            str = swap(str, l, i); // backtrack
        }
    }
}

function swap(str, i, j) {
    let arr = str.split('');
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr.join('');
}

let string = "abc";
permute(string, 0, string.length - 1);

// 4. Create a while loop that simulates a simple game where the user has to guess a random number between 1 and 100.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let randomNum = Math.floor(Math.random() * 100) + 1;
function guessNumber() {
    readline.question('Guess the number between 1 and 100: ', number => {
        if (Number(number) === randomNum) {
            console.log("Correct!");
            readline.close();
        } else {
            console.log("Try again!");
            guessNumber();
        }
    });
}
guessNumber();

// 5. Write a for loop that calculates the sum of all prime numbers below 100.
let primeSum = 0;
for (let num = 2; num < 100; num++) {
    let isPrime = true;
    for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
        if (num % divisor === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primeSum += num;
    }
}
console.log(primeSum);

// 6. Create a for loop that sorts an array of numbers using the bubble sort algorithm.
let bubbleArray = [5, 3, 8, 4, 2];
for (let i = 0; i < bubbleArray.length; i++) {
    for (let j = 0; j < bubbleArray.length - i - 1; j++) {
        if (bubbleArray[j] > bubbleArray[j + 1]) {
            [bubbleArray[j], bubbleArray[j + 1]] = [bubbleArray[j + 1], bubbleArray[j]];
        }
    }
}
console.log(bubbleArray);

// 7. Write a for loop that prints Pascal's triangle up to n levels.
function printPascalsTriangle(n) {
    let triangle = [];
    for (let i = 0; i < n; i++) {
        triangle[i] = [];
        triangle[i][0] = 1;
        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        triangle[i][i] = 1;
    }
    for (let i = 0; i < n; i++) {
        console.log(triangle[i].join(' '));
    }
}
printPascalsTriangle(5);

// 8. Create a for loop that finds the longest word in a sentence.
let sentence = "The quick brown fox jumps over the lazy dog";
let words = sentence.split(' ');
let longestWord = words[0];
for (let word of words) {
    if (word.length > longestWord.length) {
        longestWord = word;
    }
}
console.log(longestWord);

// 9. Write a for loop that generates the first n terms of the geometric sequence a, ar, ar², ..., where a and r are given.
let a = 2, r = 3, n = 5;
let sequence = [];
for (let i = 0; i < n; i++) {
    sequence.push(a * Math.pow(r, i));
}
console.log(sequence.join(', '));

// 10. Create a while loop that simulates a basic text-based adventure game with multiple choices and outcomes.
const readlineGame = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
function startGame() {
    console.log("You are in a dark room. There's a door to your left and right.");
    readlineGame.question("Which one do you take? (left/right): ", direction => {
        if (direction === "left") {
            console.log("You encounter a dragon! Game Over.");
            readlineGame.close();
        } else if (direction === "right") {
            console.log("You find a treasure chest! You win!");
            readlineGame.close();
        } else {
            console.log("Invalid choice, try again.");
            startGame();
        }
    });
}
startGame();