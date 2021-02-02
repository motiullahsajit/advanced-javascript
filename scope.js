//gobal scope 
let bonus = 20;

function sum(first, second) {
    // let result = first + second;
    let result = first + second + bonus;
    console.log(result);
    console.log(bonus);
    if (result > 9) {
        // const mood = "happy"
        //var is global variable,(hoisting)
        var mood = "fishy";
        mood = "funky";
        mood = "cranky";
        console.log(mood);
        //
        // let mood = "fishy";
        // mood = "funky";
        // mood = "cranky";
        // console.log(mood);
    }
    console.log(mood);
    return result;
}
const output = sum(3, 7);
// console.log(result);
console.log(output);
console.log(bonus);

//
console.log(day);
var day = "friday";
// const day = "friday";
// let day = "friday";
//
var day2 = "saturday";
console.log(day2);

//
var test2 = 59;
const test = 59;
function testing() {
    let test3 = 59;
    console.log(test, test2, test3);
}
testing();
// console.log(test2);
// console.log(test);
/*function myTest() {
    // console.log('const test', test);
    console.log('var test2', test2);
    // console.log('let test3', test3);
}
myTest();
*/