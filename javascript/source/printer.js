let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\r\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');  //백준 제출
let N = parseInt(input[0]);
let max = 5;
let min = 3;
let result = 0;

while (N > 0) {
  if (N % max === 0 && N >= max) {
    N -= max;
    result++;
  } else if (N % min >= 0 && N >= min) {
    N -= min;
    result++;
  } else {
    result = -1;
    break;
  }
}
// console.log(N);
console.log(result);