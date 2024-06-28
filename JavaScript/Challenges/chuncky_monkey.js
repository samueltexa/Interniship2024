//  chuncky monkey
const chunkArray = (arr, num) => {
    const chunkedArray = [];
    for (let index = 0; index < arr.length; index += num) {
        chunkedArray.push(arr.slice(index, index + num));
    }
    return chunkedArray;
};
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3));