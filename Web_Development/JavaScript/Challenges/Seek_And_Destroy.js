// seek and destroy
const seekAndDestroy = (arr, ...args) => {
    return arr.filter(item => !args.includes(item));
};
console.log(seekAndDestroy([1, 2, 3, 4, 5, 6, 7], 2, 4, 6));