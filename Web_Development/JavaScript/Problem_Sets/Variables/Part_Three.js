// 1. Create a variable inventory as an object to store item names as keys and their quantities as values. Add at least five items and quantities.
let inventory = {
    apples: 10,
    bananas: 20,
    oranges: 15,
    grapes: 12,
    strawberries: 8
};

// 2. Declare a variable students as an array of objects, where each object represents a student with name and grade. Initialize it with at least five students.
let students = [
    {name: "John", grade: 90},
    {name: "Jane", grade: 85},
    {name: "Jim", grade: 95},
    {name: "Jack", grade: 80},
    {name: "Jill", grade: 88}
];

// 3. Create a function updateInventory that takes an item name and quantity as arguments and updates the inventory object.
function updateInventory(item, quantity) {
    inventory[item] = (inventory[item] || 0) + quantity;
}

// 4. Declare a variable books as an array of objects, where each object represents a book with title, author, and year. Initialize it with at least five books.
let books = [
    {title: "1984", author: "George Orwell", year: 1949},
    {title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960},
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925},
    {title: "Moby Dick", author: "Herman Melville", year: 1851},
    {title: "War and Peace", author: "Leo Tolstoy", year: 1869}
];

// 5. Create a variable config as an object with nested objects for different settings (e.g., audio, video, network). Each setting should have at least two properties.
let config = {
    audio: {
        volume: 80,
        mute: false
    },
    video: {
        resolution: "1080p",
        framerate: 60
    },
    network: {
        ssid: "HomeWiFi",
        password: "password123"
    }
};

// 6. Initialize a variable schedule as an array of objects representing daily schedules with day, startTime, and endTime.
let schedule = [
    {day: "Monday", startTime: "9:00 AM", endTime: "5:00 PM"},
    {day: "Tuesday", startTime: "9:00 AM", endTime: "5:00 PM"},
    {day: "Wednesday", startTime: "9:00 AM", endTime: "5:00 PM"},
    {day: "Thursday", startTime: "9:00 AM", endTime: "5:00 PM"},
    {day: "Friday", startTime: "9:00 AM", endTime: "5:00 PM"}
];

// 7. Declare a variable library as an object with nested arrays representing different genres and books within those genres.
let library = {
    fiction: ["1984", "To Kill a Mockingbird", "The Great Gatsby"],
    nonFiction: ["Sapiens", "Educated", "Becoming"],
    mystery: ["Gone Girl", "Big Little Lies", "In the Woods"],
    fantasy: ["Harry Potter", "The Hobbit", "Game of Thrones"]
};

// 8. Create a variable transactions as an array of objects, where each object represents a transaction with date, amount, and type (e.g., deposit, withdrawal).
let transactions = [
    {date: "2023-01-01", amount: 100, type: "deposit"},
    {date: "2023-01-05", amount: 50, type: "withdrawal"},
    {date: "2023-01-10", amount: 200, type: "deposit"},
    {date: "2023-01-15", amount: 30, type: "withdrawal"},
    {date: "2023-01-20", amount: 150, type: "deposit"}
];

// 9. Declare a variable team as an array of objects, where each object represents a team member with name, role, and yearsOfExperience.
let team = [
    {name: "Alice", role: "Developer", yearsOfExperience: 5},
    {name: "Bob", role: "Designer", yearsOfExperience: 3},
    {name: "Charlie", role: "Product Manager", yearsOfExperience: 8},
    {name: "Dana", role: "QA Engineer", yearsOfExperience: 4},
    {name: "Eve", role: "DevOps Engineer", yearsOfExperience: 6}
];

// 10. Create a function calculateAverageGrade that takes the students array and returns the average grade.
function calculateAverageGrade(students) {
    let total = 0;
    for (let student of students) {
        total += student.grade;
    }
    return total / students.length;
}
