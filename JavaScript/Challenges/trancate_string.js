// trancate a string
const translatePigLatin = (word) => {
    const vowels = ["a", "e", "i", "o", "u"];
    if (vowels.includes(word[0])) {
        return word + "way";
    } else {
        let consonants = "";
        let index = 0;
        while (!vowels.includes(word[index])) {
            consonants += word[index];
            index++;
        }
        return word.slice(index) + consonants + "ay";
    }
};
console.log(translatePigLatin("consonant"));