let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\r\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');  //백준 제출
let value = input[0];
console.log(value)
let a = 3;
let b = 5;
let result = 0;
// %, / 이 둘을 다시 짚고 넘어가자.
// console.log(value % b);

while (value !== 0) {
  value %= b;
  result++;
  if (value % b !== 0) {
    // console.log('value', value);
    // break;
    value %= a;
    result++;
  }
}

console.log(result);