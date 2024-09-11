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
let stack = [];

for (let i = 0; i < N; i++) {
  while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
    temp[stack.pop()] = arr[i];
  }
  stack.push(i);
}

while (stack.length) {
  temp[stack.pop()] = -1;
}

console.log(temp.join(' '));