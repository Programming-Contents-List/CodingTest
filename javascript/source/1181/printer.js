let path = require("path");
let inputPath = path.join(__dirname, "../dev/stdin"); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require("fs").readFileSync(inputPath).toString().trim().split("\n");
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출
// 중복 제거
input = [...new Set(input)];
input.shift();
// 각 index의 값을 기준으로 정렬
// sort는 숫자와 문자는 다르게 조건식을 주어야 한다.
let array = input.sort(function (a, b) {
  if (a.length !== b.length) {
    return a.length - b.length; // 길이를 기준으로 오름차순 정렬
  } else {
    // return a.localeCompare(b); // 길이가 같으면 알파벳 순으로 정렬
    // 알파벳 순 정렬
    if (a < b) return -1; // a가 b보다 앞서면 -1
    if (a > b) return 1; // a가 b보다 뒤면 1
    return 0; // a와 b가 같으면 0
  }
});
console.log(array.join("\n"));
