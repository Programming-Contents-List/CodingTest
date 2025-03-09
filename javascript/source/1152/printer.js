let path = require("path");
let inputPath = path.join(__dirname, "/dev/stdin"); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require("fs")
  .readFileSync(inputPath)
  .toString()
  .trim()
  .split("\r\n");
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출

// console.log(input);
//length는 길이, 즉 배열의 크기를 카운트 하기 때문에 직접적인 단어를 카운트 해야한다.
const arr = input[0].trim().split(" ");
let result = 0;
arr.map((el) => {
  if (el) {
    result += 1;
  }
});
// const result = input.map(el => el.split(' ').length);
console.log(result);
