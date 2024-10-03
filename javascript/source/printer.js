let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\n');  //\r\n
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출

let N = parseInt(input[0]);
let first = 0;  //current
let second = 1;  //temp
let result = 0;

if (N === 0) {
  console.log(0);
} else if (N === 1) {
  console.log(1);
} else {
  for (let i = 2; i <= N; i++) {
    result = first + second;
    first = second;
    second = result;
  }
  console.log(result);
}

// console.log(result);
