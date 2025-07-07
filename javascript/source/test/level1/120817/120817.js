let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let answer = numbers.reduce((a, b) => {
  console.log(a, b);
  return a + b;
}, 5);

console.log(answer);
