// sum all primes
const sumPrimes = (num) => {
    const isPrime = (num) => {
        for (let index = 2; index <= Math.sqrt(num); index++) {
            if (num % index === 0) {
                return false;
            }
        }
        return num > 1;
    }
    let sum = 0;
    for (let index = 2; index <= num; index++) {
        if (isPrime(index)) {
            sum += index;
        }
    }
    return sum;
}
console.log(sumPrimes(10));