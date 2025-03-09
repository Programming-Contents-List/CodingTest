let path = require("path");
let inputPath = path.join(__dirname, "../dev/stdin"); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require("fs")
  .readFileSync(inputPath)
  .toString()
  .trim()
  .split("\r\n");
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');  //백준 제출

input.filter((el) => {
  if (el === "0") return false; // 0인 경우 제거
  let newEl = el.split("").reverse().join("");
  console.log(el === newEl ? "yes" : "no");
  return true;
});
