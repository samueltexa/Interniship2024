// Parametized functions
function add_two_numbers(a, b) {
    const sum =  a + b;
    console.log(sum);
}
add_two_numbers(4, 6)

// returning functions

function calculate_age() {
    const year_of_birth = 2010;
    const age = 2024 - year_of_birth;
    return{
        year_of_birth, age
    }
}

console.log(calculate_age());

// Return function that receives parameters
function calculate_student_grade(stduent_name, student_class, marks){
    let student_grade = "";
    if (marks >= 90) {
        student_grade = "D1";
    }else if (marks > 80 && marks < 90) {
        student_grade = "D2";
    }else{
        student_grade = "Not a distinction";
    }
    return `${stduent_name} in class ${student_class} scored ${marks} and got a grade of ${student_grade}`
}
console.log(calculate_student_grade("John", "SS3", 90));

// Returning parametized fumction with initial parameters
const grade_student=(english_marks = 70, biology_marks)=>{
    const total_marks = english_marks + biology_marks;
    return{ total_marks,
        english_marks,
        biology_marks}
}
console.log(grade_student(undefined, 80));


// function inside a function(clojure)
const staff_members_details = ()=>{
    const head_teacher_details = ()=>{
        let head_teacher_password = "1234";
        const head_teacher_name = ["Alinda Samuel"];
        return head_teacher_name, head_teacher_password;
    };
    const other_staff_details = ()=>{
        const teachers_names = ["John", "Jane", "Doe"];
        return teachers_names;
    };
    const head_teacher = head_teacher_details();
    const other_staff = other_staff_details();
    const every_one_details = {
        head_teacher,
        other_staff
    };
    return every_one_details;
}
// staff_members_details
console.log(staff_members_details());
