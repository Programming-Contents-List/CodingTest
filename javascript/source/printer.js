let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출
let stack = input.map(el => el.split(' '));
let temp = Array(6).fill(0);
for (let i = 0; i < stack.length; i++) {
  for (let j = 0; j < stack[i].length; j++) {
    console.log(stack[i][j]);
  }
}
// console.log(stack);
