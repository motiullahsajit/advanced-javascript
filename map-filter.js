const numbers = [3, 4, 5, 6, 7, 8];
console.log(numbers);
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

//with Map
/*
function square(element) {
    return element * element;
}

const square = element => element * element;
const square = x => x * x;

const result = numbers.map(function (element) {
    return element * element;
})
// const result = numbers.map(function (element,index,array) {
//    console.log(element,index,array)
// })

*/


const result = numbers.map(x => x * x);
console.log(result);

//filter
const bigger = numbers.filter(x => x > 5);
const smaller = numbers.filter(x => x < 5);
const smallest = numbers.filter(x => x < 3);
console.log(smaller);
console.log(bigger);
console.log(smallest);

//find
const isThere = numbers.find(x => x > 5);
console.log(isThere);

