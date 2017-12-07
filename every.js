const isOdd = (num) => {
  return num % 2 === 1;
}

let myArr = [1, 5, 7, 17, 21, 33, 2221];

console.log(myArr.every(isOdd));

let myOtherArr = [2, 7, 4, 6, 144];

var isEveryEven = myOtherArr.every(function(num) {
  return num % 2 === 0;
});

console.log(isEveryEven);
