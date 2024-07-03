// 1. Write a function that takes a date and returns the day of the week (e.g., "Monday") using conditional statements.
function getDayOfWeek(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayIndex = new Date(date).getDay();
    return days[dayIndex];
}

// 2. Create a function that takes a time in 24-hour format and returns a message indicating whether it's morning, afternoon, evening, or night using conditional statements.
function getTimeOfDay(time) {
    let [hours, minutes] = time.split(':').map(Number);
    if (hours >= 0 && hours < 6) {
        return "Night";
    } else if (hours >= 6 && hours < 12) {
        return "Morning";
    } else if (hours >= 12 && hours < 18) {
        return "Afternoon";
    } else {
        return "Evening";
    }
}

// 3. Write a function that validates an email address format using conditional statements.
function isValidEmail(email) {
    if (email.includes('@') && email.includes('.') && email.indexOf('@') < email.lastIndexOf('.')) {
        return true;
    }
    return false;
}

// 4. Create a function that takes a list of scores and returns the highest, lowest, and average score using conditional statements.
function getScoresStats(scores) {
    if (scores.length === 0) return { highest: null, lowest: null, average: null };
    let highest = scores[0], lowest = scores[0], sum = 0;
    for (let score of scores) {
        if (score > highest) highest = score;
        if (score < lowest) lowest = score;
        sum += score;
    }
    return { highest, lowest, average: sum / scores.length };
}

// 5. Write a function that simulates a basic calculator that performs addition, subtraction, multiplication, and division based on user input using conditional statements.
function basicCalculator(num1, num2, operation) {
    if (operation === "add") {
        return num1 + num2;
    } else if (operation === "subtract") {
        return num1 - num2;
    } else if (operation === "multiply") {
        return num1 * num2;
    } else if (operation === "divide") {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Cannot divide by zero";
        }
    } else {
        return "Invalid operation";
    }
}

// 6. Create a function that takes a year and returns the decade (e.g., "1980s") using conditional statements.
function getDecade(year) {
    let decade = Math.floor(year / 10) * 10;
    return `${decade}s`;
}

// 7. Write a function that checks if a number is prime using conditional statements.
function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }
    return true;
}

// 8. Create a function that takes a string and returns the number of vowels and consonants using conditional statements.
function countVowelsAndConsonants(str) {
    let vowelsCount = 0, consonantsCount = 0;
    for (let char of str.toLowerCase()) {
        if ('aeiou'.includes(char)) {
            vowelsCount++;
        } else if ('bcdfghjklmnpqrstvwxyz'.includes(char)) {
            consonantsCount++;
        }
    }
    return { vowels: vowelsCount, consonants: consonantsCount };
}

// 9. Write a function that determines the type of a triangle (equilateral, isosceles, scalene) based on its sides using conditional statements.
function getTriangleType(a, b, c) {
    if (a === b && b === c) {
        return "Equilateral";
    } else if (a === b || b === c || a === c) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}

// 10. Create a function that takes a person's name and age and returns a message indicating whether they are eligible for a senior discount (age 65 or older) using conditional statements.
function checkSeniorDiscount(name, age) {
    if (age >= 65) {
        return `${name} is eligible for a senior discount.`;
    } else {
        return `${name} is not eligible for a senior discount.`;
    }
}
