// 1. Declare a variable radius and use it to calculate the area of a circle (π * radius²). Print
// the result.
let radius = 5;
let area = Math.PI * radius * radius;
console.log("The area of the circle is:",area);
// 2. Create a variable firstName and lastName, then concatenate them with a space in
// between and store the result in a variable fullName.
let firstName = "ALINDA";
let lastName = "SAMUEL";
// let fullName = firstName,lastName;
console.log(lastName,firstName);
// 3. Declare three variables a, b, and c with values 3, 4, and 5. Calculate the perimeter of a
// triangle and print the result.
let a = 3;
let b = 4;
let c = 5;
let perimeter = a + b + c;
console.log("The perimiter is:",perimeter);
// 4. Initialize a variable temperatureCelsius and convert it to Fahrenheit using the
// formula (C * 9/5) + 32. Print the result.
let temperatureCelsius = 25;
let temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;
console.log("temperatureCelsius:",temperatureFahrenheit);
// 5. Create a variable hoursWorked and hourlyRate. Calculate the total pay by
// multiplying these two variables and print the result.
let hoursWorked = 40;
let hourlyRate = 15;
let totalPay = hoursWorked * hourlyRate;
console.log("TotalPay is:",totalPay);
// 6. Declare a variable sentence and assign it a sentence with at least five words. Print the
// number of characters in the sentence.
let sentence = "The quick brown fox jumps";
console.log("Sentence length is:", sentence.length,"characters");
// 7. Initialize a variable length and width of a rectangle, then calculate and print the area
// and perimeter.
let length = 10;
let width = 5;
let areaRectangle = length * width;
let perimeterRectangle = 2 * (length + width);
console.log("Area is:",areaRectangle,"and Premeter is:", perimeterRectangle);
// 8. Create a variable year and check if it's a leap year. Print true if it is, false otherwise
// (Hint: A year is a leap year if it's divisible by 4 but not by 100, except if it's also divisible
// by 400).
let year = 2024;
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log(isLeapYear);
// 9. Declare a variable shoppingList and assign it an array of at least five items.
let shoppingList = ["milk", "bread", "eggs", "butter", "cheese"];
console.log(shoppingList)
// 10. Create a variable birthYear and calculate your age based on the current year. Print
// the result
let birthYear = 2000;
let currentYear = new Date().getFullYear();
let ageCalculated = currentYear - birthYear;
console.log("Age is:", ageCalculated);