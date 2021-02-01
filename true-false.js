/*//Falsy:
0
""
undefined
null
NaN
false
*/
/*Truthy
'0' 
' '
[]
{}
true
*/

// const age = 2;
const age = 0;
if (age || age == 0) {
    console.log("condition is true age");
}
else {
    console.log("condition is false");
}
const string = "0";
if (string) {
    console.log("condition is true");
}
else {
    console.log("condition is false");
}
const empty = "";
if (empty) {
    console.log("condition is true");
}
else {
    console.log("condition is false");
}
const name = "Solaiman";
if (name) {
    console.log("condition is true");
}
else {
    console.log("condition is false");
}
const space = " ";
if (space) {
    console.log("condition is true");
}
else {
    console.log("condition is false");
}
let nameUn;
console.log(nameUn);
if (nameUn) {
    console.log("condition is true");
}
else {
    console.log("condition is false undefined");
}
let nameN = null;
console.log(nameN);
if (nameN) {
    console.log("condition is true");
}
else {
    console.log("condition is false Null");
}

let nameNaN = NaN;
console.log(nameNaN);
if (nameNaN) {
    console.log("condition is true");
}
else {
    console.log("condition is false NaN");
}
let array = [];
if (array) {
    console.log("condition is true");
}
else {
    console.log("condition is false ");
}
let object = {};
if (object) {
    console.log("condition is true");
}
else {
    console.log("condition is false ");
}
let true1 = true;
if (true1) {
    console.log("condition is true");
}
else {
    console.log("condition is false");
}
let false1 = false;
if (false1) {
    console.log("condition is true");
}
else {
    console.log("condition is false ");
}
let false2 = "false";
if (false2) {
    console.log("condition is true false");
}
else {
    console.log("condition is false ");
}

let one = true;
if (1) {
    console.log("condition is true ONE");
}
else {
    console.log("condition is false ");
}

let zero = false;
if (zero == 0) {
    console.log("condition is true Zero");
}
else {
    console.log("condition is false ");
}
