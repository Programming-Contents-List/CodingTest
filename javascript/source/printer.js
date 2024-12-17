let path = require("path");
let inputPath = path.join(__dirname, "/dev/stdin"); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require("fs").readFileSync(inputPath).toString().trim().split("");
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');  //백준 제출

let array = "abcdefghijklmnopqrstuvwxyz";

const n = array.length;
const exit = Array(n).fill(0);
// console.log(input);
input.forEach((el) => {
  let index = array.indexOf(el);
  // indexOf는 배열이 존재하지 않으면 -1을 반환한다. 그래서 예외 처리를 하기 위해서 조건문을 추가 했다.
  if (index !== -1) {
    exit[index] += 1;
    // exit[index]++;
  }
});

console.log(exit.join(" "));
