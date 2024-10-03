let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\n');  //\r\n
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출

// console.log(input[0].length);
// 문자타입을 유지하지 않고 int타입으로 전환 및 고정한다.
let N = parseInt(input[0]);
let originN = N;
let count = 0;
// let NewN = '';
let temp = 0;

while (true) {
  //배열로 문제에 접근하는 방식으로 발생한 시간초과 추측
  // temp = (+N[0]) + (+N[1]);
  temp = Math.floor(N / 10) + (N % 10);
  // 배열로 문제에 접근하려면 N의 값을 보존해야하는 변수가 필요
  // 더 나아가 문자열과 숫자를 유지하면서 두가지의 타입을 전환하는데 있어서 불필요한 로직이 많이 들어감
  // NewN = N[1] + (temp % 10).toString();
  N = (N % 10) * 10 + (temp % 10);

  count++;

  if (N === originN) {
    break;
  }
  // 불필요한 예외처리 로직 제거
  // else {
  //   N = NewN;
  // }
}

// console.log(N[0]);
// console.log(N[1]);
// console.log(NewN);
// console.log(N);
console.log(count);
//Array.from(N)은 새로운 배열을 만들어내기에 함수로 구현함에 적합하지 않음


