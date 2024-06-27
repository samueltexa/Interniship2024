// switch statement for the day of the week
// syntax
// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }
// example
const get_day_of_week = (day) => {
    switch (day) {
        case "Mon":
            console.log("Monday");
            break;
        case "Tue":
            console.log("Tuesday");
            break;
        case "Wed":
            console.log("Wednesday");
            break;
        case "Thu":
            console.log("Thursday");
            break;
        case "Fri":
            console.log("Friday");
            break;
        case "Sat":
            console.log("Saturday");
            break;
        case "Sun":
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day!");
    }
}
get_day_of_week("Mon");