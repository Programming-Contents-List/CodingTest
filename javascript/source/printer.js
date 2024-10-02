let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\n');  //\r\n
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출

let N = parseInt(input[0]);
let first = 0;  //current
let second = 1;  //temp
let result = 0;

for (let i = 2; i <= N; i++) {
  result = first + second;
  first = second;
  second = result;
  console.log(`항 ${i}: ${result}`);
}

//  N이 1일 경우의 피보나치
if (N === 1) {
  result = 1;
  console.log(`항 1: ${result}`);
}

console.log(`피보나치 수열의 ${N}번째 항은 ${result}입니다.`);