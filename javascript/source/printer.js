let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\r\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');  //백준 제출

let N = +input[0];  //18, 4, 6, 9, 11
let min = 3;
let max = 5;
let result = 0;

while (N > 0) {
  if ((N !== 0 && Number.isInteger(N / max)) || (N !== 0 && (N - max) > max)) { //Number.isInteger(N / max)이는 정수 실수를 판별한다.
    result += 1;
    N -= max;
    if (!Number.isInteger(N / max) && N < max) {
      result += 1;
      N -= min;
    }
  } else if (N !== 0 && N >= min) { //  N % min === 0
    result += 1;
    N -= min;
  } else {
    result = -1;
    break;
  }
}

console.log(result);