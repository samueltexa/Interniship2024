// javascript program that logs the first 50 prime numbers
const prime_numbers = [];
const non_prime_numbers = [];
for (let prime_number = 2; prime_number < 50; prime_number++) {
    let is_prime = true;    

    for (let prime = 2; prime < prime_number; prime++) {
        if (prime_number % prime === 0) {
            is_prime = false;
            break;
        }
    }
    if (is_prime) {
        prime_numbers.push(prime_number);
    }
    else{
        non_prime_numbers.push(prime_number);
    }
}
console.log(prime_numbers);
console.log(non_prime_numbers);