let path = require("path");
let inputPath = path.join(__dirname, "/dev/stdin"); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require("fs")
  .readFileSync(inputPath)
  .toString()
  .trim()
  .split("\r\n");
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출

let array = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "g",
];

const n = array.length;
const exit = Array(n).fill(0);

input.forEach((el) => {
  el.split("").forEach((char) => {
    let index = array.indexOf(char);
    if (index !== -1) {
      exit[index] += 1;
    }
  });
});

console.log(exit.join(" "));
