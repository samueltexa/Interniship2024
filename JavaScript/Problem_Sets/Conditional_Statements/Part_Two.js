// 1. Write a function that takes a number and returns "Positive", "Negative", or "Zero" based on the value using conditional statements.
function checkNumber(value) {
    if (value > 0) {
        return "Positive";
    } else if (value < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

// 2. Create a function that takes a grade (0-100) and returns a letter grade (A, B, C, D, F) using conditional statements.
function getLetterGrade(grade) {
    if (grade >= 90) {
        return "A";
    } else if (grade >= 80) {
        return "B";
    } else if (grade >= 70) {
        return "C";
    } else if (grade >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// 3. Write a function that checks if a string is a palindrome (reads the same forwards and backwards) using conditional statements.
function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

// 4. Create a function that takes a month (1-12) and returns the number of days in that month using conditional statements.
function getDaysInMonth(month) {
    if (month === 2) {
        return 28; // Not accounting for leap years here
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        return 30;
    } else {
        return 31;
    }
}

// 5. Write a function that takes three numbers and returns the largest using conditional statements.
function getLargestNumber(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

// 6. Create a function that checks if a number is within a certain range (e.g., 10 to 20) and returns true if it is, false otherwise.
function isWithinRange(number, min, max) {
    return number >= min && number <= max;
}

// 7. Write a function that takes a year and checks if it's a leap year. Return true if it is, false otherwise.
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// 8. Create a function that takes a string and returns true if it contains the letter "a", false otherwise.
function containsA(str) {
    return str.includes('a');
}

// 9. Write a function that takes an array and returns true if it's empty, false otherwise.
function isArrayEmpty(arr) {
    return arr.length === 0;
}

// 10. Create a function that takes a person's age and checks if they are eligible to vote. Return true if they are, false otherwise.
function canVote(age) {
    return age >= 18;
}
