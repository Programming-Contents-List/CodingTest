let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\r\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');  //백준 제출
let value = parseInt(input[0]);
let a = 3;
let b = 5;
let result = 0;
// %, / 이 둘을 다시 짚고 넘어가자.
// console.log(value % b);
console.log(value % a);
while (value !== 0 && value % a !== 0) {
  if (value >= b) {
    value -= b;
    result++;
  } else if (value % a === 0) {
    value -= a;
    result++;
  } else {
    result = -1;
  }
}
console.log(value);
console.log(result);