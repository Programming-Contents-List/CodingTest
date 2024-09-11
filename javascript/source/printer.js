let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\n');  //'\r\n'
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출

let N = input.shift();
let arr = input[0].split(' ').map(el => +el);
// arr.reverse();
// console.log(arr);
// let compare = arr.reverse();
// console.log(compare);
// let NGE;
let temp = [];

while (arr.length > 0) {
  //검사한 값은 항시 삭제
  if (arr.length === 1) {
    temp.push(-1);
    break;
  }
  let current = arr.shift(); //삭제된 현재 값( = NGE)

  if (current < arr[0]) {
    temp.push(arr[0]);
    console.log(arr[0]);
  } else {
    temp.push(-1);
  }
}
console.log(temp);