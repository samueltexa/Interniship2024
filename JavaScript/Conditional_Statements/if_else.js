let number_of_students_present = 12;
let total_number_of_students = 15;
let number_of_students_absent = 0;
if (number_of_students_present === total_number_of_students) {
    console.log("All students are present");
}
else {
    let number_of_students_absent = total_number_of_students - number_of_students_present;
    console.log(number_of_students_absent, "Students are absent");
}

// Natural numbers example
let nautural_number = 10;
if (nautural_number === 0) {
    console.log("The number is a zero");
}else if(nautural_number % 2 === 0){
    console.log("The natural number is a even number");
}else{
    console.log("The natural number is odd");
}

