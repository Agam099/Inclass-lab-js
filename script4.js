// Challenge 1
const arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.unshift(0);
arr.reverse();

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];


const combined = arr1.concat(arr2);


const arr3 = combined.filter((item, index) => combined.indexOf(item) === index);

console.log(arr3);
