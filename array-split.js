const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part = nums.slice(2, 5);
console.log(part);
// const removed = nums.splice(2, 5);
// const removed = nums.splice(2, 3);
const removed = nums.splice(2, 3, 77, 88, 99);
console.log(removed);
console.log(nums);
//joining array

// const together = nums.join("");
// const together = nums.join(",");
const together = nums.join(" ami ");
console.log(together);