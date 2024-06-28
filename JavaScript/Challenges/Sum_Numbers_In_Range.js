// sum all numbers in a range
const sumAll = (arr) => {
    let sum = 0;
    for (let index = Math.min(...arr); index <= Math.max(...arr); index++) {
        sum += index;
    }
    return sum;
};
console.log(sumAll([1, 4]));