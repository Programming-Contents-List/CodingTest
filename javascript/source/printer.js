let path = require("path");
let inputPath = path.join(__dirname, "/dev/stdin"); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require("fs")
  .readFileSync(inputPath)
  .toString()
  .trim()
  .split("\r\n");
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');  //백준 제출

// console.log(input);
// let result = [];
input.map((el) => {
  let reversed = el.split("").reverse();
  // console.log(el);
  let newEl = reversed.join("");
  // console.log(newEl);
  if (el === newEl) {
    console.log("true");
  } else {
    console.log("false");
  }
});
