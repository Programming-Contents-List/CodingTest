let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\r\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출
let length = input[0];
input.shift();

let arr = input.map(el => el.split(' '));
arr.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];  // y좌표가 같을 때 x좌표 오름차순
  } else {
    return a[1] - b[1];  // y좌표 오름차순
  }
});

// console.log(arr);

arr.forEach(el => console.log(el.join(' ')));

// console.log(input[0][1])
// for (let i = 0; i < length; i++) {
//   let max = Math.max(input[i].length);
//   // console.log(max)
//   for (let j = 0; j < max; j++) {
//     // input[i][j].sort((a, b) => a - b);
//     console.log(input[i][j]);
//   }
// }