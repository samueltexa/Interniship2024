// 1. Write a for loop that prints numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// 2. Create a for loop that prints the even numbers between 1 and 20.
for (let i = 2; i <= 20; i += 2) {
    console.log("Even Numbers:", i);
}
// 3. Write a while loop that prints numbers from 10 down to 1.
let num = 10;
while (num >= 1) {
    console.log(num);
    num--;
}
// 4. Create a for loop that prints the elements of an array.
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// 5. Write a for loop that calculates the sum of the numbers in an array.
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);
// 6. Create a while loop that prints "Hello, World!" 5 times.
let count = 0;
while (count < 5) {
    console.log("Hello, World!");
    count++;
}
// 7. Write a for loop that prints the characters of a string.
let str = "Hello";
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}
// 8. Create a for loop that calculates the factorial of a number (e.g., 5! = 5 * 4 * 3 * 2 * 1).
let nums = 5;
let factorial = 1;
for (let i = nums; i > 0; i--) {
    factorial *= i;
}
console.log(factorial);
// 9. Write a while loop that prints the Fibonacci sequence up to the 10th term.
let a = 0, b = 1, temp;
let counts = 1;
while (counts <= 10) {
    console.log(a);
    temp = a + b;
    a = b;
    b = temp;
    counts++;
}
// 10. Create a for loop that prints the multiplication table for a given number.
let number = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}
