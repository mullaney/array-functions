/*
  concat returns a shallow copy of two arrays merged into one array. A shallow
  copy means that if objects are in the array, only a reference is actually copied,
  not the entire object.
*/

// Let's start with an example that conforms to ES5:

var arr1 = [1, 2, 3, 4];
var arr2 = [10, 9, 4, 99];

var arr3 = arr1.concat(arr2);

console.log(arr3);

// please note that it does not alter the original arrays

console.log(arr1, arr2);

/*
  It works in a slightly strange way when using arrays of objects. When you
  have an array of object, it's acutally an array of references to the objects.
  What that means is if an object is part of more than one array, if you alter
  the object in one array, it's also changed in the other array(s).
*/

// This version uses ES6+ syntax:

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

// Note you can pass mutliple arrays as arguments:

let pets = dogs.concat(cats, birds);

console.log(pets);

// If the object changes, it changes in both arrays.

pets[2].name = 'Miranda';

console.log("pets:", pets);
console.log("cats:", cats);

/*
  This is not true for values of numbers, strings or booleans. Each array keeps
  a separate value when it's one of these simpler variable types.
*/

arr2[0] = 999;

console.log(arr2);
console.log(arr3);
