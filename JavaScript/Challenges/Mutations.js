// Mutations
const mutation = (arr) => {
    return arr[1].toLowerCase().split("").every(letter => arr[0].toLowerCase().includes(letter));
}
console.log(mutation(["hello", "hey"]));