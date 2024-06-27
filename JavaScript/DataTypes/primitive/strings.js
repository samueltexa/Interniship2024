let greeting = "Good Morning"
console.log(greeting);
console.log(typeof greeting);

// String constructor
let str = new String("Good afternoon");

// Properties
const myst = "Good afternoon";
console.log(myst.length);

// Methods
console.log(greeting.replace("Morning", "Evening"));
console.log(greeting.replace("Morning", "Afternoon"));

// charAt()
console.log(greeting.charAt(5));

console.log(greeting.startsWith("G"));
console.log(greeting.endsWith("g"));

// converting to lower and upercase
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());