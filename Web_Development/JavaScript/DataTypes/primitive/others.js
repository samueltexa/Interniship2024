// boolean
let isTrue = true;
console.log(typeof isTrue);
console.log(isTrue.valueOf());

const isTrues = new Boolean(true);

// BigInt
const my_big_value = 1234567890123456789012345678901234567890n;
console.log(typeof my_big_value);

const num_from_big =Number(my_big_value);
console.log(num_from_big, typeof num_from_big);

// Null type
let my_null = null;
console.log(my_null, typeof my_null);

// Undefined type
let x;
console.log(x, typeof x);

// Symbol type
let my_symbol1 = Symbol();
let my_symbol2 = Symbol();

console.log(my_symbol1 === my_symbol2);
console.log(my_symbol1, typeof my_symbol1);

// Symbol methods
// console.log(Symbol.)