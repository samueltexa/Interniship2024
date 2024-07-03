// caesars cipher

const caesarsCipher = (str) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return str
        .split("")
        .map(char => {
            const pos = alphabet.indexOf(char);
            return pos >= 0 ? alphabet[(pos + 13) % 26] : char;
        })
        .join("");
}
console.log(caesarsCipher("SERR PBQR PNZC"));