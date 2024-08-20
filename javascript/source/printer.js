let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');  //백준 제출
// input.forEach(el => console.log(el))
let result = "";
console.log(input[0][2]);
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input.length; j++) {
    result += input[j][i];

    //왜 [j][i]일 경우와 [i][j]일 경우의 결과 값이 다른가?
    //이유는 j가 0번쩨 일때 [i++][0]
    //하지만 2번째 입력인 경우는 불일치
    // if (i < input.length) {
    // }
  }
}
console.log(result);