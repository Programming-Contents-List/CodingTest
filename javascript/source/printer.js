let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\n');  //\r\n
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출

// console.log(input[0].length);

let N = input[0];
let original = N;
let count = 0;
// let count = 0;
// let temp = 0;
// let current = 0;
// let charSum = '';
//왜 Array.from인가?
// Array.from(N).map(el => {
//   // console.log(el, index);
//   // temp = +el[1]; //map의 el은 el로만 접근, index로 접근하려면 foreach나 for문으로 접근
//   temp = +el; //하지만 마지막 숫자만 담기면 된다.
//   current += +el;
//   charSum = temp.toString() + current.toString();
//   if (charSum != input[0]) {
//     return count++;
//   }
// })
// console.log(temp.toString());
// console.log(current.toString());
// console.log(charSum);
//Array.from(N)은 새로운 배열을 만들어내기에 함수로 구현함에 적합하지 않음

function Transfer(N, count = 0) {
  // 각 자리수를 더하여 새로운 수를 생성
  let sum = (+N[0]) + (+N[1]);
  let newNumber = N[1] + (sum % 10);  // 10으로 나눈 나머지 값을 즉, 뒷자리의 숫자만 남기기 위함이다.
  //예를 들어 14이면 10을 나눠서 나뉜 나머지 값 4만 남는다.

  count++;  // 반복 횟수 증가

  if (newNumber === original) {
    return count;  // 원래의 수로 돌아왔으면 반복 횟수 반환
  } else {
    return Transfer(newNumber, count);  // 재귀 호출로 다음 수 계산
  }
}
// 결과 출력
console.log(Transfer(N, count));

