let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\n');

//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');  //백준 제출
// input.forEach(el => console.log(el))
let max = Math.max(...input.map(el => el.length));
let result = "";
for (let i = 0; i < max; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j][i]) {
      result += input[j][i];
    }
  }
  console.log(result);

}
console.log(result);
