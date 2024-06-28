// Find the longest word in a string
const longestWord = (sentence) => {
    const sentenceArray = sentence.split(" ");
    let longestWord = "";
    for (let index = 0; index < sentenceArray.length; index++) {
        if (sentenceArray[index].length > longestWord.length) {
            longestWord = sentenceArray[index];
        }
    }
    return longestWord;
};
console.log(longestWord("The quick brown fox jumped over the lazy dog"));