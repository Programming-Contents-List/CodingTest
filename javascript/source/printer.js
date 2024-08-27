let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\r\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');  //백준 제출
let value = input[0];
console.log(value)
let a = 3;
let b = 5;

while (value !== 0) {
  value /= 5;
  console.log(value);
}