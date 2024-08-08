let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().split(' ');//.split('\n')
//let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');  //배준 제출
//input의 값을 내가 split으로 배열로 받아서 따로 후처리를 할지 아니면 처음부터 원하는 형식으로 값을 설정할지
let result = input.map(i => parseInt(i));
console.log(Array.isArray(result)); //array인지 확인하는 방법
if (result[0] < result[1]) {
  console.log('<');
} else if (result[0] > result[1]) {
  console.log('>');
} else {
  console.log('==');

}
console.log(result);