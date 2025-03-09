let path = require("path");
let inputPath = path.join(__dirname, "/dev/stdin"); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require("fs").readFileSync(inputPath).toString().trim().split("\n"); //\r\n
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출

// console.log(input);
const N = input.shift();
// const stack = new Array(input.length).fill(0);
const stack = [];
let result = 0;
// console.log(stack);

input.map((el) => {
  // console.log(typeof +el);
  if (+el != 0) {
    // && typeof +el === 'number'
    stack.push(+el);
  } else {
    stack.pop();
  }
  // console.log(stack);
});

stack.forEach((el) => (result += el));

console.log(result);
