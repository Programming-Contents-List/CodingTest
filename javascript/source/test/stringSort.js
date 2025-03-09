let arr = ["Apple", "Banana", "apple", "grape", "Orange"];

// 오름차순
let AscArr = arr.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});

console.log(AscArr); // ['Apple', 'Banana', 'Orange', 'apple', 'grape']

// 내림차순
let desArr = arr.sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
});

console.log(desArr); // [ 'grape', 'apple', 'Orange', 'Banana', 'Apple' ]
