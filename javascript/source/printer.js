const { stat } = require('fs');
let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\n');  //\r\n
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출

let N = parseInt(input[0]);
console.log(N);
let temp = 0;
let result;

for (let i = 0; i < N; i++) {
  let current = i;
  temp = current + 1;
  current += temp;
  // result = current + temp;
  console.log(`current : ${current}/ temp : ${temp}`);
  // console.log(result);
}