let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\n');  //'\r\n'
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출

let N = input.shift();
let arr = input[0].split(' ').map(el => +el);
// arr.reverse();
console.log(arr);
// let compare = arr.reverse();
// console.log(compare);
let NGE;
let temp = [];
let i = 0;
while (arr.length > 0) {
  // NGE = arr.pop();  //뒤에서 부터 pop이되는 걸 확인할 수 있음 따라, reverse 해야함
  if (arr[i] < arr[i + 1]) {
    console.log(arr[0]);
    NGE = arr[i + 1];
    temp.push(NGE);
  } else {
    temp.push(-1);
  }
  i++;
  arr.shift();
}
console.log(temp);