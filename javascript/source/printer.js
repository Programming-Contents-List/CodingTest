let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\r\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');  //백준 제출
let length = input[0];
input.shift();
// console.log(input, length);

// console.log(input[0][1])
for (let i = 0; i < length; i++) {
  let max = Math.max(input[i].length);
  // console.log(max)
  for (let j = 0; j < max; j++) {
    // input[i][j].sort((a, b) => a - b);
    console.log(input[i][j]);
  }
}