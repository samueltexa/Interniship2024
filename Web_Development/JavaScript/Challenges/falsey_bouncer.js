// falsey bouncer
const bouncer = (arr) => {
    return arr.filter(Boolean);
}
console.log(bouncer([7, "ate", "", false, 9]));