let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\r\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출
let temp = input.map(el => el.split(' ').map(Number));
let N = temp[0];
// console.log(N);

temp.shift();
let arr = temp;
// console.log(arr);

arr.sort((a, b) => {
  // if (a[0] === b[0]) {
  //   console.log('===', a[0], b[0]);
  // } else {
  //   console.log('!===', a[0], b[0]);
  // }
  // console.log(a[0], b[0]);
  return a[0] - b[0]; //정렬 조건문에서는 return을 항시 넣어야함
});

// arr.sort((a, b) => {
//   if (a[0] === b[0]) {
//     console.log('===', a[0], b[0]);
//     return a[1] - b[1]; // a[0]이 같을 때, 두 번째 요소로 정렬
//   } else {
//     console.log('!===', a[0], b[0]);
//     return a[0] - b[0]; // 첫 번째 요소로 정렬
//   }
// });

console.log(arr);
