let arr = [2, 2, 1, 4];
// 오름차순
let descArray = arr.sort((a, b) => {
  return a - b;
});
console.log(descArray); // [ 1, 2, 2, 4 ]
// 내림차순
let ascArray = arr.sort((a, b) => {
  return b - a;
});
console.log(ascArray); // [ 4, 2, 2, 1 ]
