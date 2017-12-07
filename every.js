/*
  The every() method is a higher order function which uses a function to check
  if every element in an array returns true for that function.
*/

// This function returns true if the number passed to it is odd.

const isOdd = (num) => {
  return num % 2 === 1;
}

// This array only contains odd numbers

let myArr = [1, 5, 7, 17, 21, 33, 2221];

// So this when you call every() on this array using that function, it returns true
console.log(myArr.every(isOdd));

// this array contains 1 odd number

let myOtherArr = [2, 7, 4, 6, 144];

// This time we pass an anonymous function to every that checks for even numbers

let isEveryEven = myOtherArr.every(function(num) {
  return num % 2 === 0;
});

// So it returns false
console.log(isEveryEven);
