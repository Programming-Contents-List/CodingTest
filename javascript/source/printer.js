let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');  //백준 제출
// input.forEach(el => console.log(el))
let [a, b, c, d, e] = input;
let result = "";
console.log(a[0]);
for (let i = 0; i < input.length; i++) {
  console.log(input[i])
  for (let j = 0; j < input[i].length; j++) {
    console.log(input[i][j]);
    if (j === 0) {
      result += input[i][j];
    } else if (j === 1 && result.length >= 5) {
      result += input[i][j];
    }
  }
}

console.log(result);