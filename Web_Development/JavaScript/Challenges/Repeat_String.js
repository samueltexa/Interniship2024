// repeat a string
const repeatString = (word, num) => {
    let repeatedString = " ".split("");
    for (let index = 0; index < num; index++) {
        repeatedString += word;
    }
    return repeatedString;
};
console.log(repeatString("hello ", 5));