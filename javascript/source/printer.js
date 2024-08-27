let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\r\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');  //백준 제출
let N = parseInt(input[0]);
let max = 5;
let min = 3;
let result = 0;
// %, / 이 둘을 다시 짚고 넘어가자.
// console.log(N % b);
// console.log(N % a);
// 왜 while문에서 console.log('e', N % max && min !== 0);와 같이 log를 찍으면 0과 같은 결과가 나오는가?
//N > (max && min)의 의미는?
//N % max && N % min !== 0와 N % max !== 0 && N % min !== 0 은 다르다
//!== 0 은 0이 아닐 경우 true인것이다. 즉, 0이면 false가 되어서 while문에서 벗어난다.
//조건문을 정할 때 기준이 무엇인지 명확하게 확인과 기준이 필요
if (N > max && N > min) {
  while (N % max !== 0 || N % min !== 0) {
    if (N % max === 0 && N >= 0) {
      N -= max;
      result++;
    } else if (N % min === 0 && N >= 0) {
      N -= min;
      result++;
    }
    // console.log('e', N % max && N % min !== 0);
  }
} else {
  result = -1;
}
console.log(N);
console.log(result);
