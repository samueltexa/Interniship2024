// Primitive Data Types
let x = 40;
let y = "40";
let z = x == y;
console.log(z);

// Non-Primitive Data Types
let student1 = {
    name: "John",
    age: 24,
};

let student2 = {
    name: "John",
    age: 24,
};

let student3 = student2;

let result_of_comparison = student1 === student2;
console.log(result_of_comparison);

let result_of_comparison2 = student2 === student3;
console.log(result_of_comparison2);