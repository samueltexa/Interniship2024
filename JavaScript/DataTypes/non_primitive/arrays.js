
let my_arr_num = [1,2,3,4];

let fruits = ["Banana", "Guava", "Lemon"]

let var_types_arr = [true, 5, 6, "Hello"]

console.log("Original array",my_arr_num);
console.log(my_arr_num[0]);
console.log(my_arr_num[my_arr_num.length -1]);

// Array methods
// add element at the end of the array
let modified_array = my_arr_num.push(5); // add 5 at the end of the array
console.log(modified_array);
console.log("Added 5",my_arr_num);

let modified_array2  = my_arr_num.pop(); // remove elemt at the end of the end of the arry
console.log(modified_array2);
console.log("Remove last elemetn(5)",my_arr_num);

// add element at the beginning of the array
let modified_array3 = my_arr_num.unshift(7);
console.log("Add 10 at the beginning of the array",my_arr_num);

// add element in the middle of the array
let modified_array4 = my_arr_num.splice(2, 3,10);
console.log("Add elemets in the middle of the array",modified_array4);


let names = ["Jane", "John", "James", "Jona"];

const mod = names.shift();

console.log(mod, typeof mod);
console.log(names, typeof names);

let mod2 = names.unshift("Harry");
console.log(names);

const extracted_arr = names.slice(1, 3);
console.log(extracted_arr);
console.log(names);

console.log(names.sort((a, b) => a - b));


let arr = [4,2,10,1,5,6,7,8,9,3];
console.log(arr.sort((a, b) => a - b));