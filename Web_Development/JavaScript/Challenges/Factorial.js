// Factorial of a number
const factorial_of_num = (num) => {
    // const num = 5;
    let factorial = 1;
    for (let index = 1; index <= num; index++) {
        factorial *= index;
    }
    // return factorial;
    console.log(factorial);
};
factorial_of_num(5);