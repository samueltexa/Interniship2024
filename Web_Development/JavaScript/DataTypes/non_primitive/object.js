// const obj = {
//     key1: 'value',
//     key2: 123
// };

const student_details = {
    first_name: 'John',
    last_name: 'Doe',
    age: 34,
}

console.log(student_details);

// Accessing values in the object
console.log(student_details.first_name);
console.log(student_details.last_name);
console.log(student_details.age);

student_details.age = 35;

console.log(student_details, typeof student_details);


// Asynchronous functions

const fetchData = async () => {
    const response  = await fetch("https://itunes.apple.com/search?entity=song&limit=10&term=weezer");
    console.log(response);
}

fetchData();