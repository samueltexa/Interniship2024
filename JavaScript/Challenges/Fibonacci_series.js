// Fibonacci series
const fibonacciSeries = (num) => {
    let a = 0;
    let b = 1;
    let c;
    for (let index = 0; index < num; index++) {
        console.log(a);
        c = a + b;
        a = b;
        b = c;
    }
};
fibonacciSeries(10);