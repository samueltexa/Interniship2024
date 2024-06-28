// Capitalize the first letter of each word in a string
const capitalizeWords = (sentence) => {
    const sentenceArray = sentence.split(" ");
    for (let index = 0; index < sentenceArray.length; index++) {
        sentenceArray[index] = sentenceArray[index].charAt(0).toUpperCase() + sentenceArray[index].slice(1);
    }
    return sentenceArray.join(" ");
};
console.log(capitalizeWords("the quick brown fox jumped over the lazy dog"));