let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().split('\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');  //백준 제출
console.log(input);

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j] > input[j + 1]) {
      [input[j], input[j + 1]] = [input[j + 1], input[j]];
    }
  }
}

console.log(input);
input.forEach(element => console.log(element));