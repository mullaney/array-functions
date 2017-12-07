let arr1 = [1, 2, 3, 4];
let arr2 = [10, 9, 4, 99];

let arr3 = arr1.concat(arr2);

console.log(arr3);

// does not alter the original arrays
console.log(arr1, arr2);

let dogs = [
  { name: 'Spot', age: 4 },
  { name: 'Rusty', age: 10 }
];

let cats = [
  { name: 'Fluffy', age: 2 }
];

let birds = [
  { name: 'Polly', age: 23 }
];

let pets = dogs.concat(cats, birds);

console.log(pets);

// if object changes, it changes in both arrays
// this is what it means by a shallow copy

pets[2].name = 'Miranda';

console.log("pets:", pets);

console.log("cats:", cats);

// Not true for values of numbers, strings or booleans:

arr2[0] = 999;

console.log(arr2);

console.log(arr3);
