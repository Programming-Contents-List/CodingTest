const nested = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const filteredNested = nested.map((arr) => arr.filter((num) => num % 2 === 0));

console.log(filteredNested);
// [
//   [2],
//   [4, 6],
//   [8]
// ]
