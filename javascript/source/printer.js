let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\r\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');  //백준 제출

let N = +input[0];  //18, 4, 6, 9, 11
// 형변환을 하지 않은 이유는 사칙연산을 하면서 암묵적으로 변환이 된다.
console.log(N);
let min = 3;
let max = 5;
//최소한 적은 개수의 봉지를 이동 해야한다.
//즉, max값 최대한 활용할 수 있게 해야한다.
let result;


//전체적인 루핑은 while문으로 작성 할 것이다. 이유는 조금 더 직관적이다. -> 구체적인 이유가 필요.
while (N > 0) {  //input값의 공통점은 0보다 큰 양수이다.
  if (N !== 0) {
    N -= max;
    console.log(N);
    //해당 조건식이 동작을하고 이후 처리가 될 수 있게 코드를 작성
    if (N < max) {
      console.log('Done, need min to device');
      break;
    }
  } else {
    console.error("SyntaxError");
  }
}