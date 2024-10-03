const { truncate } = require('fs');
let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\n');  //\r\n
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출

// console.log(input[0].length);

let N = input[0];
let originN = N;
let count = 0;
let NewN = '';
let temp = 0;

while (true) {
  temp = (+N[0]) + (+N[1]);
  NewN = N[1] + (temp % 10).toString();
  count++;

  if (NewN === originN) {
    break;
  } else {
    N = NewN;
  }
}

console.log(N[0]);
console.log(N[1]);
console.log(NewN);
console.log(N);
console.log(count);
//Array.from(N)은 새로운 배열을 만들어내기에 함수로 구현함에 적합하지 않음


