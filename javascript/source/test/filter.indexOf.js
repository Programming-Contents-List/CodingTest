const numbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = numbers.filter(
  (num, index, array) => array.indexOf(num) === index
);

console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
